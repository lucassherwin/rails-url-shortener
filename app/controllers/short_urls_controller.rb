class ShortUrlsController < ApplicationController
  allow_unauthenticated_access except: :index

  before_action :set_short_url, only: [ :destroy ]

  def index
    @short_urls = Current.user.short_urls.order(created_at: :desc).limit(10)

    respond_to do |format|
      format.html
      format.json { render json: @short_urls, only: [ :id, :alias, :long_url, :expires_at, :created_at, :clicks_count ] }
    end
  end

  def recent
    @short_urls = if Current.user
      Current.user.short_urls.order(created_at: :desc).limit(10)
    elsif session[:guest_token]
      ShortUrl.where(guest_token: session[:guest_token]).order(created_at: :desc).limit(10)
    else
      []
    end

    respond_to do |format|
      format.html
      format.json { render json: @short_urls, only: [ :id, :alias, :long_url, :expires_at, :created_at, :clicks_count ] }
    end
  end

  def redirect
    short_url = ShortUrl.find_by!(alias: params[:alias])

    TrackClickJob.perform_later(
      short_url.id,
      referrer:   request.referer,
      user_agent: request.user_agent,
      ip_address: request.remote_ip,
      clicked_at: Time.current
    )

    redirect_to short_url.long_url, allow_other_host: true
  rescue ActiveRecord::RecordNotFound
    render plain: "Short URL not found", status: :not_found
  end

  def create
    if Current.user
      @short_url = Current.user.short_urls.build(short_url_params)
    else
      token = (session[:guest_token] ||= SecureRandom.uuid)
      @short_url = ShortUrl.new(short_url_params.merge(guest_token: token))
    end

    if @short_url.save
      render json: @short_url, status: :created
    else
      render json: { errors: @short_url.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @short_url.destroy
    redirect_to short_urls_path, notice: "Short URL deleted."
  end

  private

  def set_short_url
    @short_url = Current.user.short_urls.find(params[:id])
  end

  def short_url_params
    params.require(:short_url).permit(:long_url, :alias, :expires_at)
  end
end

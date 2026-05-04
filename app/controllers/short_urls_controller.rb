class ShortUrlsController < ApplicationController
  allow_unauthenticated_access
  before_action :set_short_url, only: [ :destroy ]

  def index
    short_urls = if Current.user
      Current.user.short_urls.order(created_at: :desc).limit(10)
    elsif session[:guest_token]
      ShortUrl.where(guest_token: session[:guest_token]).order(created_at: :desc).limit(10)
    else
      []
    end

    respond_to do |format|
      format.html
      format.json { render json: short_urls }
    end
  end

  def show
    @short_url = nil # TODO -> find by ID or alias
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

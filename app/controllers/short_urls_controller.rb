class ShortUrlsController < ApplicationController
  allow_unauthenticated_access
  before_action :set_short_url, only: [ :destroy ]

  def index
    # @short_urls = Current.user.short_urls.order(created_at: :desc)
  end

  def show
    @user = Current.user
  end

  def create
    @short_url = Current.user.short_urls.build(short_url_params)
    if @short_url.save
      redirect_to short_urls_path, notice: "Short URL created."
    else
      @short_urls = Current.user.short_urls.order(created_at: :desc)
      render :index, status: :unprocessable_entity
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

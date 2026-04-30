class SessionsController < ApplicationController
  allow_unauthenticated_access only: %i[ new create ]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { redirect_to new_session_path, alert: "Try again later." }
  layout "main_layout"

  def new
  end

  def create
    Rails.logger.info(">>>> user params #{user_params.inspect}")
    if user = User.authenticate_by(user_params)
      start_new_session_for user
      redirect_to after_authentication_url
    else
      Rails.logger.info(">>>> here")
      redirect_to new_session_path, alert: "Try another email address or password."
    end
  end

  def destroy
    terminate_session
    redirect_to new_session_path, status: :see_other
  end

  private

  def user_params
    params.expect(user: [ :email_address, :password ])
  end
end

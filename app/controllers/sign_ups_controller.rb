class SignUpsController < ApplicationController
  allow_unauthenticated_access only: [ :create, :new ]

  def new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      Rails.logger.info(">>>> here #{@user.inspect}")
      start_new_session_for @user
      redirect_to after_authentication_url, notice: "Welcome aboard!"
    else
      Rails.logger.info(">>>> here in else #{@user.inspect}")
      flash[:create_alert] = "Something went wrong creating your account. Please check the form and try again."
      render :new, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.expect(user: [ :first_name, :last_name, :email_address, :username, :password ])
  end
end

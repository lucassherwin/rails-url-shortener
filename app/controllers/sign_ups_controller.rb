class SignUpsController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      start_new_session_for @user
      redirect_to after_authentication_url, notice: "Welcome aboard!"
    else
      render :show, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:authenticity_token, :email, :password, :firstname, :lastname)
  end
end

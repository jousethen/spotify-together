class UsersController < ApplicationController
  def create
    user = User.find_or_create_by(user_params)
    user.save;
  end

   private 
  def user_params
    params.require(:user).permit(:email, :displayName)
  end
end

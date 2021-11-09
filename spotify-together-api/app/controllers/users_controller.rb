class UsersController < ApplicationController
  def create
    puts params;
    user = User.find_or_create_by(user_params)
    puts user;
    user.save;
  end

   private 
  def user_params
    params.require(:user).permit(:email, :display_name)
  end
end

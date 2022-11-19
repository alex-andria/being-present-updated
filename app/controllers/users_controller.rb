class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create]
    skip_before_action :authorize

    def index
      render json: User.all
    end 

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
    #   puts "user: #{session[:user_id]}"
      render json: user, status: :created
    end
  
    def show
        user = User.find_by(id: session[:user_id])
        puts "***params***: #{params}"
        if user
          render json: user, status: :ok
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
  
    private
  
    def user_params
      params.permit(:first_name, :last_name, :email, :profile_image, :bio, :password, :password_confirmation, :username)
    end
  
end
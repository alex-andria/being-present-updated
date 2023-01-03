class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private 

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    puts "Current user ******** #{@current_user} *****"
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    # unless @current_user != nil
    #   render json: { errors: ["Application not authorized"] }, status: :unauthorized
    # end
    # @current_user = User.find_by(id: session[:user_id])
    # puts "Current user ******** #{@current_user}"
    # render json: { errors: ["Application not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_not_found(error)
    render json: {error: "#{error.model} Not Found"}, status: :not_found 
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
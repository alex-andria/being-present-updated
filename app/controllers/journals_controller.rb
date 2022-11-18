class JournalsController < ApplicationController

    def index
        render json: Journal.all
      end
  
    def show
        journal = Journal.find(params[:id])
        render json: journal
    end 
    
    def create
        journal = @current_user.journals.create!(journal_params)
        render json: journal, status: :created
    end
    
    private
    
    def journal_params
        params.permit( :mind, :body, :journal_image, :journal_entry, :journal_date, :user_id)
    end
end

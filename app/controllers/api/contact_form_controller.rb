module Api
  class ContactFormController < ApplicationController
    def new
      @contact = ContactForm.new
    end

    def create
      @contact = ContactForm.new(params[:contact_form])
      respond_to do |format|
        format.json{
          @contact.request = request
          if @contact.deliver
            render json: "Contact form delivered".to_json, status: :created
          else
            render json: @contact.errors.to_json, status: :unprocessable_entity
          end
        }
      end
    end
  end
end

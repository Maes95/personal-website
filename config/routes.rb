Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :contact_form, only: [:new, :create]
  end

  root 'application#index'
  get '*path', to: 'application#index'
  get '/' => 'application#index'

end

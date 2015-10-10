Rails.application.routes.draw do
  root 'application#index'
  get '*path', to: 'application#index'
  get '/' => 'application#index'

end

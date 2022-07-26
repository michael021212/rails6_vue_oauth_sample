Rails.application.routes.draw do
  root 'home#index'

  get "/auth/:provider/callback" => "sessions#create"
  delete "/logout" => "sessions#destroy"
  resources :hospitals, only: %i[index]
end

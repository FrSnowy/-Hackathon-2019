Rails.application.routes.draw do
  scope format: false do
    root 'home#index'
  end

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :events, only: %i[index create show update destroy]
      resource :sessions, only: :create

      resource :users, only: %i[create update destroy] do
        get :check_email
        post :reset_password
      end
    end
  end
end

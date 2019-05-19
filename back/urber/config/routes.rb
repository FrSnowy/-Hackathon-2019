Rails.application.routes.draw do
  scope format: false do
    root 'home#index'
  end

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :events, only: %i[index create show update destroy]
      resource :sessions, only: :create
      resources :subscriptions, only: %i[index create destroy]

      resource :users, only: %i[create show update destroy] do
        get :check_email
        post :reset_password
      end
    end
  end
end

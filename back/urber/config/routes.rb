Rails.application.routes.draw do
  scope format: false do
    root 'home#index'
  end

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resource :users, only: %i[create update destroy] do
        get :check_email
        post :authenticate
      end
    end
  end
end

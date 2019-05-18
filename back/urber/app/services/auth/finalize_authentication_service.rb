module Auth
  class FinalizeAuthenticationService < ApplicationService
    def initialize(user)
      @user = user
    end

    def call
      return unless request

      request.reset_session
      session[:user_id] = @user.id
    end
  end
end

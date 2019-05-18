module Auth
  class DeauthenticateService < ApplicationService
    def call
      request&.reset_session
    end
  end
end

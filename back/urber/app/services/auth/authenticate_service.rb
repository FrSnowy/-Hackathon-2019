module Auth
  class AuthenticateService < ApplicationService
    def initialize(email, password)
      @email = email.strip_special_chars
      @password = password
    end

    def call
      verify_email
      verify_password

      FinalizeAuthenticationService.new(user).call
    end

    private

    def verify_email
      raise WrongEmail unless user
    end

    def user
      @user ||= User.select_auth.find_by(email: @email)
    end

    def verify_password
      raise WrongPassword if SCrypt::Password.new(user.password_digest) != @password
    end
  end
end

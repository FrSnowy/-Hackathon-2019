module Auth
  class RegisterService
    def initialize(email)
      @email = email.strip_special_chars
    end

    def call
      verify_email

      user = create_user
      send_password
      FinalizeAuthenticationService.new(user).call
    end

    private

    def verify_email
      raise UsedEmail if CheckEmailService.new(@email).call
    end

    def create_user
      User.create!(
        email: @email,
        password_digest: password_digest
      )
    end

    def password_digest
      @password_digest ||= SCrypt::Password.create(password)
    end

    def password
      @password ||= SecureRandom.hex(4).upcase
    end

    def send_password
      AuthMailer.welcome_password(@email, password).deliver_later
    end
  end
end

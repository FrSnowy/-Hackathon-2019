module Auth
  class ResetPasswordService
    def initialize(email)
      @email = email
    end

    def call
      verify_email

      update_user
      send_password
    end

    private

    def verify_email
      raise WrongEmail unless user
    end

    def user
      @user ||= User.find_by(email: @email)
    end

    def update_user
      user.update!(password_digest: password_digest)
    end

    def password_digest
      @password_digest ||= SCrypt::Password.create(password)
    end

    def password
      @password ||= SecureRandom.hex(4).upcase
    end

    def send_password
      # AuthMailer.welcome_password(@email, password).deliver_later
    end
  end
end

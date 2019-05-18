module Auth
  class CheckEmailService
    def initialize(email)
      @email = email.strip_special_chars
    end

    def call
      email_used?
    end

    private

    def email_used?
      User.exists?(email: @email)
    end
  end
end

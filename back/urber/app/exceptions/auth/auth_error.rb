module Auth
  class AuthError < StandardError
    def initialize(message = nil)
      super(message || I18n.t("exceptions.auth.#{self.class.name.underscore}"))
    end
  end
end

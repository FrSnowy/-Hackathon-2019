# frozen_string_literal: true

module Auth
  class AuthError < StandardError
    def initialize(message = nil)
      super(message || I18n.t("exceptions.auth.#{self.class.name.demodulize.underscore}"))
    end
  end
end

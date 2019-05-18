# frozen_string_literal: true

module JWT
  class DecodeService
    ALGORITHM = 'HS256'

    def initialize(token)
      @token = token
    end

    def call
      payload, _header = JWT.decode(@token, secret_key, true, algorithm: ALGORITHM)
      payload.with_indifferent_access
    rescue JWT::ExpiredSignature
      nil
    end

    private

    def secret_key
      Rails.application.secrets.secret_key_base
    end
  end
end

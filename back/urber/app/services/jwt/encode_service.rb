module JWT
  class EncodeService
    def initialize(payload)
      @payload = payload
    end

    def call
      JWT.encode(@payload, secret_key)
    end

    private

    def secret_key
      Rails.application.secrets.secret_key_base
    end
  end
end

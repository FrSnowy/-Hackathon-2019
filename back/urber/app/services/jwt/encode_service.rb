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
      'custom_key'
    end
  end
end

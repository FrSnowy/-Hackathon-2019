module Auth
  class EncodePayloadService
    TOKEN_TTL = 1.day

    def initialize(user)
      @user = user
    end

    def call
      JWT::EncodeService.new(payload).call
    end

    private

    def payload
      {
        user_id: @user.id,
        exp: TOKEN_TTL.from_now.to_i
      }
    end
  end
end

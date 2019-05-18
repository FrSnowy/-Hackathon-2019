# frozen_string_literal: true

module JWT
  class DecodeUserService
    def initialize(headers)
      @headers = headers
    end

    def call
      User.find_by(id: user_id) if user_id
    end

    private

    def user_id
      payload['user_id'] if payload
    end

    def payload
      DecodeService.new(token).call if token
    end

    def token
      authorization_header&.split(' ')&.last
    end

    def authorization_header
      @headers['Authorization']
    end
  end
end

module API
  module V1
    module TokenAuthenticatable
      extend ActiveSupport::Concern

      included do
        attr_reader :current_user

        before_action :set_current_user
      end

      private

      def set_current_user
        @current_user = JWT::DecodeUserService.new(request.headers).call
      end
    end
  end
end

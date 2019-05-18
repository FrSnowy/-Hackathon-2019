module API
  module V1
    class SessionsController < APIController
      def create
        AuthenticateService.new(email, password).call
        head :ok
      end

      def destroy
        DeauthenticateService.new.call
        head :ok
      end

      private

      def email
        @email ||= user_params.fetch(:email)
      end

      def user_params
        @user_params ||= params.require(:user).permit(:email, :password)
      end

      def password
        @password ||= user_params.fetch(:password)
      end
    end
  end
end

module API
  module V1
    class UsersController < APIController
      def create
        token = Auth::RegisterService.new(email).call
        created(token: token)
      end

      def update
      end

      def destroy
      end

      def check_email
        status = Auth::CheckEmailService.new(email).call ? :ok : :not_found
        head status
      end

      private

      def email
        @email ||= params.require(:user).permit(:email).fetch(:email)
      end
    end
  end
end

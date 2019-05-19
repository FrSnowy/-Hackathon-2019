module API
  module V1
    class UsersController < APIController
      PERMITTED_ATTRIBUTES = %i[
        name
        phone
        contacts
      ].freeze

      def create
        token = Auth::RegisterService.new(email).call
        created(token: token)
      end

      def show
        authorize current_user

        ok(current_user)
      end

      def update
        authorize current_user

        current_user.update!(user_params)
        head :ok
      end

      def destroy
        authorize current_user

        current_user.destroy!
        head :ok
      end

      def check_email
        status = Auth::CheckEmailService.new(email).call ? :ok : :not_found
        head status
      end

      def reset_password
        Auth::ResetPasswordService.new(email).call
        head :ok
      end

      private

      def email
        @email ||= params.require(:user).require(:email)
      end

      def user_params
        @user_params ||= params.require(:user).permit(PERMITTED_ATTRIBUTES)
      end
    end
  end
end

module API
  module V1
    module AuthExceptionHandleable
      extend ActiveSupport::Concern

      included do
        rescue_from Auth::UsedEmail do |error|
          conflict(error.message)
        end

        rescue_from Auth::WrongEmail do |error|
          unprocessable(error.message)
        end

        rescue_from Auth::WrongPassword do |error|
          unprocessable(error.message)
        end
      end
    end
  end
end

module API
  module V1
    module ExceptionHandleable
      extend ActiveSupport::Concern

      included do
        rescue_from ActiveRecord::RecordNotFound do |error|
          not_found(error.message)
        end

        rescue_from ActiveRecord::RecordInvalid do |error|
          unprocessable(error.message)
        end
      end
    end
  end
end

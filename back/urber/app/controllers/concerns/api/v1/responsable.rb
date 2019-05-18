module API
  module V1
    module Responsable
      def ok(object)
        response(:ok, object)
      end

      def created(object)
        response(:created, object)
      end

      def bad_request(errors)
        response_error(:bad_request, errors)
      end

      def not_found(errors)
        response_error(:not_found, errors)
      end

      def conflict(errors)
        response_error(:conflict, errors)
      end

      def unprocessable(errors)
        response_errors(:unprocessable_entity, errors)
      end

      private

      def response(status, object)
        render json: object, status: status
      end

      def response_error(status, errors)
        object = {}
        if errors.is_a?(String)
          object[:message] = errors
        else
          object[:errors] = errors
        end
        response(status, object)
      end
    end
  end
end

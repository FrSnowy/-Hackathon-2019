module Utils
  class RequestStorage
    class << self
      def [](key)
        storage[key]
      end

      def []=(key, value)
        storage[key] = value
      end

      def destroy
        Thread.current[:request_storage] = nil
      end

      private

      def storage
        Thread.current[:request_storage] ||= {}
      end
    end
  end
end

class Req < Utils::RequestStorage; end

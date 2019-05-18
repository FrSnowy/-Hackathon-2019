module API
  module V1
    class APIController < ApplicationController
      include Responsable
      include ExceptionHandleable
      include AuthExceptionHandleable

      around_action :set_locale, :set_time_zone, :destroy_request_storage
      before_action :initialize_request_storage

      private

      def set_locale
        locale = cookies.signed[:locale]
        return yield unless locale

        available_locale = locale if I18n.available_locales.map(&:to_s).include?(locale)
        begin
          I18n.locale = available_locale || I18n.default_locale
          yield
        ensure
          I18n.locale = I18n.default_locale
        end
      end

      def set_time_zone
        time_zone_minutes = cookies[:time_zone]
        return yield unless time_zone_minutes

        time_zone = ActiveSupport::TimeZone[time_zone_minutes.to_i.minutes]
        Time.use_zone(time_zone) { yield }
      end

      def initialize_request_storage
        Req[:request] = request
      end

      def destroy_request_storage
        yield
      ensure
        Req.destroy
      end
    end
  end
end

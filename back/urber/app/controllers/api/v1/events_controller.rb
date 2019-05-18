module API
  module V1
    class EventsController < APIController
      PERMITTED_ATTRIBUTES = %i[
        title
        description
        photo
        location
        meeting_location
        meeting_at
      ].freeze

      before_action :authorize, only: %i[create update destroy]
      before_action :verify_owner, only: %i[update destroy]

      def index
        ok(Event.all)
      end

      def create
        Event.create!(event_params.merge(user_id: current_user.id))
        head :ok
      end

      def show
        ok(event)
      end

      def update
        event.update!(event_params)
        head :ok
      end

      def destroy
        event.destroy!
        head :ok
      end

      private

      def verify_owner
        head :forbidden if event.user_id != current_user.id
      end

      def event
        @event ||= Event.find(event_id)
      end

      def event_id
        @event_id ||= params.require(:id)
      end

      def event_params
        @event_params ||= params.require(:event).permit(PERMITTED_ATTRIBUTES)
      end
    end
  end
end

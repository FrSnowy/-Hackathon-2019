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

      def index
        ok(events)
      end

      def create
        authorize new_event

        create_event
        head :ok
      end

      def show
        ok(event)
      end

      def update
        authorize event

        update_event
        head :ok
      end

      def destroy
        authorize event

        event.destroy!
        head :ok
      end

      private

      def events
        @events ||= Event.all
      end

      def new_event
        @new_event ||= Event.new
      end

      def create_event
        new_event.assign_attributes(event_params.merge(user_id: current_user.id))
        new_event.photo.attach(event_params[:photo])
        new_event.save!
      end

      def event_params
        @event_params ||= params.require(:event).permit(PERMITTED_ATTRIBUTES)
      end

      def event
        @event ||= Event.find(event_id)
      end

      def update_event
        event.update!(event_params)
        event.photo.attach(event_params[:photo])
      end

      def event_id
        @event_id ||= params.require(:id)
      end
    end
  end
end

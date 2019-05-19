module API
  module V1
    class SubscriptionsController < APIController
      def index
        authorize subscriptions

        ok(subscriptions)
      end

      def create
        authorize new_subscription

        create_subscription
        head :ok
      end

      def destroy
        authorize subscription

        subscription.destroy!
        head :ok
      end

      private

      def subscriptions
        @subscriptions ||= Subscription.all
      end

      def new_subscription
        @new_subscription ||= Subscription.new
      end

      def create_subscription
        new_subscription.assign_attributes(user: current_user, event_id: event_id)
        new_subscription.save!
      end

      def event_id
        @event_id ||= params.require(:event).require(:id)
      end

      def subscription
        @subscription ||= Subscription.find(subscription_id)
      end

      def subscription_id
        @subscription_id ||= params.require(:id)
      end
    end
  end
end

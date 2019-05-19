class SubscriptionPolicy < ApplicationPolicy
  alias index? authorized?
  alias create? authorized?

  alias destroy? owner?
end

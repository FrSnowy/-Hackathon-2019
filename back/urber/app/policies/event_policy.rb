class EventPolicy < ApplicationPolicy
  alias create? authorized?

  alias update? owner?
  alias destroy? owner?
end

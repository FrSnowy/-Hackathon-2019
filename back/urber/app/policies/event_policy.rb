class EventPolicy < ApplicationPolicy
  alias create? authorized?

  def owner?
    return false unless authorized?

    record.user_id == user.id
  end
  alias update? owner?
  alias destroy? owner?
end

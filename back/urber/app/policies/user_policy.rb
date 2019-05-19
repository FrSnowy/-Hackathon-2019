class UserPolicy < ApplicationPolicy
  alias show? authorized?
  alias update? authorized?
  alias destroy? authorized?
end

class Subscription < ApplicationRecord
  validates :user, presence: true, uniqueness: {scope: :event}
  validates :event, presence: true, uniqueness: {scope: :user}

  belongs_to :user
  belongs_to :event
end

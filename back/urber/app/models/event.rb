class Event < ApplicationRecord
  validates :title, presence: true, length: {maximum: 255}
  validates :description, length: {maximum: 1_000}
  validates :location, :meeting_location, length: {maximum: 255}
  validates :user_id, presence: true
end

class Event < ApplicationRecord
  has_one_attached :photo

  validates :title, presence: true, length: {maximum: 255}
  validates :description, length: {maximum: 1_000}
  validates :location, :meeting_location, length: {maximum: 255}
  validates :user, presence: true

  belongs_to :user
end

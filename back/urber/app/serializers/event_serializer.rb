class EventSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes(
    :id,
    :title,
    :description,
    :location,
    :meeting_location,
    :meeting_at,
    :created_at,
    :updated_at,
    :photo_path,
    :subscribed_users_count
  )
  belongs_to :user

  def photo_path
    rails_blob_path(object.photo) if object.photo.attached?
  end

  def subscribed_users_count
    object.subscribed_users.count
  end
end

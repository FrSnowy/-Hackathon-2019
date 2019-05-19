class EventSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes(
    :id,
    :title,
    :description,
    :photo_link,
    :location,
    :meeting_location,
    :meeting_at,
    :created_at,
    :updated_at,
    :photo_path,
    :place,
    :date,
    :img,
    :author,
    :subscribers
  )
  belongs_to :user
  has_many :subscribed_users

  def photo_path
    rails_blob_path(object.photo) if object.photo.attached?
  end
  alias :img :photo_path

  def place
    object.location
  end

  def date
    object.meeting_at
  end

  def author
    {
      id: object.user.id,
      name: object.user.name,
      avatar: nil
    }
  end

  def subscribers
    object.subscribed_users.map do |subscribed_user|
      {
        profile: subscribed_user.id,
        avatar: nil
      }
    end
  end
end

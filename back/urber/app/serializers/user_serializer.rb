class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :phone, :contacts, :created_at, :updated_at
  has_many :events
  has_many :subscribed_events
end

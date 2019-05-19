class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :phone, :contacts, :created_at, :updated_at
end

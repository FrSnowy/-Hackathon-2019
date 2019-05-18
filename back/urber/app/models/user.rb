class User < ApplicationRecord
  validates :email, presence: true, uniqueness: {case_sensitive: false}, length: {maximum: 255}
  validates :password, presence: true
  validates :name, length: {maximum: 30}
  validates :phone, length: {maximum: 15}
  validates :contacts, length: {maximum: 1_000}

  scope :select_auth, -> do
    select(:id, :password, :email)
  end
end

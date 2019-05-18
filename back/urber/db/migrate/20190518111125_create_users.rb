class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.citext :email, null: false
      t.string :password_digest, limit: 255, null: false
      t.citext :name
      t.string :phone, limit: 15
      t.citext :contacts
      t.timestamps
    end

    add_unique_constraint :users, :email
  end
end

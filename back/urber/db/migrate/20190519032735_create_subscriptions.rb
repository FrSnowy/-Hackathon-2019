class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.references :user, null: false, index: false
      t.references :event, null: false, index: false
      t.datetime :completed_at
      t.timestamps
      t.foreign_key :users, name: 'fk_subscriptions_on_user_id', on_delete: :cascade, on_update: :cascade
      t.foreign_key :events, name: 'fk_subscriptions_on_event_id', on_delete: :cascade, on_update: :cascade
    end

    add_unique_constraint :subscriptions, %i[user_id event_id]
  end
end

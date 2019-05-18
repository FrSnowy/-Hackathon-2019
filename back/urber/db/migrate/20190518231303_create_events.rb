class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.citext :title, null: false
      t.citext :description
      t.string :photo
      t.citext :location
      t.citext :meeting_location
      t.datetime :meeting_at
      t.integer :user_id, null: false
      t.timestamps
    end

    add_foreign_key :events, :users, name: 'fk_events_on_user_id', on_delete: :cascade, on_update: :cascade
    add_index :events, :user_id
  end
end

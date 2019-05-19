class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.citext :title, null: false
      t.citext :description
      t.string :photo_link
      t.citext :location
      t.citext :meeting_location
      t.datetime :meeting_at
      t.references :user, null: false
      t.timestamps
      t.foreign_key :users, name: 'fk_events_on_user_id', on_delete: :cascade, on_update: :cascade
    end
  end
end

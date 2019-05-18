# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_18_231303) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "citext"
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.citext "title", null: false
    t.citext "description"
    t.string "photo"
    t.citext "location"
    t.citext "meeting_location"
    t.datetime "meeting_at"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.citext "email", null: false
    t.string "password_digest", limit: 255, null: false
    t.citext "name"
    t.string "phone", limit: 15
    t.citext "contacts"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "c_unique_users_on_email", unique: true
  end

  add_foreign_key "events", "users", name: "fk_events_on_user_id", on_update: :cascade, on_delete: :cascade
end

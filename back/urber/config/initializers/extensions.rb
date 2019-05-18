# Be sure to restart your server when you modify this file.

require 'extensions/active_record/base'
require 'extensions/active_record/connection_adapters/postgresql/schema_statements'
require 'extensions/active_record/migration/command_recorder'
require 'utils/core_ext/string'

ActiveSupport.on_load(:active_record) do
  ActiveRecord::ConnectionAdapters::PostgreSQLAdapter.
    include Extensions::ActiveRecord::ConnectionAdapters::PostgreSQL::SchemaStatements
  ActiveRecord::Migration::CommandRecorder.include Extensions::ActiveRecord::Migration::CommandRecorder
  include Extensions::ActiveRecord::Base
end

# frozen_string_literal: true

module Extensions
  module ActiveRecord
    module Base
      extend ActiveSupport::Concern

      class_methods do
        def upsert(attributes = {})
          modify_upsert_attributes(attributes)
          verify_readonly_attributes(attributes)

          execute_upsert(attributes)
        end

        private

        def modify_upsert_attributes(attributes)
          now = current_time_from_proper_timezone
          attributes.reverse_update(created_at: now) if column_names.include?('created_at')
          attributes.reverse_update(updated_at: now) if column_names.include?('updated_at')
        end

        def current_time_from_proper_timezone
          default_timezone == :utc ? Time.now.utc : Time.now
        end

        def verify_readonly_attributes(attributes)
          attributes.each_key do |key|
            raise ActiveRecordError, "#{key} is marked as readonly" if readonly_attributes.include?(key.to_s)
          end
        end

        def execute_upsert(attributes)
          sanitized_query = sanitize_sql([upsert_query(attributes), attributes])
          connection.execute(sanitized_query)
        end

        def upsert_query(attributes)
          upsert_column_names = attributes.keys
          conflict_key = upsert_column_names.first
          updatable_column_names = upsert_column_names - [conflict_key, 'created_at']
          joined_column_names = upsert_column_names.join(', ')
          values = ":#{upsert_column_names.join(', :')}"
          update_expression = updatable_column_names.map { |col| "#{col} = EXCLUDED.#{col}" }.join(', ')
          <<-SQL.squish
            INSERT INTO #{table_name} (#{joined_column_names})
            VALUES (#{values})
            ON CONFLICT (#{conflict_key})
            DO UPDATE SET #{update_expression}
          SQL
        end
      end
    end
  end
end

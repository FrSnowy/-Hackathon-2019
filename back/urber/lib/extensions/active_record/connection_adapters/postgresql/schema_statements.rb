# frozen_string_literal: true

module Extensions
  module ActiveRecord
    module ConnectionAdapters
      module PostgreSQL
        module SchemaStatements
          def create_enum_type(type_name, values = [])
            quoted_type_name = quote_table_name(type_name)
            quoted_values = quote_values(values)
            execute "CREATE TYPE #{quoted_type_name} AS ENUM (#{quoted_values});"
          end

          def add_enum_values(type_name, values = [])
            quoted_type_name = quote_table_name(type_name)
            quoted_values = quote_values(values)
            execute "ALTER TYPE #{quoted_type_name} ADD VALUE #{quoted_values};"
          end

          def drop_type(type_name, if_exists: false)
            quoted_type_name = quote_table_name(type_name)
            execute <<-SQL.squish
              DROP TYPE
                #{'IF EXISTS' if if_exists}
                #{quoted_type_name};
            SQL
          end

          def add_inclusion_constraint(table_name, column_name, within:)
            constraint_name = constraint_name(table_name, column_name, :inclusion)
            quoted_table_name = quote_table_name(table_name)
            quoted_column_name = quote_column_name(column_name)
            quoted_values = quote_values(within)
            execute <<-SQL.squish
              ALTER TABLE #{quoted_table_name}
              ADD CONSTRAINT #{constraint_name}
              CHECK (#{quoted_column_name} IN (#{quoted_values}));
            SQL
          end

          def remove_inclusion_constraint(table_name, column_name, if_exists: false)
            remove_constraint(table_name, column_name, :inclusion, if_exists: if_exists)
          end

          def add_numericality_constraint(table_name, column_name, options = {})
            constraint_name = constraint_name(table_name, column_name, :numericality)
            quoted_table_name = quote_table_name(table_name)
            quoted_column_name = quote_column_name(column_name)
            conditions = options.map { |operator, value| "#{quoted_column_name} #{operator} #{value}" }.join(' AND ')
            execute <<-SQL.squish
              ALTER TABLE #{quoted_table_name}
              ADD CONSTRAINT #{constraint_name}
              CHECK (#{conditions});
            SQL
          end

          def remove_numericality_constraint(table_name, column_name, if_exists: false)
            remove_constraint(table_name, column_name, :numericality, if_exists: if_exists)
          end

          def add_presence_constraint(table_name, column_name)
            constraint_name = constraint_name(table_name, column_name, :presence)
            quoted_table_name = quote_table_name(table_name)
            quoted_column_name = quote_column_name(column_name)
            execute <<-SQL.squish
              ALTER TABLE #{quoted_table_name}
              ADD CONSTRAINT #{constraint_name}
              CHECK ((#{quoted_column_name} IS NOT NULL) AND (#{quoted_column_name} !~ '^\\s*$'));
            SQL
          end

          def remove_presence_constraint(table_name, column_name, if_exists: false)
            remove_constraint(table_name, column_name, :presence, if_exists: if_exists)
          end

          def add_unique_constraint(table_name, column_names)
            constraint_name = constraint_name(table_name, column_names, :unique)
            quoted_table_name = quote_table_name(table_name)
            quoted_column_names = quote_column_names(column_names)
            execute <<-SQL.squish
              ALTER TABLE #{quoted_table_name}
              ADD CONSTRAINT #{constraint_name}
              UNIQUE (#{quoted_column_names});
            SQL
          end

          def remove_unique_constraint(table_name, column_names, if_exists: false)
            remove_constraint(table_name, column_names, :unique, if_exists: if_exists)
          end

          private

          def remove_constraint(table_name, column_names, type, if_exists: false)
            constraint_name = constraint_name(table_name, column_names, type)
            quoted_table_name = quote_table_name(table_name)
            execute <<-SQL.squish
              ALTER TABLE #{quoted_table_name}
              DROP CONSTRAINT
                #{'IF EXISTS' if if_exists}
                #{constraint_name};
            SQL
          end

          def constraint_name(table_name, column_names, type)
            column_names = column_names.join('_and_') if column_names.is_a?(Array)
            "c_#{type}_#{table_name.to_s[/[^.]+\z/]}_on_#{column_names}"
          end

          def quote_column_names(column_names)
            join_values(column_names, :quote_column_name)
          end

          def quote_values(values)
            join_values(values, :quote)
          end

          def join_values(values, processing)
            [*values].map { |value| public_send(processing, value) }.join(', ')
          end
        end
      end
    end
  end
end

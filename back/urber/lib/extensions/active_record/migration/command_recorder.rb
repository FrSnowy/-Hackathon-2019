module Extensions
  module ActiveRecord
    module Migration
      module CommandRecorder
        extend ActiveSupport::Concern

        included do
          %i[
            create_enum_type drop_type add_enum_values
            add_inclusion_constraint remove_inclusion_constraint
            add_numericality_constraint remove_numericality_constraint
            add_presence_constraint remove_presence_constraint
            add_unique_constraint remove_unique_constraint
          ].each do |method|
            class_eval <<-RUBY, __FILE__, __LINE__ + 1
              def #{method}(*args, &block)
                record(:"#{method}", args, &block)
              end
            RUBY
          end

          {
            create_enum_type: :drop_type,
            add_inclusion_constraint: :remove_inclusion_constraint,
            add_numericality_constraint: :remove_numericality_constraint,
            add_presence_constraint: :remove_presence_constraint,
            add_unique_constraint: :remove_unique_constraint
          }.each do |cmd, inv|
            [[inv, cmd], [cmd, inv]].uniq.each do |method, inverse|
              class_eval <<-RUBY, __FILE__, __LINE__ + 1
                def invert_#{method}(args, &block)
                  [:#{inverse}, args, block]
                end
              RUBY
            end
          end
        end
      end
    end
  end
end

class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.belongs_to :patient, index: true
      t.datetime :date
      t.float :result
      t.string :result_type
    end
  end
end

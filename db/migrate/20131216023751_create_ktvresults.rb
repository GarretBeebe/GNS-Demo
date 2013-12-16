class CreateKtvresults < ActiveRecord::Migration
   def change
    create_table :ktvresults do |t|
      t.belongs_to :patient, index: true
      t.datetime :ktv_date
      t.integer :ktv_result
      t.string :zemplar_usage
    end
  end
end

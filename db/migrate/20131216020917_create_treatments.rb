class CreateTreatments < ActiveRecord::Migration
  def change
    create_table :treatments do |t|
      t.belongs_to :patient, index: true
      t.belongs_to :provider, index: true
      t.datetime :treatment_date
      t.string :missed
    end
  end
end

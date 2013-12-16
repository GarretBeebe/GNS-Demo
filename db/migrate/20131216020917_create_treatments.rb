class CreateTreatments < ActiveRecord::Migration
  def change
    create_table :treatments do |t|
      t.belongs_to :patient, index: true
      t.belongs_to :provider, index: true
      t.datetime :month
      t.integer :number_of_missed_appointments
      t.string :zemplar_usage
    end
  end
end

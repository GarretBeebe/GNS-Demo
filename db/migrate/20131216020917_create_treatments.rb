class CreateTreatments < ActiveRecord::Migration
  def change
    create_table :treatments do |t|
      t.belongs_to :patient, index: true
      t.belongs_to :provider, index: true
      t.datetime :appointment_date
    end
  end
end

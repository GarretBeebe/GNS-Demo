class AddPrescriptionAndPredictedAndUserenteredToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :prescriptions, :integer
    add_column :locations, :predicted, :integer
    add_column :locations, :userentered, :integer
  end
end

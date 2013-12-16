class AddPrescriptionTimeToLocation < ActiveRecord::Migration
  def change
    add_column :locations, :prescription_time, :datetime
  end
end

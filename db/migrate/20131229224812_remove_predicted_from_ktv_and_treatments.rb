class RemovePredictedFromKtvAndTreatments < ActiveRecord::Migration
  def change
    remove_column :ktvresults, :predicted
  end
end

class AddPredictedToKtVresults < ActiveRecord::Migration
  def change
    add_column :ktvresults, :predicted, :string
  end
end

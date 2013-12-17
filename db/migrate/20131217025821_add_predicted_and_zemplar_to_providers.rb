class AddPredictedAndZemplarToProviders < ActiveRecord::Migration
  def change
    add_column :providers, :zemplar_usage, :string
    add_column :providers, :predicted, :string
  end
end

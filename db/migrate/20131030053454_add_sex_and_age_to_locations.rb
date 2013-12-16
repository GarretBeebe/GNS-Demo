class AddSexAndAgeToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :sex, :string
    add_column :locations, :age, :integer
  end
end

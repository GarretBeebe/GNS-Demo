class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.decimal :lat
      t.decimal :lng
      t.string :address
      t.float :value

      t.timestamps
    end
  end
end

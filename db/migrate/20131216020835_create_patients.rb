class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.belongs_to :provider, index: true
      t.string :first_name
      t.string :last_name
      t.string :sex
      t.string :race
      t.string :gender
      t.string :education
      t.string :access_type
    end
  end
end

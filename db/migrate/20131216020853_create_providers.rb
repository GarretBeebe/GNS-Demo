class CreateProviders < ActiveRecord::Migration
	def change
		create_table :providers do |t|
			t.string :first_name
			t.string :last_name
			t.string :title
		end
	end
end

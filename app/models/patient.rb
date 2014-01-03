class Patient < ActiveRecord::Base
	has_many :result

	def full_name
		"#{last_name}, #{first_name}"
	end
end
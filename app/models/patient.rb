class Patient < ActiveRecord::Base
	has_many :result
	has_many :treatment
	belongs_to :provider

	def full_name
		"#{last_name}, #{first_name}"
	end
end
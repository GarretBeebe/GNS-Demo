class Provider < ActiveRecord::Base
	has_many :treatment
	has_many :patient

	def full_name
		"#{last_name}, #{first_name} #{title}"
	end
end
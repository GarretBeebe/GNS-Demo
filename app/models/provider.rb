class Provider < ActiveRecord::Base
	
  def full_name
    "#{last_name}, #{first_name} #{title}"
  end
end
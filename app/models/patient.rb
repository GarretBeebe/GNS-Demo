class Patient < ActiveRecord::Base

  def full_name
    "#{last_name}, #{first_name}"
  end
end
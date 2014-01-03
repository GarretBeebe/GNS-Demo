class Treatment < ActiveRecord::Base

  def self.getTreatments(startDate, endDate, providerId)
    self.find_by_sql(
      "SELECT month, number_of_missed_appointments, patientId FROM treatments
      and provider_id = #{providerId}
      and month >= '#{startDate}' 
      and month <= '#{endDate}' 
      group_by patient_id"
    )
  end
end
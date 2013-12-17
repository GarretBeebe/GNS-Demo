class Treatment < ActiveRecord::Base

  def self.getData(startDate, endDate, patientId, providerId, zemplarUsage, predicted)
    self.find_by_sql(
      "SELECT month, number_of_missed_appointments, patientId FROM treatments
      where patient_id = #{patientId} 
      and provider_id = #{providerId}
      and month >= '#{startDate}' 
      and month <= '#{endDate}' 
      and zemplar = '#{zemplarUsage}'
      and predicted = '#{predicted}'
      group_by patient_id"
    )
  end
end
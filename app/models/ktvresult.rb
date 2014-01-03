class Ktvresult < ActiveRecord::Base

  def self.getData(startDate, endDate, patientId)
    self.find_by_sql(
      "SELECT ktv_date, ktv_result FROM ktvresults
      where patient_id = #{patientId} 
      and ktv_date >= '#{startDate}'
      and ktv_date <= '#{endDate}'
      ORDER BY ktv_date ASC"
    )
  end
end
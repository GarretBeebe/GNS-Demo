class Ktvresult < ActiveRecord::Base

  def self.getData(startDate, endDate, patientId, zemplarUsage, predicted)
    self.find_by_sql(
      "SELECT ktv_date, ktv_result FROM ktvresults
      where patient_id = #{patientId} 
      and ktv_date >= '#{startDate}'
      and ktv_date <= '#{endDate}'
      and zemplar_usage = '#{zemplarUsage}'
      and predicted = '#{predicted}'
      ORDER BY ktv_date ASC"
    )
  end
end
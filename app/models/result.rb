class Result < ActiveRecord::Base

  belongs_to :patient

  def self.getResults(startDate, endDate, patientId, resultType)
    self.find_by_sql(
      "SELECT date, result FROM results
      where patient_id = #{patientId} 
      and date >= '#{startDate}'
      and date <= '#{endDate}'
      and result_type = '#{resultType}'
      ORDER BY date ASC"
    )
  end
end
class Treatment < ActiveRecord::Base

	belongs_to :provider
	belongs_to :patient

	def self.getMissedTreatments(startDate, endDate, providerId)
		self.find_by_sql(
			"SELECT patient_id, treatment_month, count(*)
			 FROM
				(SELECT patient_id, date_trunc('month', treatment_date) as treatment_month
 				 FROM treatments
 				 WHERE provider_id = #{patientId} 
      			 AND treatment_date >= '#{startDate}'
      			 AND treatment_date <= '#{endDate}') as a
 			 GROUP BY patient_id, treatment_month
 			 ORDER BY treatment_month asc"
		)
	end
end
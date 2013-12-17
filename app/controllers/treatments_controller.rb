class TreatmentsController < ApplicationController
  respond_to :html, :xml, :json

  def index
  	
  end

  def getTreatmentData
  	startDate = Chronic.parse(params[:startDate])
    endDate = Chronic.parse(params[:endDate])
    patientID = params[:patientId]
    providerID = params[:providerId]
    zemplarUsage = params[:zemplarUsage]
    predicted = params[:predicted]
    treatmentResults = Treatment.getDataWithZemplar(startDate, endDate, patientID, zemplarUsage, predicted)

    respond_to do |format|
      format.json { render :json => treatmentResults }
    end
  end
end

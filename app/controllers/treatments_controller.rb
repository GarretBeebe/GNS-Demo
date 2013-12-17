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
    results = Treatment.getDataWithZemplar(startDate, endDate, patientId, zemplarUsage, predicted)

    respond_to do |format|
      format.json { render :json => results }
    end
  end
end

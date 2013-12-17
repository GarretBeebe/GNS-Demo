class TreatmentsController < ApplicationController
  respond_to :html, :xml, :json

  def index
  	
  end

  def getTreatmentData
  	startDate = Chronic.parse(params[:startDate])
    endDate = Chronic.parse(params[:endDate])
    providerID = params[:providerId]
    zemplarUsage = params[:zemplarUsage]
    predicted = params[:predicted]
    results = Treatment.getData(startDate, endDate, providerId, zemplarUsage, predicted)

    respond_to do |format|
      format.json { render :json => results }
    end
  end
end

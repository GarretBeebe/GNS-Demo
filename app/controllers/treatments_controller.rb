class TreatmentsController < ApplicationController
  respond_to :html, :xml, :json

  def index
  	
  end

  def getTreatments
  	startDate = Chronic.parse(params[:startDate])
    endDate = Chronic.parse(params[:endDate])
    providerID = params[:providerId]
    results = Treatment.getTreatments(startDate, endDate, providerId)

    respond_to do |format|
      format.json { render :json => results }
    end
  end
end

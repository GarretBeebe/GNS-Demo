class TreatmentsController < ApplicationController
  respond_to :html, :xml, :json

  def index
  	
  end

  def getMissedTreatments
  	startDate = Chronic.parse(params[:startDate])
    endDate = Chronic.parse(params[:endDate])
    providerId = params[:providerId]
    results = Treatment.getMissedTreatments(startDate, endDate, providerId)

    respond_to do |format|
      format.json { render :json => results }
    end
  end
end

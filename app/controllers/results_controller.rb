class ResultsController < ApplicationController
  respond_to :html, :xml, :json

  def index

  end

  def getResults
    startDate = Chronic.parse(params[:startDate])
    endDate = Chronic.parse(params[:endDate])
    patientId = params[:patientId]
    resultType = params[:resultType]
    results = Result.getResults(startDate, endDate, patientId, resultType)

    respond_to do |format|
      format.json { render :json => results }
    end
  end
end

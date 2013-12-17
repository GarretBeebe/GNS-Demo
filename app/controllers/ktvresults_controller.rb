class KtvresultsController < ApplicationController
  respond_to :html, :xml, :json

  def index

  end

  def getKTVData
    startDate = Chronic.parse(params[:startDate])
    endDate = Chronic.parse(params[:endDate])
    patientId = params[:patientId]
    zemplarUsage = params[:zemplarUsage]
    predicted = params[:predicted]
    results = Ktvresult.getData(startDate, endDate, patientId, zemplarUsage, predicted)

    respond_to do |format|
      format.json { render :json => results }
    end
  end
end

class LocationsController < ApplicationController
  respond_to :html, :xml, :json

  def index
  	
  end

  def getMapData
  	sw = params[:sw]
  	ne = params[:ne]
    startDate = Chronic.parse(params[:startDate])
    endDate = Chronic.parse(params[:endDate])
    dataType = params[:dataType]
  	locations = Locations.geo_search(sw, ne, startDate, endDate, dataType)
  
    respond_to do |format|
      format.json { render :json => locations }
    end
  end

  def getGraphData
    sw = params[:sw]
    ne = params[:ne]
    startDate = Chronic.parse(params[:startDate])
    endDate = Chronic.parse(params[:endDate])
    dataType = params[:dataType]
    graphData = Locations.get_graph_data(sw, ne, startDate, endDate, dataType)
  
    respond_to do |format|
      format.json { render :json => graphData }
    end
  end

  def addData
    address = params[:address]
    prescription_time = Chronic.parse(params[:date])
    sex = params[:sex]
    age = params[:age]
    new_location = Locations.create(address: address, value: '1', created_at: Time.now, 
    updated_at: Time.now, prescription_time: prescription_time, prescriptions: '0', predicted: '0', userentered: '1', sex: sex, age: age)
    render :nothing => true
  end  
end

class Locations < ActiveRecord::Base
	#need this for geokit
	#acts_as_mappable

	#need this for geocoder
	#To bulk geocode a data set use the following rake command:
	# rake geocode:all CLASS=Locations
	#Refer to https://github.com/alexreisner/geocoder Bulk Geocoding
	# geocoded_by :address, :latitude  => :lat, :longitude => :lng
	# after_validation :geocode, :if => :address_changed?

	# attr_accessible :address, :lat, :lng, :value, :created_at, :updated_at, 
	# 								:prescription_time, :prescriptions, :predicted, :userentered,
	# 								:sex, :age

	#it is possible to build even more complicated query conditions. 
	#I decided to wrap the geo_scope method so that we can use
	#these additional parameters at a later date.
	# def self.geo_search(sw, ne, startDate, endDate, dataType)
	# 	where_string = "prescription_time >= '#{startDate}' AND prescription_time <= '#{endDate}' AND #{dataType} = 1" 
 #   	self.geo_scope(bounds: [sw, ne]).
 #    where(where_string)
	# end

	# def self.get_graph_data(sw, ne, startDate, endDate, dataType)
	# 	self.geo_search(sw, ne, startDate, endDate, dataType).
	# 	select("count(*) as total, prescription_time").
	# 	group("prescription_time").
	# 	order("prescription_time ASC")
	# end
end

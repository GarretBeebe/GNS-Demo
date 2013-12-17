RailsMapTest::Application.routes.draw do
  root :to => 'locations#index'
  match '/getKTVData', :to => 'Ktvresults#getKTVData'
  match '/getTreatmentData', :to => 'treatments#getTreatmentData'
end

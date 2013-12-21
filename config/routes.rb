RailsMapTest::Application.routes.draw do
  root :to => 'base#index'
  match '/getKTVData', :to => 'Ktvresults#getKTVData'
  match '/getTreatmentData', :to => 'treatments#getTreatmentData'
end

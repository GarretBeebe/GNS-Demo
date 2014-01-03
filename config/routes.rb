RailsMapTest::Application.routes.draw do
  root :to => 'base#index'
  match '/getResults', :to => 'results#getResults'
  match '/getTreatments', :to => 'treatments#getTreatments'
end

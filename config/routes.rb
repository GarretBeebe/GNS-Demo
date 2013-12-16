GNSDemo::Application.routes.draw do
  root :to => 'main#index'
  match '/getTreatments', :to => 'treatments#getTreatments'
  match '/getKTVResults', :to => 'ktvresults#getKTVResults'
  match '/getPatients', :to => 'patients#getPatients'
  match '/getProviders', :to => 'providers#getProviders'
end

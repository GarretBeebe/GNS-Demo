RailsMapTest::Application.routes.draw do
  root :to => 'locations#index'
  match '/getMapData', :to => 'locations#getMapData'
  match '/getGraphData', :to => 'locations#getGraphData'
  match '/addData', :to => 'locations#addData'
end

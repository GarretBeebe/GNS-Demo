//stole most of this directly from https://developers.google.com/maps/documentation/javascript/examples/layer-heatmap
//Added function for applying styles, which in reality amounts to turning off roads and transit visualizations.
//Added functionality for looking up data surrounding a given address supplied by the user.
var map, pointarray, heatmap, countyLayer, styles, mapData, graphData;

var MapHandler = function() {

  var dHandler = new dataHandler();
  var geocoder = new google.maps.Geocoder();
  var gHandler = new GraphHandler();

  this.initialize = function() {
    var mapOptions = {zoom: 5, center: new google.maps.LatLng(40.0000, -100.0000)};

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    this.codeAddress();
    this.applyStyles();
    this.loadKmlLayer();
    this.contrastMap();
  }

  this.loadKmlLayer = function() {
    countyLayer = new google.maps.FusionTablesLayer({
      map: map,
      query: {
        select: "col13",
        from: "1INYs3gG9c8dwMlYGuraF9bSOLL5rd50MxLf4izU",
        where: ""
      },
      options: {
        styles : [
          {
            polygonOptions:
            {
              strokeColor: "#FFFFFF",
              fillColor: "#FFFFFF",
              fillOpacity: "0"
            }
          }
        ]
      }
    });
  }

  this.toggleCounties = function() {
    countyLayer.setMap(countyLayer.getMap() ? null : map);
  }

  this.toggleHeatmap = function() {
    heatmap.setMap(heatmap.getMap() ? null : map);
  }

  this.clearHeatmap = function() {
    heatmap.setMap(null);
  }

  this.applyStyles = function() {
    styles = [
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          { "visibility": "off" }
        ]
      }
    ];

    map.setOptions({styles: styles});
  }

  this.contrastMap = function() {
    styles = [
      {
        "featureType": "road",
        "stylers": [
            { "visibility": "off" }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          { "visibility": "off" }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          { "saturation": -100 },
          { "lightness": -75 }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          { "lightness": 67 },
          { "saturation": -100 }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          { "weight": 5.3 },
          { "lightness": -58 }
        ]
      },
      {
        "featureType": "landscape.natural.terrain",
        "stylers": [
          { "hue": "#0099ff" },
          { "color": "#808080" },
          { "lightness": 4 }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          { "saturation": -100 },
          { "visibility": "off" }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          { "visibility": "on" },
          { "saturation": -50 }
        ]
      },
      {
        "featureType": "road.arterial",
        "stylers": [
          { "visibility": "on" }
        ]
      },
    ];
    map.setOptions({styles: styles});
  }

  this.changeGradient = function() {
    heatmap.setOptions({
      gradient: heatmap.get('gradient') ? null : gradient
    });
  }

  this.changeRadius = function() {
    heatmap.setOptions({radius: heatmap.get('radius') ? null : 20});
  }

  this.changeOpacity = function() {
    heatmap.setOptions({opacity: heatmap.get('opacity') ? null : 0.8});
  }

  this.codeAddress = function() {
    var address = $('#address').val();
    var dataType = $('input[name=group1]:checked').val();
    
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        mapData = dHandler.getMapData(results, dataType);
        graphData = dHandler.getGraphData(results, dataType);
        gHandler.getGraph(graphData, 'bar', '#graph-container2');
        gHandler.getGraph(graphData, 'area', '#graph-container1');
        pointArray = new google.maps.MVCArray(mapData);
        heatmap = new google.maps.visualization.HeatmapLayer({data: pointArray});
        heatmap.setOptions({gradient: null, radius: 20, opacity: 1});
        heatmap.setMap(map);
      } 
      else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}

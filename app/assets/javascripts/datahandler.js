//This is a wrapper object for the functionality
//we need in order to look up data for a given
//location. Eventually we add more client side
//data manipulation to this object.
var dataHandler = function() {

  this.getMapData = function(data, dataType) {
    var bounds = data[0].geometry.bounds;
    var results = [];
    var dataPoints = [];

    if (bounds) {
      var ne = bounds.getNorthEast();
      var sw = bounds.getSouthWest();
      var startDate = $("#startDate").val();
      var endDate = $("#endDate").val();
      var sex = $("input[name=group4]:checked").val();
      var age = $(".age").val();
      var data = { sw: [sw.lat(), sw.lng()], ne: [ne.lat(), ne.lng()], startDate: startDate, endDate: endDate, dataType: dataType, sex: sex, age: age};
      var results = $.ajax({
        type: "GET",
        dataType: "json",
        url: "/getMapData",
        data: data,
        async: false
      }).responseJSON;

      $.each(results, function(key, value) {
        dataPoints[key] = new google.maps.LatLng(value.lat, value.lng);
      });

      return dataPoints;
    }
  }

  this.addData = function() {
    var address = $("#popup-address").val();
    var date = $("#popup-date").val();
    var sex = $("input[name=group3]:checked").val();
    var age = $("#popup-age").val();

    $.ajax({
      type: "POST",
      url: "/addData",
      data: {sex: sex, age: age, address: address, date: date}
    });
  }

  this.getGraphData = function(data, dataType) {
    var bounds = data[0].geometry.bounds;
    var results = [];
    var dataPoints = [];

    if (bounds) {
      var ne = bounds.getNorthEast();
      var sw = bounds.getSouthWest();
      var startDate = $("#startDate").val();
      var endDate = $("#endDate").val();
      var sex = $("input[name=group4]:checked").val();
      var age = $("#age1").val();
      var data = { sw: [sw.lat(), sw.lng()], ne: [ne.lat(), ne.lng()], startDate: startDate, endDate: endDate, dataType: dataType, sex: sex, age: age};
      var results = $.ajax({
        type: "GET",
        dataType: "json",
        url: "/getGraphData",
        data: data,
        async: false
      }).responseJSON;
    }

    return results;
  }
}

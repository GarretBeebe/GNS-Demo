//Functionality for initializing the chart and tabs functionality 
$( document ).ready(function() {
 
  var gHandler = new GraphHandler();
  var dHandler = new DataHandler();
  var ktvTypes = ['KT/V'];
  var ktvIds = ["#ktv"];
  var metricsTypes = ['iPTH', 'Calcium', 'Vitamin D'];
  var metricsIds = ["#iPTH", "#calcium", "#vitaminD"];
  var egfrTypes = ['eGFR', 'Creatinine'];
  var egfrIds = ["#eGFR", "#creatinine"];

  updateData(ktvTypes, ktvIds, "#graph-container1", "#slider-range");
  updateData(metricsTypes, metricsIds, "#graph-container3", "#slider-range3");
  updateData(egfrTypes, egfrIds, "#graph-container4", "#slider-range4");

  function updateData(types, ids, container, slider) {
    var dataSets = {};
    var data = [];
    var i = 0;

    $.each(types, function(index, value){
      graphData = dHandler.getResults(value);
      dataSets[value] = {label: value, data: gHandler.dateParser(graphData)}
    });

    $.each(dataSets, function(key, val) {
      val.color = i;
      ++i;
    });

    $.each(ids, function(index, value){
      if ($(value).is(":checked") == true) {
        data.push(dataSets[$(value).val()]);
      }
    });
    
    gHandler.getLineGraph(data, container, slider);
  }

  $("#update-button").bind("click", function() {
    updateData(ktvTypes, ktvIds, "#graph-container1", "#slider-range");
  });

  $("#update-button3").bind("click", function() {
    updateData(metricsTypes, metricsIds, "#graph-container3", "#slider-range3");
  });

  $("#update-button4").bind("click", function() {
    updateData(egfrTypes, egfrIds, "#graph-container4", "#slider-range4");
  });

 
  $("#tabs").tabs({
    activate: function(event, ui) {
    }
  });

  $(function() {
    $.each([".startDate", ".endDate"], function(index, value){
      $(value).datepicker({
        onSelect: function() { 
          $(value).val($(this).val());
        }
      });
    });
  });

  $.each([".patientId"], function(index, value) {
    $(value).change(function() { 
      $(value).val($(this).val());
    });
  });
});
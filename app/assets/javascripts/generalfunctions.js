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

  updateData(ktvTypes, ktvIds, "#graph-container1", "#slider-range", "#patient_id1_0", "#startDate", "#endDate");
  updateData(egfrTypes, egfrIds, "#graph-container2", "#slider-range2", "#patient_id2_0", "#startDate2", "#endDate2");
  updateData(metricsTypes, metricsIds, "#graph-container3", "#slider-range3", "#patient_id3_0", "#startDate3", "#endDate3");
  updateMissedTreatments("#graph-container4");

  function updateData(types, ids, container, slider, patient, start, end) {
    var dataSets = {};
    var data = [];
    var i = 0;

    $.each(types, function(index, value){
      graphData = dHandler.getResults(value, patient, start, end);
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

  function updateMissedTreatments(container) {
    treatments = dHandler.getMissedTreatments();
    barData = gHandler.treatmentsParser(treatments);
    gHandler.getBarGraph(barData, container);
  }

  $("#update-button").bind("click", function() {
    updateData(ktvTypes, ktvIds, "#graph-container1", "#slider-range", "#patient_id1_0", "#startDate", "#endDate");
  });

  $("#update-button2").bind("click", function() {
    updateData(egfrTypes, egfrIds, "#graph-container2", "#slider-range2", "#patient_id2_0", "#startDate2", "#endDate2");
  });

  $("#update-button3").bind("click", function() {
    updateData(metricsTypes, metricsIds, "#graph-container3", "#slider-range3", "#patient_id3_0", "#startDate3", "#endDate3");
  });

  $("#update-button4").bind("click", function() {
    updateMissedTreatments("#graph-container4");
  });

 
  $("#tabs").tabs({
    activate: function(event, ui) {
    }
  });

  $(function() {
    $.each([".startDate", ".endDate"], function(index, value){
      $(value).datepicker({
        onSelect: function() {
        }
      });
    });
  });

  // $.each([".patientId"], function(index, value) {
  //   $(value).change(function() { 
  //     $(value).val($(this).val());
  //   });
  // });
});
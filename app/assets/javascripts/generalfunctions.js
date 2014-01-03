//Functionality for initializing the chart and tabs functionality 
$( document ).ready(function() {
 
  var gHandler = new GraphHandler();
  var dHandler = new DataHandler();
  updateKTVData();

  function updateKTVData() {
     graphData = dHandler.getResults('KT/V');
     gHandler.getLineGraph(graphData, '#graph-container1');
     gHandler.getPieGraph(pieData, '#graph-container2');
  }
 
  $("#update-button1").bind("click", function() {
    updateKTVData();
  });

  // $("#update-button2").bind("click", function() {
  //   updateTreatmentsData();
  // });

  $("#tabs").tabs({
    activate: function(event, ui) {
    }
  });

  $(function() {
    $("#popup-date").datepicker({
      onSelect: function() {
        //updateData();
        return true;
      }
    });
  });

  $(function() {
    $.each([".startDate", ".endDate"], function(index, value){
      $(value).datepicker({
        onSelect: function() { 
          $(value).val($(this).val());
          return true;
        }
      });
    });
  });

  $.each([".startDate", ".endDate", ".address"], function(index, value) {
    $(value).bind("keyup", function(event, data){
      $(value).val($(this).val());
    });
  });
});

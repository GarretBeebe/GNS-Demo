//Functionality for initializing the chart and tabs functionality 
$( document ).ready(function() {
 
  var gHandler = new GraphHandler();
  var dHandler = new DataHandler();
  updateKTVData();

  function updateKTVData() {
     graphData = dHandler.getKTVData();
     gHandler.getGraph(graphData, '#graph-container2');
  }

  // function updateTreatmentsData(){

  // }
   
  // $(".datafetcher").bind("click", function() {
  //   updateData();
  // });

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
          //updateData();
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


  // $("input[name=group1]").change(function() {
  //   var index = $(this).index('input[name=group1]');
  //   $('input[name=group2]:nth(' + index + ')').prop('checked', true);
  //   updateData();
  // });

  // $("input[name=group2]").change(function() {
  //   var index = $(this).index('input[name=group2]');
  //   $('input[name=group1]:nth(' + index + ')').prop('checked', true);
  //   updateData();
  // });

  // $("input[name=zemplar1]").change(function() {
  //   var index = $(this).index('input[name=zemplar1]');
  //   $('input[name=zemplar2]:nth(' + index + ')').prop('checked', true);
  //   updateData();
  // });

  // $("input[name=zemplar2]").change(function() {
  //   var index = $(this).index('input[name=zemplar1]');
  //   $('input[name=zemplar1]:nth(' + index + ')').prop('checked', true);
  //   updateData();
  // });
});

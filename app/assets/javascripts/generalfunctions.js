//Functionality for initializing the maps, chart, and tabs functionality 
$( document ).ready(function() {
 
  // if ($("#map-canvas") != null ) {
  //   var mHandler = new MapHandler();
  //   var gHandler = new GraphHandler();
   
  //   mHandler.initialize();

  //   function updateData() {
  //     mHandler.clearHeatmap();
  //     mHandler.codeAddress();
  //   }
   
  //   $("#toggleHeatMap").bind("click", function() {
  //     mHandler.toggleHeatmap();
  //   });

  //   $("#toggleCounties").bind("click", function() {
  //     mHandler.toggleCounties();
  //   });

  //   $("#changeGradient").bind("click", function() {
  //     mHandler.changeGradient();
  //   });

  //   $("#changeRadius").bind("click", function() {
  //     mHandler.changeRadius();
  //   });

  //   $("#changeOpacity").bind("click", function() {
  //     mHandler.changeOpacity();
  //   });

  //   $("#contrastMapStyle").bind("click", function() {
  //     mHandler.contrastMap();
  //   });

  //   $("#normalMapStyle").bind("click", function() {
  //     mHandler.applyStyles();
  //   });

  //   $("#toggleLine").bind( "click", function() {
  //     gHandler.getGraph(graphData, 'line', '#graph-container2');
  //   });

  //   $("#togglePoint").bind("click", function() {
  //     gHandler.getGraph(graphData, 'point', '#graph-container2');
  //   });

  //    $("#toggleArea").bind("click", function() {
  //    gHandler.getGraph(graphData, 'area', '#graph-container2');
  //   });

  //   $("#toggleBar").bind("click", function() {
  //     gHandler.getGraph(graphData, 'bar', '#graph-container2');
  //   });

  //   $(".datafetcher").bind("click", function() {
  //     updateData();
  //   });
  // }

  $("#tabs").tabs({
    activate: function(event, ui) {
    }
  });

  // $("#dialog-form").dialog({
  //   autoOpen: false,
  //   minHeight: 210,
  //   width: 350,
  //   modal: false,
  //   buttons: {
  //     "Submit": function() {
  //       var dHandler = new dataHandler();
  //       dHandler.addData();
  //       $("#popup-address").val("");
  //       $("#popup-date").datepicker('setDate', null)
  //       $('input[name=group3]:checked').val("");
  //       $('#popup-age').val("");
  //       $( this ).dialog( "close" );
  //     },
  //     Cancel: function() {
  //       $("#popup-address").val("");
  //       $("#popup-date").datepicker('setDate', null)
  //       $('input[name=group3]:checked').val("");
  //       $('#popup-age').val("");
  //       $( this ).dialog( "close" );
  //     }
  //   },
  //   close: function() {
  //   }
  // });

  $("#submitDataButton").click(function() {
    $( "#dialog-form" ).dialog( "open" );
  });

  $(function() {
    $("#popup-date").datepicker({
      onSelect: function() {
        updateData();
        return true;
      }
    });
  });

  $(function() {
    $.each([".startDate", ".endDate"], function(index, value){
      $(value).datepicker({
        onSelect: function() { 
          $(value).val($(this).val());
          updateData();
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

  $.each([".age"], function(index, value) {
    $(value).bind("change", function(event, data){
      $(value).val($(this).val());
    });
  });

  $("input[name=group1]").change(function() {
    var index = $(this).index('input[name=group1]');
    $('input[name=group2]:nth(' + index + ')').prop('checked', true);
    updateData();
  });

  $("input[name=group2]").change(function() {
    var index = $(this).index('input[name=group2]');
    $('input[name=group1]:nth(' + index + ')').prop('checked', true);
    updateData();
  });

   $("input[name=group4]").change(function() {
    var index = $(this).index('input[name=group4]');
    $('input[name=group5]:nth(' + index + ')').prop('checked', true);
    updateData();
  });

  $("input[name=group5]").change(function() {
    var index = $(this).index('input[name=group5]');
    $('input[name=group4]:nth(' + index + ')').prop('checked', true);
    updateData();
  });
});

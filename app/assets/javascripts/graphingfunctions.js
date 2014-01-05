var GraphHandler = function() {

  this.getLineGraphOptions = function(start, end) {
    var graphOptions = { 
      lines: { show: true }, 
      points: { show: true }, 
      xaxis: { 
        mode: "time", 
        timeformat: "%m/%d/%y",
        min: start, 
        max: end
      }
    };

    return graphOptions;
  }

  this.getLineGraph = function(data, container, sliderContainer) {
    var start = Date.parse($("#startDate").val());
    var end = Date.parse($("#endDate").val());
    var graphOptions = this.getLineGraphOptions(start, end);
    $.plot($(container), data, graphOptions);
    this.initializeSlider(data, container, sliderContainer, start, end);
  }

  this.dateParser = function(data, type) {
    var date;
    var endData = [];
    var i = 0;
    var row = [];
    var value;
    
    for (var i = 0; i <= data.length - 1; i++) {
      date = Date.parse(data[i].date);
      value = data[i].result;
      row.push(date);
      row.push(value);
      endData.push(row);
      row = [];
    }
    return endData;
  }

  this.initializeSlider = function (data, container, sliderContainer, start, end) {
    var newStart = ''
    var newEnd = ''
    var sliderGraphHandler = new GraphHandler;
    
    $(sliderContainer).slider({
      range: true,
      min: start,
      max: end,
      values: [start, end],
      slide: function( event, ui ) {
        var newStart = new Date(ui.values[0]);
        var newEnd = new Date(ui.values[1]);
        var graphOptions = sliderGraphHandler.getLineGraphOptions(newStart, newEnd);
        $.plot($(container), data, graphOptions);
      }
    });
  }

  this.getPieGraph = function(dataPoints, container) {
    $.plot($(container), dataPoints, {
         series: {
            pie: {
                show: true
            }
         },
         legend: {
            labelBoxBorderColor: "none"
         }
    });
  }
}
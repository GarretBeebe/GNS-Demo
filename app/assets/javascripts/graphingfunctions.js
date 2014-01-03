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

  this.getDataOptions =function(data) {
    var dataOptions = {
      label: "KT/V",
      color: '#0F75BC',
      grid: { borderWidth: 0, color: '#58585A', labelMargin: 10 },
      data: data
    };

    return dataOptions;
  }

  this.getLineGraph = function(dataPoints, container) {
    var start = Date.parse($("#startDate").val());
    var end = Date.parse($("#endDate").val())
    var graphData = this.dateParser(dataPoints);
    var graphOptions = this.getLineGraphOptions(start, end);
    var dataOptions = this.getDataOptions(graphData);

    $.plot($(container), [dataOptions], graphOptions);
    this.initializeSlider(graphData, container);
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

  this.dateParser = function(dataPoints) {
    var date;
    var value;
    var i = 0;
    var endData = [];
    var row = [];

    for (var i = 0; i <= dataPoints.length - 1; i++) {
      date = Date.parse(dataPoints[i].date);
      value = dataPoints[i].result;
      row.push(date);
      row.push(value);
      endData.push(row);
      row = [];
    }
    return endData;
  }

  this.initializeSlider = function (data, container) {
    var start = Date.parse($("#startDate").val());
    var end = Date.parse($("#endDate").val())
    var newStart = ''
    var newEnd = ''
    var sliderGraphHandler = new GraphHandler;
    
    $("#slider-range").slider({
      range: true,
      min: start,
      max: end,
      values: [ start, end],
      slide: function( event, ui ) {
        var newStart = new Date(ui.values[0]);
        var newEnd = new Date(ui.values[1]);
        var graphOptions = sliderGraphHandler.getLineGraphOptions(newStart, newEnd);
        var dataOptions =sliderGraphHandler.getDataOptions(data);
        $.plot($(container), [dataOptions], graphOptions); 
      }
    });
  }
}

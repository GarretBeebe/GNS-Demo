var GraphHandler = function() { 

  this.getLineGraph = function(dataPoints, container) {
    var start = Date.parse($("#startDate").val());
    var end = Date.parse($("#endDate").val())
    var graphData = this.dateParser(dataPoints);
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
    var dataOptions = {
      label: "KT/V",
      color: '#0F75BC',
      grid: { borderWidth: 0, color: '#58585A', labelMargin: 10 },
      data: graphData
    };

    $.plot($(container), [dataOptions], graphOptions);
    this.initializeslider(graphData, container);
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
      date = Date.parse(dataPoints[i].ktv_date);
      value = dataPoints[i].ktv_result;
      row.push(date);
      row.push(value);
      endData.push(row);
      row = [];
    }
    return endData;
  }

  this.initializeslider = function (data, container) {
    var start = Date.parse($("#startDate").val());
    var end = Date.parse($("#endDate").val())
    var newStart = ''
    var newEnd = ''
    $("#slider-range").slider({
      range: true,
      min: start,
      max: end,
      values: [ start, end],
      slide: function( event, ui ) {
        var newStart = new Date(ui.values[0]);
        var newEnd = new Date(ui.values[1]);
        var graphOptions = { 
          lines: { show: true }, 
          points: { show: true }, 
          xaxis: {
            mode: "time", 
            timeformat: "%m/%d/%y" ,
            min: newStart, 
            max: newEnd
          }
        };
        var dataOptions = {
          label: "KT/V",
          color: '#0F75BC',
          grid: { borderWidth: 0, color: '#58585A', labelMargin: 10 },
          data: data
        };
        $.plot($(container), [dataOptions], graphOptions); 
      }
    });
  }
}

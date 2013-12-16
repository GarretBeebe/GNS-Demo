//Wrapper function for map test. Stole this from 
//http://digitalunion.osu.edu/2011/12/21/make-graphs-and-charts-with-jquery-using-flot-js-%E2%80%94-a-brief-tutorial/
var GraphHandler = function() { 

  this.getOptions = function(graphType) {
    switch (graphType)
    {
      case 'bar':
        options = { 
          bars: {
            show: true,
            barWidth: 0.3,
            align: "center"
          }, 
          xaxis: { mode: "time", timeformat: "%m/%d/%y" }
        };
        return options;
      case 'line':
        options = { lines: { show: true }, xaxis: { mode: "time", timeformat: "%m/%d/%y" }};
        return options;
      case 'point':
        options = { points: { show: true }, xaxis: { mode: "time", timeformat: "%m/%d/%y" }};
        return options;
      case 'area':
        options = { lines: { show: true, fill: true }, xaxis: { mode: "time", timeformat: "%m/%d/%y" }};
        return options;
    }
  }

  this.getGraph = function(dataPoints, graphType, container) {
    var graphData = this.dataConverter(dataPoints);
    var graphOptions = this.getOptions(graphType); 
    var dataOptions = {
      label: "Flu Prescriptions",
      color: '#0F75BC',
      grid: { borderWidth: 0, color: '#58585A', labelMargin: 10 },
      data: graphData
    };

    $.plot($(container), [dataOptions], graphOptions);
  }

  this.dataConverter = function(dataPoints) {
    var time;
    var total;
    var i = 0;
    var endData = [];
    var row = [];

    for (var i = 0; i <= dataPoints.length - 1; i++) {
      time = Date.parse(dataPoints[i].prescription_time);
      total = dataPoints[i].total;
      row.push(time);
      row.push(total);
      endData.push(row);
      row = [];
    }
    return endData;
  }
}

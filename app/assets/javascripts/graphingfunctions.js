var GraphHandler = function() { 

  this.getLineOptions = function() {
    options = { lines: { show: true }, points: { show: true }, xaxis: { mode: "time", timeformat: "%m/%d/%y" }};
    return options;
  }

  this.getGraph = function(dataPoints, container) {
    var graphData = this.dataConverter(dataPoints);
    var graphOptions = this.getLineOptions(); 
    var dataOptions = {
      label: "KT/V",
      color: '#0F75BC',
      grid: { borderWidth: 0, color: '#58585A', labelMargin: 10 },
      data: graphData
    };

    $.plot($(container), [dataOptions], graphOptions);
  }

  this.dataConverter = function(dataPoints) {
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
}

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

  this.treatmentsParser = function(data) {
    var currentId;
    var rowDataElement = [];
    var rowData = [];
    var row = {};
    var endData = [];
    var i = 0;

    while (i <= (data.length - 1)) {
      currentId = data[i].patient_id;
        while (data[i].patient_id == currentId) {
          rowDataElement =[Date.parse(data[i].treatment_month), data[i].count]
          rowData.push(rowDataElement);
          i++
          if (i == data.length) {
            break
          }
        }
        row = {label: currentId, data: rowData};
        endData.push(row);
        rowDataElement = [];
        rowData = [];
        row = {};
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

  this.getBarGraph = function(dataPoints, container) {
    var barOptions = { 
      bars: { show: true, barWidth: 0.6, series_spread: true, align: "center" }, 
      grid: { hoverable: true, clickable: true },
      xaxis: { 
        autoscaleMargin: .10, 
        mode: "time", 
        timeformat: "%m/%d/%y"//,
        // min: start, 
        // max: end
      }
    };

    $.plot($(container), dataPoints, barOptions);

    // var ms_data = [{"label":"FOO","data":[[0,80],[1,70],[2,100],[3,60],[4,102]]},
    //              {"label":"BAR","data":[[0,10],[1,20],[2,30],[3,40],[4,80]]},
    //              {"label":"CAR","data":[[0,5],[1,10],[2,15],[3,20],[4,25]]}]
    // var ms_ticks = [[0,"1/28"],[1,"1/29"],[2,"1/30"],[3,"1/31"],[4,"1/32"]];

    // $.plot($(container), ms_data, {
    //   bars: { show: true, barWidth: 0.6, series_spread: true, align: "center" },
    //   xaxis: { ticks: ms_ticks, autoscaleMargin: .10 },
    //   grid: { hoverable: true, clickable: true }
    // });
  }
}
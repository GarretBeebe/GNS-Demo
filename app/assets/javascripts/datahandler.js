//This is a wrapper object for the functionality
//we need in order to look up data for a given
//location. Eventually we add more client side
//data manipulation to this object.
var DataHandler = function() {

  this.getResults = function(resultType, patient) {
    var start = $("#startDate").val();
    var end = $("#endDate").val();
    var patient = $(patient).val()
    var data = { 
      startDate: start, 
      endDate: end, 
      patientId: patient,
      resultType: resultType
    };

    var results = $.ajax({
      type: "GET",
      dataType: "json",
      url: "/getResults",
      data: data,
      async: false
    }).responseJSON;
    return results;
  }

  this.getMissedTreatments = function() {
    var startDate = $("#startDate").val();
    var endDate = $("#endDate").val();
    var providerId = $("#provider_id4_0").val();
    var data = { 
      startDate: startDate, 
      endDate: endDate,  
      providerId: providerId
    };

    var results = $.ajax({
      type: "GET",
      dataType: "json",
      url: "/getMissedTreatments",
      data: data,
      async: false
    }).responseJSON;
    return results;
  }
}

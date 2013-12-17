//This is a wrapper object for the functionality
//we need in order to look up data for a given
//location. Eventually we add more client side
//data manipulation to this object.
var DataHandler = function() {

  this.getKTVData = function() {
    var startDate = $("#startDate").val();
    var endDate = $("#endDate").val();
    var zemplarUsage = $('input[name=zemplar1]:checked').val();
    var patientId = $("#patient_id1_0").val()
    var predicted = $('input[name=group1]:checked').val()
    var data = { 
      startDate: startDate, 
      endDate: endDate, 
      patientId: patientId, 
      zemplarUsage: zemplarUsage,
      predicted: predicted
    };
    var results = $.ajax({
      type: "GET",
      dataType: "json",
      url: "/getKTVData",
      data: data,
      async: false
    }).responseJSON;
    return results;
  }

  this.getTreatmentData = function() {
    var startDate = $("#startDate").val();
    var endDate = $("#endDate").val();
    var patientId = $("#patient_id2_0").val()
    var providerId = $("#provider_id2_0").val();
    var zemplarUsage = $('input[name=zemplar2]:checked').val();
    var predicted = $('input[name=group2]:checked').val()
    var data = { 
      startDate: startDate, 
      endDate: endDate, 
      patientId: patientId, 
      providerId: providerID, 
      zemplarUsage: zemplarUsage,
      predicted: predicted
    };

    var results = $.ajax({
      type: "GET",
      dataType: "json",
      url: "/getTreatmentData",
      data: data,
      async: false
    }).responseJSON;
    return results;
  }
}

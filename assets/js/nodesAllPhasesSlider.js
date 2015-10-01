function nodesAllPhasesSlider() {

    var select = $( "#timeSlider" );
    var initialUrl = window.location.href;
    var initialTime;
    var newUrl;
    var arrayOfInputs = initialUrl.split('/');
    var date = arrayOfInputs[6];
    var timeAppendToUrl;
    var timeArray = [];
    var formattedTimeArray = [];
    var formattedMinute;
    var arrayOfObjects = [];
    var timeArrayCopy = [];
    var timeObject = {};

    for(hour = 0; hour < 24; hour++) {
      hour = ('0' + hour).slice(-2);
      for (minute = 0; minute < 60; minute = minute + 15) {
        formattedMinute = minute === 0 ? minute + '0' : minute;
        timeArray.push(hour+ ':' +formattedMinute);
        timeArrayCopy.push(hour+ ':' +formattedMinute);
      }
    }

    for(index = 0; index <= 95; index++ ){
      var shiftedTime = timeArrayCopy.shift();
      timeObject = {
        timeValue : shiftedTime,
        timeKey   : index
      };
      arrayOfObjects.push(timeObject);
    }


    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 0,
      max: 95,
      range: "min",
      value: select[ 0 ].selectedIndex ,
      create: function(event, ui) {
       initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
       for(i = 0; i < arrayOfObjects.length; i++) {
        if (initialTime === arrayOfObjects[i].timeValue ) {
            $(this).slider('value', arrayOfObjects[i].timeKey);
        }
       }
      },
      slide: function(event, ui ) {
        select[ 0 ].selectedIndex = ui.value;
      },
    });

    $("#slider")
      .slider("pips", {
        labels: timeArray,
          rest: 'label',
          step: 8,
      })

      .slider("float", {
          labels: timeArray
      });

    $("#timeSlider" ).change(function() {
      slider.slider( "value", this.selectedIndex );
    });

    $("#slider").slider({
      change: function( event, ui ) {
        timeAppendToUrl = timeSlider.value;
        newUrl = initialUrl.replace(initialTime,timeAppendToUrl);
        window.location.href = newUrl;
      }
    });

    $('#timeSlider').empty();
    $.each(timeArray, function(key, value) {
      $('#timeSlider')
        .append($("<option></option>")
        .attr("value", value)
        .text(value));
    });

    $("#timeSlider" ).ready(function() {
     var initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
     for(i = 0; i < arrayOfObjects.length; i++) {
        if ($("#slider").slider("value") === arrayOfObjects[i].timeKey ) {
          $("#timeSlider").val(arrayOfObjects[i].timeValue );
          timeAppendToUrl = timeSlider.value;
        }
      }
    });

    return timeAppendToUrl;
}

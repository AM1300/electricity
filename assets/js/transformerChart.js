function transformerChart(data) {

    var timestamps = data.map(function(entry, index) {
      return (index % 4 === 0) ? moment(entry.timestamp).format('DD-MM, HH:mm') : '';
    });

    var powerInAReal = data.map(function(entry) {
      return entry.power_in_A_real;
    });

    var powerOutAReal = data.map(function(entry) {
      return entry.power_out_A_real;
    });

    var chartData = {
      labels: timestamps,
      datasets: [{
        label: "Power Out A Real",
        // fillColor: "rgba(170, 170, 170, 1)",
        //4strokeColor: "rgba(0, 0, 0, 1)",
        pointColor: "rgba(0, 0, 0, 1)",
        pointStrokeColor: "rgba(170, 170, 170,0.6)",
        pointHighlightFill: "rgba(170, 170, 170, 0.6)",
        pointHighlightStroke: "rgba(170, 170, 170, 0.6)",
        data: powerOutAReal
      }, {
        label: "Power In A Real",
        fillColor: "rgba(25, 151, 205, 0.4)",
        strokeColor: "rgba(25, 151, 205, 0.4)",
        pointColor: "rgba(25, 151, 205, 0.4)",
        pointStrokeColor: "rgba(25, 151, 205, 1)",
        pointHighlightFill: "rgba(25, 151, 205, 1)",
        pointHighlightStroke: "rgba(25, 151, 205, 1)",
        data: powerInAReal
      }]
    };
    return chartData;
}

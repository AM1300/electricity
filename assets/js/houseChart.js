function houseChart(data) {

    var timestamps = data.map(function(entry, index) {
      return (index % 4 === 0) ? moment(entry.timestamp).format('DD-MM, HH:mm') : '';
    });

    var totalLoadNew = data.map(function(entry) {
      return entry.totalLoad;
    });

    var reactivePowerNew = data.map(function(entry) {
      return entry.reactivePower;
    });

    var chartData = {
      labels: timestamps,
      datasets: [{
        label: "Reactive Power",
        fillColor: "rgba(170, 170, 170, 0.7)",
        strokeColor: "rgba(170, 170, 170, 0.7)",
        pointColor: "rgba(170, 170, 170, 0.7)",
        pointStrokeColor: "rgba(170, 170, 170, 1)",
        pointHighlightFill: "rgba(170, 170, 170, 1)",
        pointHighlightStroke: "rgba(170, 170, 170, 1)",
        data: reactivePowerNew
      }, {
        label: "Total Load",
        fillColor: "rgba(25, 151, 205, 0.4)",
        strokeColor: "rgba(25, 151, 205, 0.4)",
        pointColor: "rgba(25, 151, 205, 0.4)",
        pointStrokeColor: "rgba(25, 151, 205, 1)",
        pointHighlightFill: "rgba(25, 151, 205, 1)",
        pointHighlightStroke: "rgba(25, 151, 205, 1)",
        data: totalLoadNew
      }]
    };
    return chartData;
}

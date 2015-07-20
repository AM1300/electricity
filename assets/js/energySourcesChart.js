function energySourcesChart(data) {
    var timestamps = data.map(function(entry, index) {
      return (index % 4 === 0) ? moment(entry.timestamp).format('DD-MM, HH:mm') : '';
    });

    var pricesNew = data.map(function(entry) {
      return entry.price;
    });

    var realPowerNew = data.map(function(entry) {
      return entry.realPower;
    });

    var reactivePowerNew = data.map(function(entry) {
      return entry.reactivePower;
    });

    var chartData = {
      labels: timestamps,
      datasets: [{
        label: "Price",
        fillColor: "rgba(255, 217, 51, 0.1)",
        strokeColor: "rgba(255, 217, 51, 0.7)",
        pointColor: "rgba(255, 217, 51, 0.7)",
        pointStrokeColor: "rgba(255, 217, 51, 1)",
        pointHighlightFill: "rgba(255, 217, 51, 1)",
        pointHighlightStroke: "rgba(255, 217, 51, 1)",
        data: pricesNew
      }, {
        label: "Reactive Power",
        fillColor: "rgba(170, 170, 170, 0.7)",
        strokeColor: "rgba(170, 170, 170, 0.7)",
        pointColor: "rgba(170, 170, 170, 0.7)",
        pointStrokeColor: "rgba(170, 170, 170, 1)",
        pointHighlightFill: "rgba(170, 170, 170, 1)",
        pointHighlightStroke: "rgba(170, 170, 170, 1)",
        data: reactivePowerNew
      }, {
        label: "Real Power",
        fillColor: "rgba(25, 151, 205, 0.4)",
        strokeColor: "rgba(25, 151, 205, 0.4)",
        pointColor: "rgba(25, 151, 205, 0.4)",
        pointStrokeColor: "rgba(25, 151, 205, 1)",
        pointHighlightFill: "rgba(25, 151, 205, 1)",
        pointHighlightStroke: "rgba(25, 151, 205, 1)",
        data: realPowerNew
      }]
    };
    return chartData;
}

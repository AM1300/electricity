function devicesChart(data) {

    var timestamps = data.map(function(entry, index) {
      return (index % 4 === 0) ? moment(entry.timestamp).format('HH:mm') : '';
    });

    var deviceLoads = data.map(function(entry) {
      return entry.load;
    });

    var bidPrices = data.map(function(entry) {
      return entry.bidPrice;
    });

    var bidQuantities = data.map(function(entry) {
      return entry.bidQuantity;
    });

    var chartData = {
    labels: timestamps,
    datasets: [{
            label: "Bid Price",
            fillColor: "rgba(255, 217, 51, 0.3)",
            strokeColor: "rgba(255, 217, 51, 0.3)",
            pointColor: "rgba(255, 217, 51, 0.3)",
            pointStrokeColor: "rgba(255, 217, 51, 1)",
            pointHighlightFill: "rgba(255, 217, 51, 1)",
            pointHighlightStroke: "rgba(255, 217, 51, 1)",
            data: bidPrices
        }, {
            label: "Device Load",
            fillColor: "rgba(25, 151, 205, 0.4)",
            strokeColor: "rgba(25, 151, 205, 0.4)",
            pointColor: "rgba(25, 151, 205, 0.4)",
            pointStrokeColor: "rgba(25, 151, 205, 1)",
            pointHighlightFill: "rgba(25, 151, 205, 1)",
            pointHighlightStroke: "rgba(25, 151, 205, 1)",
            data: deviceLoads
        // }, {
            // label: "Bid Quantity",
            // fillColor: "rgba(231, 76, 60, 0.6)",
            // strokeColor: "rgba(231, 76, 60, 0.6)",
            // pointColor: "rgba(231, 76, 60, 0.6)",
            // pointStrokeColor: "rgba(231, 76, 60, 1)",
            // pointHighlightFill: "rgba(231, 76, 60, 1)",
            // pointHighlightStroke: "rgba(231, 76, 60, 1)",
            // data: bidQuantities
        }]
    };
    return chartData;
}

function marketChart(data) {
    var timestamps = data.map(function(entry, index) {
      return (index % 4 === 0) ? moment(entry.timestamp).format('DD-MM, HH:mm') : '';
    });

    var clearingPrices = data.map(function(entry) {
      return entry.clearingPrice;
    });

    var clearingQuantities = data.map(function(entry) {
      return entry.clearingQuantity;
    });

    var sellerQuantities = data.map(function(entry) {
      return entry.sellerTotalQuantity;
    });

    var buyerQuantities = data.map(function(entry) {
      return entry.buyerTotalQuantity;
    });

    var chartData = {
      labels: timestamps,
      datasets: [{
        label: "Clearing Price",
        fillColor: "rgba(231, 76, 60, 0.6)",
        strokeColor: "rgba(231, 76, 60, 0.6)",
        pointColor: "rgba(231, 76, 60, 0.6)",
        pointStrokeColor: "rgba(231, 76, 60, 1)",
        pointHighlightFill: "rgba(231, 76, 60, 1)",
        pointHighlightStroke: "rgba(231, 76, 60, 1)",
        data: clearingPrices
      }, {
        label: "Clearing Quantity",
        fillColor: "rgba(255, 217, 51, 0.7)",
        strokeColor: "rgba(255, 217, 51, 0.7)",
        pointColor: "rgba(255, 217, 51, 0.7)",
        pointStrokeColor: "rgba(255, 217, 51, 1)",
        pointHighlightFill: "rgba(255, 217, 51, 1)",
        pointHighlightStroke: "rgba(255, 217, 51, 1)",
        data: clearingQuantities
      }, {
        label: "Seller's Quantity",
        fillColor: "rgba(170, 170, 170, 0.4)",
        strokeColor: "rgba(170, 170, 170, 0.4)",
        pointColor: "rgba(170, 170, 170, 0.4)",
        pointStrokeColor: "rgba(170, 170, 170, 1)",
        pointHighlightFill: "rgba(170, 170, 170, 1)",
        pointHighlightStroke: "rgba(170, 170, 170, 1)",
        data: sellerQuantities
      }, {
        label: "Buyer's Quantity",
        fillColor: "rgba(25, 151, 205, 0.4)",
        strokeColor: "rgba(25, 151, 205, 0.4)",
        pointColor: "rgba(25, 151, 205, 0.4)",
        pointStrokeColor: "rgba(25, 151, 205, 1)",
        pointHighlightFill: "rgba(25, 151, 205, 1)",
        pointHighlightStroke: "rgba(25, 151, 205, 1)",
        data: buyerQuantities
      }]
    };
    return chartData;
}

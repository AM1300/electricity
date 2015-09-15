function parseResponse(data) {
    var timestamps = data.map(function(entry) {
      return entry.timestamp;
    });

    var totalLoads = data.map(function(entry) {
      return entry.load;
    });

    var bidPrices = data.map(function(entry) {
      return entry.bidPrice;
    });

    var bidQuantities = data.map(function(entry) {
      return entry.bidQuantity;
    });

    return {
      indicators: {
        loads: totalLoads,
        bidPrices: bidPrices,
        bidQuantities: bidQuantities
      },
      timestamps: timestamps
    };
}

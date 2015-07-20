function parseResponse(data) {

    // var timestamps = data.map(function(entry, index) {
    //   return (index % 4 === 0) ? moment(entry.timestamp).format('DD-MM, HH:mm') : '';
    // });

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

function marketHighcharts(response) {
    var timestamps = response.map(function(entry, index) {
      return moment(entry.timestamp).format('HH:mm');
    });

    var date = response.map(function(entry, index) {
      return moment(entry.timestamp).format('MMMM Do YYYY');
    });

    var clearingPrices = response.map(function(entry) {
      return entry.clearingPrice;
    });

    var clearingQuantities = response.map(function(entry) {
      return entry.clearingQuantity;
    });

    var sellerQuantities = response.map(function(entry) {
      return entry.sellerTotalQuantity;
    });

    var buyerQuantities = response.map(function(entry) {
      return entry.buyerTotalQuantity;
    });

    var dateTitle = date[0];

    $(function () {
        $('#container').highcharts({
            chart: {
                backgroundColor:'#ECECEC',
                zoomType: 'x',
                resetZoomButton: {
                  position: {
                    x: -40,
                    y: -40
                  },
                  theme: {
                      fill: '#E3E3E3',
                      stroke: '#222',
                      style: {
                          color: '#222'
                      },
                      r: 3,
                      states: {
                          hover: {
                              fill: 'rgba(137, 137, 132, 0.5)',
                              stroke: '#222',
                              style: {
                                  color: '#222'
                              }
                          }
                      }
                  }
                }
            },
            title: {
                text: 'Market Pool for ' +dateTitle,
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },

            xAxis: {
                categories: timestamps,
                tickInterval: 4
            },
            yAxis: {
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                shared: true
            },
            legend: {
                align: 'center',
                verticalAlign: 'bottom',
                floating: false,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#ECECEC'
            },
            series: [{
                name: 'Clearing Price',
                data: clearingPrices,
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: ' $'
                }
            }, {
                name: 'Clearing Quantity',
                data: clearingQuantities,
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: ' Watt'
                }
            }, {
                name: 'Seller΄s Quantity',
                data: sellerQuantities,
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: ' Watt'
                }
            }, {
                name: 'Buyer΄s Quantity',
                data: buyerQuantities,
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: ' Watt'
                }
            }],
            navigation: {
                buttonOptions: {
                    theme: {
                        'stroke-width': 0,
                        fill:'#ECECEC',
                        stroke: 'silver',
                        r: 0,
                        states: {
                            hover: {
                                fill: '#E3E3E3'
                            },
                            select: {
                                stroke: '#ECECEC',
                                fill: '#ECECEC'
                            }
                        }
                    }
                }
            }
        });
    });
}

function marketHighcharts(response) {
    var timestamps = response.map(function(entry, index) {
      return (index % 4 === 0) ? moment(entry.timestamp).format('DD-MM, HH:mm') : '';
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

    $(function () {
        $('#container').highcharts({
            chart: {
                backgroundColor:'#ECECEC'
            },
            title: {
                text: 'Market Pool Per Day',
                x: -20 //center
            },

            xAxis: {
                categories: timestamps
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
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 30,
                floating: true,
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

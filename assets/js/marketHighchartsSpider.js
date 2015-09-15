function marketHighchartsSpider(response) {
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

        $('#containerSpiderMarket').highcharts({

            chart: {
                backgroundColor:'#ECECEC',
                polar: true,
                type: 'area',
                margin: [30, 0, 0, 0],
                spacingTop: 10,
                spacingBottom: 0,
                spacingLeft: 0,
                spacingRight: 0
            },
            plotOptions: {
                polygon: {
                    size:'100%'
                }
            },

            title: {
                text: 'Market Pool for ' +dateTitle,
            },

            xAxis: {
                categories: timestamps,
                // tickmarkPlacement: 'on',
                lineWidth: 0,
                tickInterval: 4,
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },

            tooltip: {
                shared: true,
            },

           legend: {
                layout: 'vertical',
                align: 'left',
                x: 50,
                verticalAlign: 'middle',
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
                    valueSuffix: ' ¢'
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



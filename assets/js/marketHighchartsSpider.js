function marketHighchartsSpider(response) {
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

        $('#containerSpiderMarket').highcharts({

            chart: {
                backgroundColor:'#ECECEC',
                polar: true,
                type: 'area'
            },

            title: {
                text: 'SpiderWeb',
                // x: -80
            },

            xAxis: {
                categories: timestamps,
                // tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 70,
                layout: 'vertical',
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#ECECEC'
            },

            series: [{
                name: 'Clearing Price',
                data: clearingPrices,
                marker: {
                    enabled: false
                }
            }, {
                name: 'Clearing Quantity',
                data: clearingQuantities,
                marker: {
                    enabled: false
                }
            }, {
                name: 'Seller΄s Quantity',
                data: sellerQuantities,
                marker: {
                    enabled: false
                }
            }, {
                name: 'Buyer΄s Quantity',
                data: buyerQuantities,
                marker: {
                    enabled: false
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



function devicesMultipleAxesChart(data) {
    var timestamps = data.map(function(entry, index) {
      return (index % 4 === 0) ? moment(entry.timestamp).format('DD-MM, HH:mm') : '';
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

    $(function () {
        $('#containerMultipleAxes').highcharts({
            chart: {
                zoomType: 'xy',
                backgroundColor:'#ECECEC'
            },
            title: {
                text: 'Bid Price Bid Quantity and Load Per Day'
            },
            xAxis: [{
                categories: timestamps,
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value} Watt',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: 'Bid Quantity',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Bid Price',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value} $',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }

            }, { // Tertiary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Consumed Load',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} Watt',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
              // labelFormatter: function() {
              //       return '<span style="color: '+this.color+'">'+ this.name + '</span>';
              //   },
                itemStyle: {
                    color: '#333',
                },
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#ECECEC'
            },
            series: [{
                name: 'Bid Price',
                color: Highcharts.getOptions().colors[1],
                type: 'spline',
                yAxis: 1,
                data: bidPrices,
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: ' $'
                }

            }, {
                name: 'Consumed Load',
                color: Highcharts.getOptions().colors[0],
                type: 'spline',
                yAxis: 2,
                data: totalLoads,
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: ' Watt'
                }

            }, {
                name: 'Bid Quantity',
                color: Highcharts.getOptions().colors[2],
                type: 'spline',
                data: bidQuantities,
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

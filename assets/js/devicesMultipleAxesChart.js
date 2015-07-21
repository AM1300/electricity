function devicesMultipleAxesChart(data) {

    var timestamps = data.map(function(entry, index) {
      return moment(entry.timestamp).format('HH:mm');
    });

    var date = data.map(function(entry, index) {
      return moment(entry.timestamp).format('MMMM Do YYYY');
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

    var types = data.map(function(entry) {
      return entry.type;
    });

    var dateTitle = date[0];
    var devType = types[0];
    var devTypeTitle;

    if (devType == 'ac') {
      devTypeTitle = 'Air Condition';
    }
    if (devType == 'wh') {
      devTypeTitle = 'Waterheater';
    }

    $(function () {
        $('#containerMultipleAxes').highcharts({
           chart: {
                backgroundColor:'#ECECEC',
                zoomType: 'x',
                resetZoomButton: {
                  position: {
                    x: -20,
                    y: -30
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
                text: 'Properties for ' +devTypeTitle+  ' for ' +dateTitle
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: [{
                categories: timestamps,
                crosshair: true,
                tickInterval: 4
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value} kW',
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
                    format: '{value} ¢',
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
                    format: '{value} kW',
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
                align: 'center',
                verticalAlign: 'bottom',
                floating: false,
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
                    valueSuffix: ' ¢'
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
                    valueSuffix: ' kWatt'
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
                    valueSuffix: ' kWatt'
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

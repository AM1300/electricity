function triplexMeterMultipleAxesChart(data) {

    var timestamps = data.map(function(entry, index) {
      return moment(entry.timestamp).format('HH:mm');
    });

    var date = data.map(function(entry, index) {
      return moment(entry.timestamp).format('MMMM Do YYYY');
    });
    var realPowers = data.map(function(entry) {
      return entry.realPower;
    });

    var reactivePowers = data.map(function(entry) {
      return entry.reactivePower;
    });

    var dateTitle = date[0];

    $(function () {
        $('#containerMultipleAxesTriplex').highcharts({
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
                text: 'Central Triplex Meter ' +dateTitle
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
                    format: '{value} Watt',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                title: {
                    text: 'Reactive Power',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Real Power',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                labels: {
                    format: '{value} Watt',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                }
            }],
            tooltip: {
                shared: true
            },
            legend: {
                itemStyle: {
                    color: '#333',
                },
                align: 'center',
                verticalAlign: 'bottom',
                floating: false,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#ECECEC'
            },
            series: [{
                name: 'Real Power',
                color: Highcharts.getOptions().colors[2],
                type: 'spline',
                yAxis: 1,
                data: realPowers,
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: ' Watt'
                }

            }, {
                name: 'Reactive Power',
                color: Highcharts.getOptions().colors[0],
                type: 'spline',
                data: reactivePowers,
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

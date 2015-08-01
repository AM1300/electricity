function housesMultipleLineChart(data) {
    var timestamps = data.map(function(entry, index) {
      return moment(entry.timestamp).format('HH:mm');
    });

    var date = data.map(function(entry, index) {
      return moment(entry.timestamp).format('MMMM Do YYYY');
    });

    var totalLoads = data.map(function(entry) {
      return entry.totalLoad;
    });

    var reactivePowers = data.map(function(entry) {
      return ((entry.reactivePower) / 1000);
    });

    var dateTitle = date[0];

    $(function () {
        $('#containerTriplex').highcharts({
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
                text: 'Total Load & Reactive Power for ' +dateTitle,
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
              labels: {
                  format: '{value} kW'
              },
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
              }],
              title: {
                  text: ' ',
                },
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
                name: 'Total Load',
                color: Highcharts.getOptions().colors[2],
                data: totalLoads,
                type: 'spline',
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: ' kWatt'
                }
            }, {
                name: 'Reactive Power',
                color: Highcharts.getOptions().colors[0],
                data: reactivePowers,
                type: 'spline',
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

function triplexMeterMultipleAxesChart(data) {

    var timestamps = data.map(function(entry, index) {
      return (index % 4 === 0) ? moment(entry.timestamp).format('DD-MM, HH:mm') : '';
    });

    var realPowers = data.map(function(entry) {
      return entry.realPower;
    });

    var reactivePowers = data.map(function(entry) {
      return entry.reactivePower;
    });

    $(function () {
        $('#containerMultipleAxesTriplex').highcharts({
            chart: {
                zoomType: 'xy',
                backgroundColor:'#ECECEC'
            },
            title: {
                text: 'Real and Reactive Power at Central Triplex Meter'
            },
            xAxis: [{
                categories: timestamps,
                crosshair: true
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
              // labelFormatter: function() {
              //       return '<span style="color: '+this.color+'">'+ this.name + '</span>';
              //   },
                itemStyle: {
                    color: '#333',
                },
                layout: 'vertical',
                align: 'left',
                x: 100,
                verticalAlign: 'top',
                y: 25,
                floating: true,
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

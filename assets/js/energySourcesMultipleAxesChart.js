function energySourcesMultipleAxesChart(data) {

    var timestamps = data.map(function(entry, index) {
      return moment(entry.timestamp).format('HH:mm');
    });

    var date = data.map(function(entry, index) {
      return moment(entry.timestamp).format('MMMM Do YYYY');
    });

    var prices = data.map(function(entry) {
      return entry.price;
    });

    var realPowers = data.map(function(entry) {
      return entry.realPower;
    });

    var reactivePowers = data.map(function(entry) {
      return entry.reactivePower;
    });

    var dateTitle = date[0];


    $(function () {
        $('#containerMultipleAxesEnergySources').highcharts({
            chart: {
                zoomType: 'xy',
                backgroundColor:'#ECECEC'
            },
            title: {
                text: 'Price, Real & Reactive Power for ' +dateTitle,
            },
            credits: {
                enabled: false
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

            }, { // Tertiary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Price',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value} ¢',
                    style: {
                        color: Highcharts.getOptions().colors[1]
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
                x: 110,
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
            }, {
                name: 'Price',
                color: Highcharts.getOptions().colors[1],
                type: 'spline',
                yAxis: 2,
                data: prices,
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: ' $'
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

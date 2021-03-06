function transformerSpiderChartHighcharts(data) {
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

        $('#containerTransformer').highcharts({

            chart: {
                backgroundColor:'#ECECEC',
                polar: true,
                type: 'area',
                margin: [20, 0, 0, 0],
                spacingTop: 0,
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
                text: 'Total Load & Reactive Power for ' +dateTitle,
            },
            xAxis: {
                categories: timestamps,
                tickmarkPlacement: 'on',
                lineWidth: 0,
                labels: {
                  align: "center"
                },
                tickInterval: 4,
            },

            yAxis: {
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
                name: 'Total Load',
                color: Highcharts.getOptions().colors[2],
                data: totalLoads,
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
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: 'kWatt'
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

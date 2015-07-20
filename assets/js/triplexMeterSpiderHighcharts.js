function triplexMeterSpiderHighcharts(data) {
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

        $('#containerSpiderTriplex').highcharts({

            chart: {
                backgroundColor:'#ECECEC',
                polar: true,
                type: 'area'
            },

            title: {
                text: 'Real and Reactive Power',
                // x: -80
            },

            // pane: {
            //     size: '80%'
            // },

            xAxis: {
                categories: timestamps,
                tickmarkPlacement: 'on',
                lineWidth: 0,
                labels: {
                  align: "center"
                },
                // tickInterval: 2,
            },

            yAxis: {
                // gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            legend: {
                // align: 'left',
                verticalAlign: 'top',
                y: 70,
                layout: 'horizontal',
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#ECECEC'
            },

            series: [{
                name: 'Real Power',
                data: realPowers,
                marker: {
                    enabled: false
                },
                // pointPlacement: 'on'
            }, {
                name: 'Reactive Power',
                data: reactivePowers,
                marker: {
                    enabled: false
                },
                // pointPlacement: 'on'
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

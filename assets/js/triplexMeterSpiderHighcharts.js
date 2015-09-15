function triplexMeterSpiderHighcharts(data) {
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

        $('#containerSpiderTriplex').highcharts({

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
                text: 'Central Triplex Meter for ' +dateTitle,
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} Watt</b><br/>'
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
                name: 'Real Power',
                color: Highcharts.getOptions().colors[2],
                data: realPowers,
                marker: {
                    enabled: false
                },
            }, {
                name: 'Reactive Power',
                color: Highcharts.getOptions().colors[0],
                data: reactivePowers,
                marker: {
                    enabled: false
                },
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

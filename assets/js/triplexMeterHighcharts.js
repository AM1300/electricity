function triplexMeterHighcharts(data) {
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
        $('#containerTriplex').highcharts({
            chart: {
                backgroundColor:'#ECECEC'
            },
            title: {
                text: 'Real and Reactive Power at Central Triplex Meter',
                x: -20 //center
            },

            xAxis: {
                categories: timestamps
            },
            yAxis: {
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 30,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#ECECEC'
            },
            series: [{
                name: 'Real Power',
                data: realPowers,
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: ' Watt'
                }
            }, {
                name: 'Reactive Power',
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

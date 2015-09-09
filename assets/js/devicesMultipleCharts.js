function devicesMultipleCharts (activity, timestampActivity) {
    $('#containerMultipleCharts').bind('mousemove touchmove', function (e) {
        var chart,
            point,
            i;

        for (i = 0; i < Highcharts.charts.length; i++) {
            chart = Highcharts.charts[i];
            e = chart.pointer.normalize(e); // Find coordinates within the chart
            point = chart.series[0].searchPoint(e, true); // Get the hovered point

            if (point) {
                point.onMouseOver(); // Show the hover marker
                chart.tooltip.refresh(point); // Show the tooltip
                chart.xAxis[0].drawCrosshair(e, point); // Show the crosshair
            }
        }
    });

    Highcharts.Pointer.prototype.reset = function () {};

    function syncExtremes(e) {
        var thisChart = this.chart;

        Highcharts.each(Highcharts.charts, function (chart) {
            if (chart !== thisChart) {
                if (chart.xAxis[0].setExtremes) { // It is null while updating
                    chart.xAxis[0].setExtremes(e.min, e.max);
                }
            }
        });
    }

    $.each(activity.datasets, function (i, dataset) {

      // Add X values
      dataset.data = Highcharts.map(dataset.data, function (val, i) {
          return [timestampActivity[i], val];
      });

      var timestampsNew = timestampActivity.map(function(entry, index) {
        return (index % 4 === 0) ? moment(entry).format('HH:mm') : '';
      });

      $('<div class="chart">')
        .appendTo('#containerMultipleCharts')
        .highcharts({
            chart: {
                backgroundColor:'#ECECEC',
                marginLeft: 40, // Keep all charts left aligned
                spacingTop: 20,
                spacingBottom: 20
            },
            title: {
                text: dataset.name,
                align: 'left',
                margin: 0,
                x: 30
            },
            credits: {
                enabled: false
            },
            legend: {
              align: 'center',
              verticalAlign: 'top',
              floating: true,
              backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#ECECEC'                    },
            xAxis: {
                crosshair: true,
                events: {
                    setExtremes: syncExtremes
                },
                categories: timestampsNew,
            },
            yAxis: {
                labels: {
                  format: '{value}'
                },
                title: {
                    text: null
                }
            },
            tooltip: {
                positioner: function () {
                    return {
                        x: this.chart.chartWidth - this.label.width -45, // right aligned
                        y: 12
                    };
                },
                borderWidth: 0,
                backgroundColor: 'none',
                pointFormat: '{point.y}',
                headerFormat: '',
                shadow: false,
                style: {
                    fontSize: '18px'
                },
            },
            series: [{
                data: dataset.data,
                name: dataset.name,
                type: dataset.type,
                marker: {
                    enabled: false
                },
                color: Highcharts.getOptions().colors[i],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + dataset.unit
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

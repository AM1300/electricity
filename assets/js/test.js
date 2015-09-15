app.controller('sync-diagrams', function($scope, $http, $route, $routeParams) {

    $(function () {
        $('#container').bind('mousemove touchmove', function (e) {
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
        /**
         * Override the reset function, we don't need to hide the tooltips and crosshairs.
         */
        Highcharts.Pointer.prototype.reset = function () {};

        /**
         * Synchronize zooming through the setExtremes event handler.
         */
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

        // Get the data. The contents of the data file can be viewed at
        // https://github.com/highslide-software/highcharts.com/blob/master/samples/data/activity.json
        $.getJSON('/devices/' + date + '/' + type + '/' + nodeID + '/' + houseID, function (data) {
            $.each(data, function (i, data) {
                // Add X values
                var timestamps = data.map(function(entry, index) {
                  return (index % 4 === 0) ? moment(entry.timestamp).format('DD-MM, HH:mm') : '';
                });

                var loadNew = data.map(function(entry) {
                  return entry.load;
                });

                $('<div class="chart">')
                    .appendTo('#container')
                    .highcharts({
                        chart: {
                            marginLeft: 40, // Keep all charts left aligned
                            spacingTop: 20,
                            spacingBottom: 20
                            // zoomType: 'x',
                            // pinchType: null // Disable zoom on touch devices
                        },
                        title: {
                            text: 'Load for ' +data.houseID,
                            align: 'left',
                            margin: 0,
                            x: 30
                        },
                        credits: {
                            enabled: false
                        },
                        legend: {
                            enabled: false
                        },
                        xAxis: {
                            crosshair: true,
                            events: {
                                setExtremes: syncExtremes
                            },
                            labels: {
                                // format: '{value} km'
                            }
                        },
                        yAxis: {
                            title: {
                                text: null
                            }
                        },
                        tooltip: {
                            positioner: function () {
                                return {
                                    x: this.chart.chartWidth - this.label.width, // right aligned
                                    y: -1 // align to title
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
                            data: data.loadNew,
                        }]
                    });
            });
        });
    });
});

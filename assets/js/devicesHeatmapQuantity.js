function devicesHeatmapQuantity(data) {

    var timestampsDate = data.map(function(entry, index) {
      return moment(entry.timestamp).format('DD-MM');
    });

    var timestampsHour = data.map(function(entry) {
      return moment(entry.timestamp).format('HH:mm');
    });

    var bidQuantities = data.map(function(entry) {
      return entry.bidQuantity;
    });

    var types = data.map(function(entry) {
      return entry.type;
    });
    var houseIDs = data.map(function(entry) {
      return entry.houseID;
    });

    var type = types[0];
    var houseID = houseIDs[0];
    var devType;

    if(type=='wh') {
      devType = 'Waterheater';
    }

    if(type=='ac') {
      devType = 'Air Condition';
    }

    var timestampForYAxis = [];
    var timestampForXAxis = ['01-08', '02-08', '03-08', '04-08', '05-08', '06-08', '07-08'];

    for(var i = 0; i < 96; i++ ) {
        timestampForYAxis[i] = timestampsHour[i];
    }

    var finalData = [];

    for(var day = 0; day < 7; day++) {
        var dataPerDay = [];
        for(var quarter = 0; quarter < 96; quarter++) {
            dataPerDay = [ day, quarter, bidQuantities[(day * 96)  + quarter] ];
            finalData.push( dataPerDay );
        }
    }

    $(function () {

        $('#containerHeatmap').highcharts({

            chart: {
                backgroundColor:'#ECECEC',
                type: 'heatmap',
                height: 2200,
                marginTop: 80,
                marginBottom: 30
            },


            title: {
                text: 'Bid Quantity for ' +devType+ ' of house ' +houseID
            },

            credits: {
                enabled: false
            },

            xAxis: {
                categories: timestampForXAxis,
                title: 'Date'
            },

            yAxis: {
                categories: timestampForYAxis,
                title: 'Hour of Date'
            },

            colorAxis: {
                min: 0,
                minColor: '#ECECEC',
                maxColor: Highcharts.getOptions().colors[0],
            },

            legend: {
                verticalAlign: 'top',
                padding: 30,
                align: 'center',
                symbolWidth: 500
            },

            tooltip: {
                formatter: function () {
                    return '<b> On ' + this.series.xAxis.categories[this.point.x] + '</b> at  <br><b>' +
                        this.series.yAxis.categories[this.point.y] + '</b> bid quantity was <br><b>' + this.point.value + ' kWatt</b>' ;
                }
            },

            series: [{
                name: 'Bid Quantity per Date',
                borderWidth: 1,
                data: finalData,
                dataLabels: {
                    enabled: true,
                    color: '#000000'
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

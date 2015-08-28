var app = angular.module('watchElectricity', ['ngRoute', 'ui.bootstrap']);

// configure our routes
app.config(function($locationProvider, $routeProvider) {
    $routeProvider
        // route for the index page
        .when('/', {
            templateUrl : '/templates/home.html',
            controller  : 'home_controller'
        })

        // route for the about page
        .when('/technologies', {
            templateUrl : '/templates/used_technologies.html',
            controller  : 'technologies_controller'
        })

        .when('/market/line-chart/:date', {
            templateUrl : '/templates/marketLineChart.html',
            controller  : 'market-line-chart'
        })

        .when('/market/radar-chart/:date', {
            templateUrl : '/templates/marketRadarChart.html',
            controller  : 'market-radar-chart'
        })

        .when('/devices/line-chart/:date/:type/:nodeID/:houseID', {
            templateUrl : '/templates/devicesLineChart.html',
            controller  : 'devices-line-chart'
        })

        .when('/devices/radar-chart/:date/:type/:nodeID/:houseID', {
            templateUrl : '/templates/devicesRadarChart.html',
            controller  : 'devices-radar-chart'
        })

        .when('/energy-sources/line-chart/:date/:type/:nodeID', {
            templateUrl : '/templates/energySourcesLineChart.html',
            controller  : 'energy-sources-line-chart'
        })

        .when('/energy-sources/radar-chart/:date/:type/:nodeID', {
            templateUrl : '/templates/energySourcesRadarChart.html',
            controller  : 'energy-sources-radar-chart'
        })

        .when('/triplex-meter/line-chart/:date/:nodeID', {
            templateUrl : '/templates/triplexMeterLineChart.html',
            controller  : 'triplex-meter-line-chart'
        })

        .when('/houses/line-chart/:date/:nodeID/:houseID', {
            templateUrl : '/templates/houseLineChart.html',
            controller  : 'house-line-chart'
        })

        .when('/houses/multiple-line-chart/:date/:nodeID/:houseID/:phase', {
            templateUrl : '/templates/housesMultipleLineChart.html',
            controller  : 'houses-multiple-charts'
        })

        .when('/houses/spider-chart/:date/:nodeID/:houseID/:phase', {
            templateUrl : '/templates/housesSpiderChart.html',
            controller  : 'houses-spider-chart'
        })

        .when('/transformer/line-chart/:date', {
            templateUrl : '/templates/transformerLineChart.html',
            controller  : 'transformer-line-chart'
        })

        .when('/devices/multiple-line-chart/:date/:type/:nodeID/:houseID', {
            templateUrl : '/templates/devicesMultipleCharts.html',
            controller  : 'devices-multiple-charts'
        })

        .when('/devices/multiple-axes/:date/:type/:nodeID/:houseID', {
          templateUrl : '/templates/devicesMultipleAxes.html',
          controller  : 'devices-multiple-axes-chart'
        })

        .when('/devices/heatmap-load/:type/:nodeID/:houseID', {
            templateUrl : '/templates/devicesHeatmapLoad.html',
            controller  : 'devices-heatmap-load'
        })

        .when('/devices/heatmap-price/:type/:nodeID/:houseID', {
            templateUrl : '/templates/devicesHeatmapPrice.html',
            controller  : 'devices-heatmap-price'
        })

        .when('/devices/heatmap-quantity/:type/:nodeID/:houseID', {
            templateUrl : '/templates/devicesHeatmapQuantity.html',
            controller  : 'devices-heatmap-quantity'
        })

        .when('/market/highcharts-line/:date', {
          templateUrl : '/templates/marketHighcharts.html',
          controller  : 'market-line-highcharts'
        })

        .when('/market/highcharts-spider/:date', {
          templateUrl : '/templates/marketHighchartsSpider.html',
          controller  : 'market-spider-highcharts'
        })

        .when('/energy-sources/multiple-axes/:date/:type/:nodeID', {
            templateUrl : '/templates/energySourcesMultipleAxesChart.html',
            controller  : 'energy-sources-multiple-axes-chart'
        })

        .when('/triplex-meter/multiple-axes/:date/:nodeID', {
            templateUrl : '/templates/triplexMeterMultipleAxesChart.html',
            controller  : 'triplex-meter-multiple-axes-chart'
        })

        .when('/triplex-meter/highcharts/:date/:nodeID', {
            templateUrl : '/templates/triplexMeterHighcharts.html',
            controller  : 'triplex-meter-highcharts'
        })

        .when('/triplex-meter/highcharts-spider/:date/:nodeID', {
            templateUrl : '/templates/triplexMeterSpiderHighcharts.html',
            controller  : 'triplex-meter-spider-highcharts'
        })

        .when('/triplex-meter/test', {
            templateUrl : '/templates/test.html',
            controller  : 'triplex-meter-multiple-axes-chart'
        })

        .when('/triplex-meter-select', {
            templateUrl : '/templates/triplexMeterSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/devices-select', {
            templateUrl : '/templates/devicesSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/energy-sources-select', {
            templateUrl : '/templates/energySourcesSelect.html',
            controller  : 'date-picker-controller'
        })

         .when('/houses-select', {
            templateUrl : '/templates/housesSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/market-pool-select', {
            templateUrl : '/templates/marketPoolSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/nodes-select', {
            templateUrl : '/templates/nodesSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/transformer-select', {
            templateUrl : '/templates/transformerSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/devices-select-table', {
            templateUrl : '/templates/devicesSelectTable.html',
            controller  : 'date-picker-controller'
        })

        .when('/energy-sources/line/:date/:type/:nodeID', {
            templateUrl : '/templates/energySourcesLineChartHighcharts.html',
            controller  : 'energy-sources-line-chart-highcharts'
        })

        .when('/energy-sources/spider/:date/:type/:nodeID', {
            templateUrl : '/templates/energySourcesSpiderChartHighcharts.html',
            controller  : 'energy-sources-spider-chart-highcharts'
        })

        .when('/transformer/line/:date', {
            templateUrl : '/templates/transformerLineChartHighcharts.html',
            controller  : 'transformer-line-chart-highcharts'
        })

        .when('/transformer/spider/:date', {
            templateUrl : '/templates/transformerSpiderChartHighcharts.html',
            controller  : 'transformer-spider-chart-highcharts'
        })

        .when('/transformer/graph/:date/:time', {
            templateUrl : '/templates/transformerGraph.html',
            controller  : 'transformer-graphical-representation'
        })

        .when('/nodes/graph/:date/:time', {
            templateUrl : '/templates/nodesGraph.html',
            controller  : 'nodes-graph'
        })

        .when('/nodes/hierarchical-layout/:date/:time', {
            templateUrl : '/templates/nodesTree.html',
            controller  : 'nodes-tree'
        })

        .when('/system/graph', {
            templateUrl : '/templates/systemGraph.html',
            controller  : 'system-graph'
        });

         // $locationProvider.html5Mode({
        //   enabled: true,
        //   requireBase: false
        // });
});

app.controller('market-line-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;

  $http ({
    url : '/market/' + date,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = marketChart(data);
    var lineCtx = document.getElementById('market-line-chart').getContext('2d');
    var myLineChart = new Chart(lineCtx).Line(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 5
                                                          });

    $scope.rows = data;

    $scope.date = date;
  });
});


app.controller('market-radar-chart', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  $http ({
    url : '/market/' + date,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = marketChart(data);
    var radarCtx = document.getElementById('market-radar-chart').getContext('2d');
    var myRadarChart = new Chart(radarCtx).Radar(chartData, {
                                                              responsive : true,
                                                              pointHitDetectionRadius : 15
                                                            });

    $scope.rows = data;
    $scope.date = date;
  });
});

app.controller('devices-line-chart', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;

  $http ({
    url : '/devices/' + date + '/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = devicesChart(data);
    var devLineCtx = document.getElementById('devices-line-chart').getContext('2d');
    var devLineChart = new Chart(devLineCtx).Line(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 5
                                                          });
    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.rows = data;
    $scope.date = date;
    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('devices-radar-chart', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;

  $http ({
    url : '/devices/' + date + '/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = devicesChart(data);
    var devRadarCtx = document.getElementById('devices-radar-chart').getContext('2d');
    var devRadarChart = new Chart(devRadarCtx).Radar(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 15
                                                          });
    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.rows = data;
    $scope.date = date;
    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('energy-sources-line-chart', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = energySourcesChart(data);
    var energyLineCtx = document.getElementById('energy-sources-line-chart').getContext('2d');
    var energyLineChart = new Chart(energyLineCtx).Line(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 5
                                                          });
    $scope.rows = data;
    $scope.date = date;
    $scope.type = type;
    $scope.nodeID = nodeID;
  });
});

app.controller('energy-sources-radar-chart', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = energySourcesChart(data);
    var energyRadarCtx = document.getElementById('energy-sources-radar-chart').getContext('2d');
    var energyRadarChart = new Chart(energyRadarCtx).Radar(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 15
                                                          });
    $scope.rows = data;
    $scope.date = date;
    $scope.type = type;
    $scope.nodeID = nodeID;
  });
});

app.controller('triplex-meter-line-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/triplex-meter/' + date + '/' + nodeID,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = triplexMeterChart(data);
    var triplexLineCtx = document.getElementById('triplex-meter-line-chart').getContext('2d');
    var triplexLineChart = new Chart(triplexLineCtx).Line(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 5
                                                          });

    $scope.rows = data;
    $scope.date = date;
    $scope.nodeID = nodeID;
  });
});

app.controller('house-line-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;

  $http ({
    url : '/houses/' + date + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = houseChart(data);
    var houseLineCtx = document.getElementById('house-line-chart').getContext('2d');
    var houseLineChart = new Chart(houseLineCtx).Line(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 5
                                                          });

    $scope.rows = data;
    $scope.date = date;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('transformer-line-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var houseID = $routeParams.houseID;

  $http ({
    url : '/transformer/' + date,
    method : 'GET'
  })

  .success(function(data, status, headers, config) {

    var chartData = transformerChart(data);
    var transformerLineCtx = document.getElementById('transformer-line-chart').getContext('2d');
    var transformerLineChart = new Chart(transformerLineCtx).Line(chartData,  {
                                                            responsive : true,
                                                            pointHitDetectionRadius : 5
                                                          });

    $scope.rows = data;
    $scope.date = date;
  });
});

app.controller('devices-multiple-charts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;

  $http ({
    url : '/devices/' + date + '/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    var newData = parseResponse(response);
    var datasets = [];
    var info = {
      loads: {
        name: 'Total Load',
        unit: 'kW'
      },
      bidPrices: {
        name: 'Bid Price',
        unit: ' ¢'
      },
      bidQuantities: {
        name: 'Bid Quantity',
        unit: 'kW'
      }
    };
    _.each(newData.indicators, function(value, key){
      datasets.push({
        data: createBatches(value),
        name: info[key].name,
        type: 'spline',
        unit: info[key].unit
      });
    });

    var timestampsList = newData.timestamps;
    var datasetIndicatorsList = {'datasets' : datasets};

    devicesMultipleCharts(datasetIndicatorsList, timestampsList);

    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.date = date;
    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('devices-multiple-axes-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;


  $http ({
    url : '/devices/' + date + '/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    devicesMultipleAxesChart(response);

    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.date = date;
    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('market-line-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;

  $http ({
    url : '/market/' + date,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    marketHighcharts(response);

    $scope.data = response;
    $scope.date = date;
  });
});

app.controller('market-spider-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;

  $http ({
    url : '/market/' + date,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    marketHighchartsSpider(response);

    $scope.data = response;
    $scope.date = date;
  });
});


app.controller('devices-heatmap-load', function($scope, $http, $route, $routeParams) {
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;


  $http ({
    url : '/devices/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    devicesHeatmapLoad(response);

    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('devices-heatmap-price', function($scope, $http, $route, $routeParams) {
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;


  $http ({
    url : '/devices/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    devicesHeatmapPrice(response);

    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('devices-heatmap-quantity', function($scope, $http, $route, $routeParams) {
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;


  $http ({
    url : '/devices/' + type + '/' + nodeID + '/' + houseID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    devicesHeatmapQuantity(response);

    var newType;

    if(type=='wh') {
      newType = 'Waterheater';
    }

    if(type=='ac') {
      newType = 'Air Condition';
    }

    $scope.type = type;
    $scope.newType = newType;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
  });
});

app.controller('energy-sources-multiple-axes-chart', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    energySourcesMultipleAxesChart(response);

    $scope.date = date;
    $scope.type = type;
    $scope.nodeID = nodeID;
  });
});

app.controller('triplex-meter-multiple-axes-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/triplex-meter/' + date + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    triplexMeterMultipleAxesChart(response);

    $scope.date = date;
    $scope.nodeID = nodeID;
  });
});

app.controller('triplex-meter-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/triplex-meter/' + date + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    triplexMeterHighcharts(response);

    $scope.date = date;
    $scope.nodeID = nodeID;
  });
});

app.controller('triplex-meter-spider-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/triplex-meter/' + date + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    triplexMeterSpiderHighcharts(response);

    $scope.date = date;
    $scope.nodeID = nodeID;
  });
});

app.controller('date-picker-controller', ['$scope', function ($scope, $filter) {

  var vm = this;

  vm.valuationDate = new Date();
  vm.valuationDatePickerIsOpen = false;
  vm.opens = [];

  $scope.$watch(function () {
       return vm.valuationDatePickerIsOpen;
   },function(value){
      vm.opens.push("valuationDatePickerIsOpen: " + value + " at: " + new Date());
   });

  $scope.initialDate = new Date('Aug 01, 2000');
  $scope.startDate = new Date('Aug 01, 2000');
  $scope.endDate = new Date('Aug 07, 2000');

  vm.valuationDatePickerOpen = function ($event) {

      if ($event) {
          $event.preventDefault();
          $event.stopPropagation(); // This is the magic
      }
      this.valuationDatePickerIsOpen = true;
  };

  $scope.range = function(min, max, step){
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
    return input;
  };
}]);

app.controller('houses-multiple-charts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;
  var phase = $routeParams.phase;

  $http ({
    url : '/houses/' + date + '/' + nodeID + '/' + houseID + '/' + phase,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    housesMultipleLineChart(response);

    $scope.data = response;
    $scope.date = date;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
    $scope.phase = phase;
  });
});

app.controller('houses-spider-chart', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;
  var phase = $routeParams.phase;

  $http ({
    url : '/houses/' + date + '/' + nodeID + '/' + houseID + '/' + phase,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    housesSpiderChart(response);

    $scope.data = response;
    $scope.date = date;
    $scope.nodeID = nodeID;
    $scope.houseID = houseID;
    $scope.phase = phase;
  });
});

app.controller('energy-sources-line-chart-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var type = $routeParams.type;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    energySourcesLineChartHighcharts(response);

    $scope.data = response;
    $scope.date = date;
    $scope.nodeID = nodeID;
    $scope.type = type;
  });
});

app.controller('energy-sources-spider-chart-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var type = $routeParams.type;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    energySourcesSpiderChartHighcharts(response);

    $scope.data = response;
    $scope.date = date;
    $scope.nodeID = nodeID;
    $scope.type = type;
  });
});

app.controller('transformer-line-chart-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;

  $http ({
    url : '/transformer/' + date,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    transformerLineChartHighcharts(response);

    $scope.data = response;
    $scope.date = date;
  });
});

app.controller('transformer-spider-chart-highcharts', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;

  $http ({
    url : '/transformer/' + date,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    transformerSpiderChartHighcharts(response);

    $scope.data = response;
    $scope.date = date;
  });
});

app.controller('nodes-graph', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  var time = $routeParams.time;

  $http ({
    url : '/nodes-all/' + date + '/' + time,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    var voltageA611 = response[0].voltageA611;
    var voltageB611 = response[0].voltageB611;
    var voltageC611 = response[0].voltageC611;
    var voltageA632 = response[0].voltageA632;
    var voltageB632 = response[0].voltageB632;
    var voltageC632 = response[0].voltageC632;
    var voltageA645 = response[0].voltageA645;
    var voltageB645 = response[0].voltageB645;
    var voltageC645 = response[0].voltageC645;
    var voltageA646 = response[0].voltageA646;
    var voltageB646 = response[0].voltageB646;
    var voltageC646 = response[0].voltageC646;
    var voltageA652 = response[0].voltageA652;
    var voltageB652 = response[0].voltageB652;
    var voltageC652 = response[0].voltageC652;
    var voltageA671 = response[0].voltageA671;
    var voltageB671 = response[0].voltageB671;
    var voltageC671 = response[0].voltageC671;
    var voltageA675 = response[0].voltageA675;
    var voltageB675 = response[0].voltageB675;
    var voltageC675 = response[0].voltageC675;
    var voltageA680 = response[0].voltageA680;
    var voltageB680 = response[0].voltageB680;
    var voltageC680 = response[0].voltageC680;
    var voltageA684 = 0;
    var voltageB684 = 0;
    var voltageC684 = 0;
    var voltageA692 = response[0].voltageA692;
    var voltageB692 = response[0].voltageB692;
    var voltageC692 = response[0].voltageC692;
    var voltageA6321 = response[0].voltageA6321;
    var voltageB6321 = response[0].voltageB6321;
    var voltageC6321 = response[0].voltageC6321;
    var voltageA6711 = response[0].voltageA6711;
    var voltageB6711 = response[0].voltageB6711;
    var voltageC6711 = response[0].voltageC6711;

    var currentOutA632_645 = response[0].currentOutA632_645;
    var currentOutB632_645 = response[0].currentOutB632_645;
    var currentOutC632_645 = response[0].currentOutC632_645;
    var currentOutA632_6321 = response[0].currentOutA632_6321;
    var currentOutB632_6321 = response[0].currentOutB632_6321;
    var currentOutC632_6321 = response[0].currentOutC632_6321;
    var currentOutA645_646 = response[0].currentOutA645_646;
    var currentOutB645_646 = response[0].currentOutB645_646;
    var currentOutC645_646 = response[0].currentOutC645_646;
    var currentOutA6321_671 = response[0].currentOutA6321_671;
    var currentOutB6321_671 = response[0].currentOutB6321_671;
    var currentOutC6321_671 = response[0].currentOutC6321_671;
    var currentOutA671_680 = response[0].currentOutA671_680;
    var currentOutB671_680 = response[0].currentOutB671_680;
    var currentOutC671_680 = response[0].currentOutC671_680;
    var currentOutA671_684 = response[0].currentOutA671_684;
    var currentOutB671_684 = response[0].currentOutB671_684;
    var currentOutC671_684 = response[0].currentOutC671_684;

    var nodes = new vis.DataSet([
        {id: 611, label: '611', title: 'A : ' +voltageA611+ '\n' +'B : ' +voltageB611+'\n' + 'C : ' +voltageC611},
        {id: 632, label: '632', title: 'A : ' +voltageA632+ '\n' +'B : ' +voltageB632+'\n' + 'C : ' +voltageC632},
        {id: 645, label: '645', title: 'A : ' +voltageA645+ '\n' +'B : ' +voltageB645+'\n' + 'C : ' +voltageC645},
        {id: 646, label: '646', title: 'A : ' +voltageA646+ '\n' +'B : ' +voltageB646+'\n' + 'C : ' +voltageC646},
        {id: 652, label: '652', title: 'A : ' +voltageA652+ '\n' +'B : ' +voltageB652+'\n' + 'C : ' +voltageC652},
        {id: 671, label: '671', title: 'A : ' +voltageA671+ '\n' +'B : ' +voltageB671+'\n' + 'C : ' +voltageC671},
        {id: 675, label: '675', title: 'A : ' +voltageA675+ '\n' +'B : ' +voltageB675+'\n' + 'C : ' +voltageC675},
        {id: 680, label: '680', title: 'A : ' +voltageA680+ '\n' +'B : ' +voltageB680+'\n' + 'C : ' +voltageC680},
        {id: 684, label: '684', title: 'A : ' +voltageA684+ '\n' +'B : ' +voltageB684+'\n' + 'C : ' +voltageC684},
        {id: 692, label: '692', title: 'A : ' +voltageA692+ '\n' +'B : ' +voltageB692+'\n' + 'C : ' +voltageC692},
        {id: 6321, label: '6321', title: 'A : ' +voltageA6321+ '\n' +'B : ' +voltageB6321+'\n' + 'C : ' +voltageC6321},
        {id: 6711, label: '6711', title: 'A : ' +voltageA6711+ '\n' +'B : ' +voltageB6711+'\n' + 'C : ' +voltageC6711}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 611, to: null},
        {from: 632, to: 645, title: 'A : ' +currentOutA632_645+' '+ 'B : ' +currentOutB632_645+' '+ 'C : ' +currentOutC632_645, label: '632 -> 645'},
        {from: 632, to: 6321, title: 'A : ' +currentOutA632_6321+' '+ 'B : ' +currentOutB632_6321+' '+ 'C : ' +currentOutC632_6321, label: '632 -> 6321'},
        {from: 645, to: 646, title: 'A : ' +currentOutA645_646+' '+ 'B : ' +currentOutB645_646+' '+ 'C : ' +currentOutC645_646, label: '645 -> 646'},
        {from: 646, to: null},
        {from: 6321, to: 671, title: 'A : ' +currentOutA6321_671+' '+ 'B : ' +currentOutB6321_671+' '+ 'C : ' +currentOutC6321_671, label: '6321 -> 671'},
        {from: 671, to: 680, title: 'A : ' +currentOutA671_680+' '+ 'B : ' +currentOutB671_680+' '+ 'C : ' +currentOutC671_680, label: '671 -> 680'},
        {from: 680, to: null},
        {from: 671, to: 684, title: 'A : ' +currentOutA671_684+' '+ 'B : ' +currentOutB671_684+' '+ 'C : ' +currentOutC671_684, label: '671 -> 684'},
        {from: 671, to: 6711, title: 'A : 0 B : 0 C : 0'},
        {from: 671, to: 692, title: 'A : 0 B : 0 C : 0'},
        {from: 692, to: 675, title: 'A : 0 B : 0 C : 0'},
        {from: 684, to: 652, title: 'A : 0 B : 0 C : 0'},
        {from: 684, to: 611, title: 'A : 0 B : 0 C : 0'},
        {from: 652, to: null},
        {from: 675, to: null},
        {from: 692, to: null},
        {from: 6711, to: null},
    ]);

    // create a network
    var container = document.getElementById('nodesNetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
      edges: {
        arrows: {
          to: {enabled: true, scaleFactor:1},
        },
        smooth: {
          type: 'continuous',
          forceDirection: 'none'
        },
        font: {
          align: 'top'
        }
      }
    };

    // initialize your network!
    var network = new vis.Network(container, data, options);

    $scope.date = date;
    $scope.time = time;

  });
});

app.controller('nodes-tree', function($scope, $http, $route, $routeParams) {

  var date = $routeParams.date;
  var time = $routeParams.time;

  $http ({
    url : '/nodes-all/' + date + '/' + time,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    var voltageA611 = response[0].voltageA611;
    var voltageB611 = response[0].voltageB611;
    var voltageC611 = response[0].voltageC611;
    var voltageA632 = response[0].voltageA632;
    var voltageB632 = response[0].voltageB632;
    var voltageC632 = response[0].voltageC632;
    var voltageA645 = response[0].voltageA645;
    var voltageB645 = response[0].voltageB645;
    var voltageC645 = response[0].voltageC645;
    var voltageA646 = response[0].voltageA646;
    var voltageB646 = response[0].voltageB646;
    var voltageC646 = response[0].voltageC646;
    var voltageA652 = response[0].voltageA652;
    var voltageB652 = response[0].voltageB652;
    var voltageC652 = response[0].voltageC652;
    var voltageA671 = response[0].voltageA671;
    var voltageB671 = response[0].voltageB671;
    var voltageC671 = response[0].voltageC671;
    var voltageA675 = response[0].voltageA675;
    var voltageB675 = response[0].voltageB675;
    var voltageC675 = response[0].voltageC675;
    var voltageA680 = response[0].voltageA680;
    var voltageB680 = response[0].voltageB680;
    var voltageC680 = response[0].voltageC680;
    var voltageA684 = 0;
    var voltageB684 = 0;
    var voltageC684 = 0;
    var voltageA692 = response[0].voltageA692;
    var voltageB692 = response[0].voltageB692;
    var voltageC692 = response[0].voltageC692;
    var voltageA6321 = response[0].voltageA6321;
    var voltageB6321 = response[0].voltageB6321;
    var voltageC6321 = response[0].voltageC6321;
    var voltageA6711 = response[0].voltageA6711;
    var voltageB6711 = response[0].voltageB6711;
    var voltageC6711 = response[0].voltageC6711;

    var currentOutA632_645 = response[0].currentOutA632_645;
    var currentOutB632_645 = response[0].currentOutB632_645;
    var currentOutC632_645 = response[0].currentOutC632_645;
    var currentOutA632_6321 = response[0].currentOutA632_6321;
    var currentOutB632_6321 = response[0].currentOutB632_6321;
    var currentOutC632_6321 = response[0].currentOutC632_6321;
    var currentOutA645_646 = response[0].currentOutA645_646;
    var currentOutB645_646 = response[0].currentOutB645_646;
    var currentOutC645_646 = response[0].currentOutC645_646;
    var currentOutA6321_671 = response[0].currentOutA6321_671;
    var currentOutB6321_671 = response[0].currentOutB6321_671;
    var currentOutC6321_671 = response[0].currentOutC6321_671;
    var currentOutA671_680 = response[0].currentOutA671_680;
    var currentOutB671_680 = response[0].currentOutB671_680;
    var currentOutC671_680 = response[0].currentOutC671_680;
    var currentOutA671_684 = response[0].currentOutA671_684;
    var currentOutB671_684 = response[0].currentOutB671_684;
    var currentOutC671_684 = response[0].currentOutC671_684;

    var nodes = new vis.DataSet([
        {id: 611, label: '611', title: 'A : ' +voltageA611+ '\n' +'B : ' +voltageB611+'\n' + 'C : ' +voltageC611},
        {id: 632, label: '632', title: 'A : ' +voltageA632+ '\n' +'B : ' +voltageB632+'\n' + 'C : ' +voltageC632},
        {id: 645, label: '645', title: 'A : ' +voltageA645+ '\n' +'B : ' +voltageB645+'\n' + 'C : ' +voltageC645},
        {id: 646, label: '646', title: 'A : ' +voltageA646+ '\n' +'B : ' +voltageB646+'\n' + 'C : ' +voltageC646},
        {id: 652, label: '652', title: 'A : ' +voltageA652+ '\n' +'B : ' +voltageB652+'\n' + 'C : ' +voltageC652},
        {id: 671, label: '671', title: 'A : ' +voltageA671+ '\n' +'B : ' +voltageB671+'\n' + 'C : ' +voltageC671},
        {id: 675, label: '675', title: 'A : ' +voltageA675+ '\n' +'B : ' +voltageB675+'\n' + 'C : ' +voltageC675},
        {id: 680, label: '680', title: 'A : ' +voltageA680+ '\n' +'B : ' +voltageB680+'\n' + 'C : ' +voltageC680},
        {id: 684, label: '684', title: 'A : ' +voltageA684+ '\n' +'B : ' +voltageB684+'\n' + 'C : ' +voltageC684},
        {id: 692, label: '692', title: 'A : ' +voltageA692+ '\n' +'B : ' +voltageB692+'\n' + 'C : ' +voltageC692},
        {id: 6321, label: '6321', title: 'A : ' +voltageA6321+ '\n' +'B : ' +voltageB6321+'\n' + 'C : ' +voltageC6321},
        {id: 6711, label: '6711', title: 'A : ' +voltageA6711+ '\n' +'B : ' +voltageB6711+'\n' + 'C : ' +voltageC6711}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 611, to: null},
        {from: 632, to: 645, title: 'A : ' +currentOutA632_645+' '+ 'B : ' +currentOutB632_645+' '+ 'C : ' +currentOutC632_645, label: '632 -> 645'},
        {from: 632, to: 6321, title: 'A : ' +currentOutA632_6321+' '+ 'B : ' +currentOutB632_6321+' '+ 'C : ' +currentOutC632_6321, label: '632 -> 6321'},
        {from: 645, to: 646, title: 'A : ' +currentOutA645_646+' '+ 'B : ' +currentOutB645_646+' '+ 'C : ' +currentOutC645_646, label: '645 -> 646'},
        {from: 646, to: null},
        {from: 6321, to: 671, title: 'A : ' +currentOutA6321_671+' '+ 'B : ' +currentOutB6321_671+' '+ 'C : ' +currentOutC6321_671, label: '6321 -> 671'},
        {from: 671, to: 680, title: 'A : ' +currentOutA671_680+' '+ 'B : ' +currentOutB671_680+' '+ 'C : ' +currentOutC671_680, label: '671 -> 680'},
        {from: 680, to: null},
        {from: 671, to: 684, title: 'A : ' +currentOutA671_684+' '+ 'B : ' +currentOutB671_684+' '+ 'C : ' +currentOutC671_684, label: '671 -> 684'},
        {from: 671, to: 6711, title: 'A : 0 B : 0 C : 0'},
        {from: 671, to: 692, title: 'A : 0 B : 0 C : 0'},
        {from: 692, to: 675, title: 'A : 0 B : 0 C : 0'},
        {from: 684, to: 652, title: 'A : 0 B : 0 C : 0'},
        {from: 684, to: 611, title: 'A : 0 B : 0 C : 0'},
        {from: 652, to: null},
        {from: 675, to: null},
        {from: 692, to: null},
        {from: 6711, to: null},

    ]);

    // create a network
    var container = document.getElementById('nodesNetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
      edges: {
        arrows: {
          to: {enabled: true, scaleFactor:1},
        },
        smooth: {
          type: 'continuous',
          forceDirection: 'none'
        },
        font: {
          align: 'top'
        }
      },
      layout: {
        randomSeed: 632,
        hierarchical: {
          enabled:true,
          levelSeparation: 150,
          direction: 'UD',   // UD, DU, LR, RL
          sortMethod: 'directed' // hubsize, directed
        },
      }
    };

    // initialize your network!
    var network = new vis.Network(container, data, options);

    $scope.date = date;
    $scope.time = time;

  });
});

app.controller('transformer-graphical-representation', function($scope, $http, $route, $routeParams) {
  var date = $routeParams.date;
  var time = $routeParams.time;
  $http ({
    url : '/transformer/' + date + '/' + time,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    var powerInPhaseA = response[0].phaseAIn;
    var powerOutPhaseA = response[0].phaseAOut;
    var powerLossesPhaseA = response[0].phaseALosses;
    var powerInPhaseB = response[0].phaseBIn;
    var powerOutPhaseB = response[0].phaseBOut;
    var powerInPhaseC = response[0].phaseCIn;
    var powerOutPhaseC = response[0].phaseCOut;

    var nodesPhaseA = new vis.DataSet([
        { id: 1 , label: '   A   ', x: 200, y: 200, shape: 'box' },
        {id: 0 , label: ' IN ', x: 0, y: 200, shape: 'box', color: { border: '#e3e3e3' }},
        {id: 2 , label: ' OUT ', x: 400, y: 200,  shape: 'box', color: { border: '#e3e3e3' }},
        {id: 3 , label: 'LOSSES', x: 200, y: 350,  shape: 'box', color: { border: '#e3e3e3' }}
    ]);

    // create an array with edges
    var edgesPhaseA = new vis.DataSet([
        {from: 0, to: 1, label: powerInPhaseA, color: '#2ecc71' },
        {from: 1, to: 2, label: powerOutPhaseA, color: '#e74c3c' },
        {from: 1, to: 3, label: powerLossesPhaseA, color: '#e67e22' }
    ]);

    // create a network
    var containerPhaseA = document.getElementById('networkForPhaseA');

    // provide the data in the vis format
    var dataPhaseA = {
        nodes: nodesPhaseA,
        edges: edgesPhaseA
    };


    var nodesPhaseB = new vis.DataSet([
        {id: 1 , label: '   B   ', x: 200, y: 200, shape: 'box'},
        {id: 0 , label: ' IN ', x: 0, y: 200, shape: 'box', color: { border: '#e3e3e3' }},
        {id: 2 , label: ' OUT ', x: 400, y: 200, shape: 'box', color: { border: '#e3e3e3' }},
    ]);

    // create an array with edges
    var edgesPhaseB = new vis.DataSet([
        {from: 0, to: 1, label: powerInPhaseB, color: '#2ecc71' },
        {from: 1, to: 2, label: powerOutPhaseB, color: '#e74c3c' },
    ]);

    // create a network
    var containerPhaseB = document.getElementById('networkForPhaseB');

    // provide the data in the vis format
    var dataPhaseB = {
        nodes: nodesPhaseB,
        edges: edgesPhaseB
    };


    var nodesPhaseC = new vis.DataSet([
        {id: 1 , label: '   C   ', x: 200, y: 200, shape: 'box'},
        {id: 0 , label: ' IN ', x: 0, y: 200, shape: 'box', color: { border: '#e3e3e3' }},
        {id: 2 , label: ' OUT ', x: 400, y: 200, shape: 'box', color: { border: '#e3e3e3' }},

    ]);

    // create an array with edges
    var edgesPhaseC = new vis.DataSet([
        {from: 0, to: 1, label: powerInPhaseC, color: '#2ecc71' },
        {from: 1, to: 2, label: powerOutPhaseC, color: '#e74c3c' },
    ]);

    // create a network
    var containerPhaseC = document.getElementById('networkForPhaseC');

    // provide the data in the vis format
    var dataPhaseC = {
        nodes: nodesPhaseC,
        edges: edgesPhaseC
    };

    var options = {
      nodes: {
        fixed : {
          x: true,
          y: true
        },
        color: '#e3e3e3'
      },
      edges: {
        arrows: {
          to: {enabled: true, scaleFactor:1},
        },
        smooth: false,
        font: {
          align: 'top',
          size: 12
        }
      }
    };

    // initialize your network!
    var networkPhaseA = new vis.Network(containerPhaseA , dataPhaseA , options);
    var networkPhaseB = new vis.Network(containerPhaseB , dataPhaseB , options);
    var networkPhaseC = new vis.Network(containerPhaseC , dataPhaseC , options);

    $scope.date = date;
    $scope.time = time;

  });
});


app.controller('system-graph', function($scope, $http) {
  $http ({
    url : '/house-system-graph/',
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    var basicNodes = [];
    var houseNodes = [];
    var deviceNodes = [];
    var housesIn611 = [];
    var housesIn645 = [];
    var housesIn646 = [];
    var housesIn652 = [];
    var housesIn671 = [];
    var housesIn675 = [];
    var housesIn692 = [];
    var housesIn6321 = [];
    var housesIn6711 = [];
    var parsedHouses = {};
    var housesOf611 = [];
    var housesOf645 = [];
    var housesOf646 = [];
    var housesOf652 = [];
    var housesOf671 = [];
    var housesOf675 = [];
    var housesOf692 = [];
    var housesOf6321 = [];
    var housesOf6711 = [];
    var parsedEdges = {};
    var edgesOf611 = [];
    var edgesOf645 = [];
    var edgesOf646 = [];
    var edgesOf652 = [];
    var edgesOf671 = [];
    var edgesOf675 = [];
    var edgesOf692 = [];
    var edgesOf6321 = [];
    var edgesOf6711 = [];

    for (index = 0; index < response.length; index++) {
      basicNodes.push(response[index].nodeID);
      houseNodes.push(response[index].houseID);
      deviceNodes.push(response[index].devID);
      if(response[index].nodeID === 611) {
        housesIn611.push(response[index].houseID);
        parsedHouses = parseArray(response[index].houseID, response[index].nodeID);
        housesOf611.push(parsedHouses);
        parsedEdges = findEdge(response[index].houseID, response[index].nodeID);
        edgesOf611.push(parsedEdges);
      }
      if(response[index].nodeID === 645) {
        housesIn645.push(response[index].houseID);
        parsedHouses = parseArray(response[index].houseID, response[index].nodeID);
        housesOf645.push(parsedHouses);
        parsedEdges = findEdge(response[index].houseID, response[index].nodeID);
        edgesOf645.push(parsedEdges);
      }
      if(response[index].nodeID === 646) {
        housesIn646.push(response[index].houseID);
        parsedHouses = parseArray(response[index].houseID, response[index].nodeID);
        housesOf646.push(parsedHouses);
        parsedEdges = findEdge(response[index].houseID, response[index].nodeID);
        edgesOf646.push(parsedEdges);
      }
      if(response[index].nodeID === 652) {
        housesIn652.push(response[index].houseID);
        parsedHouses = parseArray(response[index].houseID, response[index].nodeID);
        housesOf652.push(parsedHouses);
        parsedEdges = findEdge(response[index].houseID, response[index].nodeID);
        edgesOf652.push(parsedEdges);
      }
      if(response[index].nodeID === 671) {
        housesIn671.push(response[index].houseID);
        parsedHouses = parseArray(response[index].houseID, response[index].nodeID);
        housesOf671.push(parsedHouses);
        parsedEdges = findEdge(response[index].houseID, response[index].nodeID);
        edgesOf671.push(parsedEdges);
      }
      if(response[index].nodeID === 675) {
        housesIn675.push(response[index].houseID);
        parsedHouses = parseArray(response[index].houseID, response[index].nodeID);
        housesOf675.push(parsedHouses);
        parsedEdges = findEdge(response[index].houseID, response[index].nodeID);
        edgesOf675.push(parsedEdges);
      }
      if(response[index].nodeID === 692) {
        housesIn692.push(response[index].houseID);
        parsedHouses = parseArray(response[index].houseID, response[index].nodeID);
        housesOf692.push(parsedHouses);
        parsedEdges = findEdge(response[index].houseID, response[index].nodeID);
        edgesOf692.push(parsedEdges);
      }
      if(response[index].nodeID === 6321) {
        housesIn6321.push(response[index].houseID);
        parsedHouses = parseArray(response[index].houseID, response[index].nodeID);
        housesOf6321.push(parsedHouses);
        parsedEdges = findEdge(response[index].houseID, response[index].nodeID);
        edgesOf6321.push(parsedEdges);
      }
      if(response[index].nodeID === 6711) {
        housesIn6711.push(response[index].houseID);
        parsedHouses = parseArray(response[index].houseID, response[index].nodeID);
        housesOf6711.push(parsedHouses);
        parsedEdges = findEdge(response[index].houseID, response[index].nodeID);
        edgesOf6711.push(parsedEdges);
      }
    }


    // console.log('housesFinal OUTSIDE! : ' +JSON.stringify(housesOf611));
    // console.log('edges! : ' +JSON.stringify(edgesOf671));

    basicNodes = _.uniq(basicNodes);
    houseNodes = _.uniq(houseNodes);
    deviceNodes = _.uniq(deviceNodes);
    housesIn611 = _.uniq(housesIn611);
    housesIn645 = _.uniq(housesIn645);
    housesIn646 = _.uniq(housesIn646);
    housesIn652 = _.uniq(housesIn652);
    housesIn671 = _.uniq(housesIn671);
    housesIn675 = _.uniq(housesIn675);
    housesIn692 = _.uniq(housesIn692);
    housesIn6321 = _.uniq(housesIn6321);
    housesIn6711 = _.uniq(housesIn6711);
    housesOf671 = UniqueJson(housesOf671);
    housesOf675 = UniqueJson(housesOf675);
    housesOf692 = UniqueJson(housesOf692);
    housesOf6321 = UniqueJson(housesOf6321);
    housesOf6711 = UniqueJson(housesOf6711);
    edgesOf671 = UniqueJson(edgesOf671);
    edgesOf675 = UniqueJson(edgesOf675);
    edgesOf692 = UniqueJson(edgesOf692);
    edgesOf6321 = UniqueJson(edgesOf6321);
    edgesOf6711 = UniqueJson(edgesOf6711);

    // console.log('Unique edges :' +JSON.stringify(edgesOf671));
    // console.log('housesIn6711 are :' +JSON.stringify(housesIn6711));
    // console.log('Houses:' +JSON.stringify(housesOf645) +JSON.stringify(housesOf646) +JSON.stringify(housesOf652));

    var nodes = [
      {id: '611', label: '611', group: '611'},
      {id: '632', label: '632', group: '632'},
      {id: '645', label: '645', group: '645'},
      {id: '646', label: '646', group: '646'},
      {id: '652', label: '652', group: '652'},
      {id: '671', label: '671', group: '671'},
      {id: '675', label: '675', group: '675'},
      {id: '692', label: '692', group: '692'},
      {id: '6321', label: '6321', group: '6321'},
      {id: '6711', label: '6711', group: '6711'},
    ];

    // create an array with edges
    var edges = [
        {from: 632, to: 645},
        {from: 632, to: 6321},
        {from: 645, to: 646},
        {from: 6321, to: 671},
        {from: 671, to: 652},
        {from: 671, to: 611},
        {from: 671, to: 692},
        {from: 671, to: 6711},
        {from: 692, to: 675},
    ];

    var edgeLength;
    var edgesToPush;

    var length;
    var itemsToPush;

    if (housesOf611[0].group === 611) {
      length = housesOf611.length;
      itemsToPush = pushInNodesArray(nodes, housesOf611, length);
      edgeLength = edgesOf611.length;
      edgesToPush = pushInNodesArray(edges, edgesOf611, edgeLength);
    }
    if (housesOf645[0].group === 645) {
      length = housesOf645.length;
      itemsToPush = pushInNodesArray(nodes, housesOf645, length);
      edgeLength = edgesOf645.length;
      edgesToPush = pushInNodesArray(edges, edgesOf645, edgeLength);
    }
    if (housesOf646[0].group === 646) {
      length = housesOf646.length;
      itemsToPush = pushInNodesArray(nodes, housesOf646, length);
      edgeLength = edgesOf646.length;
      edgesToPush = pushInNodesArray(edges, edgesOf646, edgeLength);
    }
    if (housesOf652[0].group === 652) {
      length = housesOf652.length;
      itemsToPush = pushInNodesArray(nodes, housesOf652, length);
      edgeLength = edgesOf652.length;
      edgesToPush = pushInNodesArray(edges, edgesOf652, edgeLength);
    }
    if (housesOf671[0].group === 671) {
      length = housesOf671.length;
      itemsToPush = pushInNodesArray(nodes, housesOf671, length);
      edgeLength = edgesOf671.length;
      edgesToPush = pushInNodesArray(edges, edgesOf671, edgeLength);
    }
    if (housesOf675[0].group === 675) {
      length = housesOf675.length;
      itemsToPush = pushInNodesArray(nodes, housesOf675, length);
      edgeLength = edgesOf675.length;
      edgesToPush = pushInNodesArray(edges, edgesOf675, edgeLength);
    }
    if (housesOf692[0].group === 692) {
      length = housesOf692.length;
      itemsToPush = pushInNodesArray(nodes, housesOf692, length);
      edgeLength = edgesOf692.length;
      edgesToPush = pushInNodesArray(edges, edgesOf692, edgeLength);
    }
    if (housesOf6321[0].group === 6321) {
      length = housesOf6321.length;
      itemsToPush = pushInNodesArray(nodes, housesOf6321, length);
      edgeLength = edgesOf6321.length;
      edgesToPush = pushInNodesArray(edges, edgesOf6321, edgeLength);
    }
    if (housesOf6711[0].group === 6711) {
      length = housesOf6711.length;
      itemsToPush = pushInNodesArray(nodes, housesOf6711, length);
      edgeLength = edgesOf6711.length;
      edgesToPush = pushInNodesArray(edges, edgesOf6711, edgeLength);
    }

    // console.log(JSON.stringify(nodes));
    // console.log(JSON.stringify(edges));

    // // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};

    // create a network
    var container = document.getElementById('systemNetwork');

    // initialize your network!
    var network = new vis.Network(container, data, options);

    function parseArray(houseID, groupNumber){

      return {
        id: houseID,
        label: houseID,
        group: groupNumber
      };
    }

    function findEdge(houseID, groupNumber){

      return {
        from: houseID,
        to: groupNumber
      };
    }

    function UniqueJson(givenArray) {
      var formattedArray = [];
      givenArray.forEach(function(item) {
          var unique = true;
          formattedArray.forEach(function(item2) {
              if (_.isEqual(item, item2)) {
                  unique = false;
              }
          });
          if (unique) {
              formattedArray.push(item);
          }
      });
      return formattedArray;
    }

    function pushInNodesArray(nodes, housesOfNode, arrayLength) {
      for(var index = 0; index < arrayLength; index++) {
        var shifted = housesOfNode.shift();
        nodes.push(shifted);
      }
      return nodes;
    }
    function pushInEdgessArray(edges,edgesOfHouse, arrayLength) {
      for(var index = 0; index < arrayLength; index++) {
        var shifted = edgesOfHouse.shift();
        edges.push(shifted);
      }
      return edges;
    }
  });
});

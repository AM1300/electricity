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

        .when('/nodes/graph/A/:date/:time', {
            templateUrl : '/templates/nodesGraphPhaseA.html',
            controller  : 'nodes-graph-phaseA'
        })

        .when('/nodes/graph/B/:date/:time', {
            templateUrl : '/templates/nodesGraphPhaseB.html',
            controller  : 'nodes-graph-phaseB'
        })

        .when('/nodes/graph/C/:date/:time', {
            templateUrl : '/templates/nodesGraphPhaseC.html',
            controller  : 'nodes-graph-phaseC'
        })

        .when('/nodes/hierarchical-layout/:date/:time', {
            templateUrl : '/templates/nodesTree.html',
            controller  : 'nodes-tree'
        })

        .when('/nodes/hierarchical-layout/A/:date/:time', {
            templateUrl : '/templates/nodesTreePhaseA.html',
            controller  : 'nodes-tree-phaseA'
        })

        .when('/nodes/hierarchical-layout/B/:date/:time', {
            templateUrl : '/templates/nodesTreePhaseB.html',
            controller  : 'nodes-tree-phaseB'
        })

        .when('/nodes/hierarchical-layout/C/:date/:time', {
            templateUrl : '/templates/nodesTreePhaseC.html',
            controller  : 'nodes-tree-phaseC'
        })

        .when('/system/graph', {
            templateUrl : '/templates/systemGraph.html',
            controller  : 'system-graph'
        });

        //  $locationProvider.html5Mode({
        //   enabled: false,
        //   requireBase: true
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

  showLoader();

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

    hideLoader();
  });
});

app.controller('devices-multiple-axes-chart', function($scope, $http, $route, $routeParams) {

  showLoader();

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

    hideLoader();
  });
});

app.controller('market-line-highcharts', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;

  $http ({
    url : '/market/' + date,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    marketHighcharts(response);

    $scope.data = response;
    $scope.date = date;

    hideLoader();
  });
});

app.controller('market-spider-highcharts', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;

  $http ({
    url : '/market/' + date,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    marketHighchartsSpider(response);

    $scope.data = response;
    $scope.date = date;

    hideLoader();
  });
});


app.controller('devices-heatmap-load', function($scope, $http, $route, $routeParams) {

  showLoader();

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

    hideLoader();
  });
});

app.controller('devices-heatmap-price', function($scope, $http, $route, $routeParams) {

  showLoader();
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

    hideLoader();

  });
});

app.controller('devices-heatmap-quantity', function($scope, $http, $route, $routeParams) {

  showLoader();

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

    hideLoader();
  });
});

app.controller('energy-sources-multiple-axes-chart', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;
  var type = $routeParams.type;
  var nodeID = $routeParams.nodeID;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    energySourcesMultipleAxesChart(response);

    var typeNew;

    if(type === 'dieseltown') {
      typeNew = 'Diesel';
    }
    if(type === 'windtown') {
      typeNew = 'Wind';
    }
    if(type === 'solar') {
      typeNew = 'Solar';
    }

    $scope.date = date;
    $scope.typeNew = typeNew;
    $scope.type = type;
    $scope.nodeID = nodeID;

    hideLoader();

  });
});

app.controller('triplex-meter-multiple-axes-chart', function($scope, $http, $route, $routeParams) {

  showLoader();

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

    hideLoader();
  });
});

app.controller('triplex-meter-highcharts', function($scope, $http, $route, $routeParams) {

  showLoader();

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

    hideLoader();
  });
});

app.controller('triplex-meter-spider-highcharts', function($scope, $http, $route, $routeParams) {

  showLoader();

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

    hideLoader();

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

  showLoader();

  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;
  var phase = $routeParams.phase;

  $http ({
    url : '/houses/' + date + '/' + nodeID + '/' + houseID + '/' + phase,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    var uniqueHouses = houseID.split(',');

    for(var index = 0; index < uniqueHouses.length; index++ ) {
      var result = response.filter(function(obj) {
        return obj.houseID == uniqueHouses[index];
      });
      // console.log(result);
      housesMultipleLineChart(result, uniqueHouses[index]);


      $scope.data = response;
      $scope.date = date;
      $scope.nodeID = nodeID;
      $scope.houseID = houseID;
      $scope.phase = phase;
      $scope.uniqueHouses = uniqueHouses;

    }

    hideLoader();
  });
});

app.controller('houses-spider-chart', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var houseID = $routeParams.houseID;
  var phase = $routeParams.phase;

  $http ({
    url : '/houses/' + date + '/' + nodeID + '/' + houseID + '/' + phase,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    var uniqueHouses = houseID.split(',');

    for(var index = 0; index < uniqueHouses.length; index++ ) {
      var result = response.filter(function(obj) {
        return obj.houseID == uniqueHouses[index];
      });
      // console.log(result);
      housesSpiderChart(result, uniqueHouses[index]);


      $scope.data = response;
      $scope.date = date;
      $scope.nodeID = nodeID;
      $scope.houseID = houseID;
      $scope.phase = phase;
      $scope.uniqueHouses = uniqueHouses;

    }
    hideLoader();
  });
});

app.controller('energy-sources-line-chart-highcharts', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var type = $routeParams.type;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    energySourcesLineChartHighcharts(response);

    var typeNew;

    if(type === 'dieseltown') {
      typeNew = 'Diesel';
    }
    if(type === 'windtown') {
      typeNew = 'Wind';
    }
    if(type === 'solar') {
      typeNew = 'Solar';
    }

    $scope.typeNew = typeNew;
    $scope.data = response;
    $scope.date = date;
    $scope.nodeID = nodeID;
    $scope.type = type;

    hideLoader();
  });
});

app.controller('energy-sources-spider-chart-highcharts', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;
  var nodeID = $routeParams.nodeID;
  var type = $routeParams.type;

  $http ({
    url : '/energy-sources/' + date + '/' + type + '/' + nodeID,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    energySourcesSpiderChartHighcharts(response);

    var typeNew;

    if(type === 'dieseltown') {
      typeNew = 'Diesel';
    }
    if(type === 'windtown') {
      typeNew = 'Wind';
    }
    if(type === 'solar') {
      typeNew = 'Solar';
    }

    $scope.typeNew = typeNew;
    $scope.data = response;
    $scope.date = date;
    $scope.nodeID = nodeID;
    $scope.type = type;

    hideLoader();
  });
});

app.controller('transformer-line-chart-highcharts', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;

  $http ({
    url : '/transformer/' + date,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    transformerLineChartHighcharts(response);

    $scope.data = response;
    $scope.date = date;

    hideLoader();
  });
});

app.controller('transformer-spider-chart-highcharts', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;

  $http ({
    url : '/transformer/' + date,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {
    transformerSpiderChartHighcharts(response);

    $scope.data = response;
    $scope.date = date;

    hideLoader();
  });
});

app.controller('nodes-graph', function($scope, $http, $route, $routeParams) {

  showLoader();

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

    var select = $( "#timeSlider" );
    var initialUrl = window.location.href;
    var initialTime;
    var newUrl;
    var arrayOfInputs = initialUrl.split('/');
    var date = arrayOfInputs[6];
    var timeAppendToUrl;
    var timeArray = [];
    var formattedTimeArray = [];
    var formattedMinute;
    var arrayOfObjects = [];
    var timeArrayCopy = [];
    var timeObject = {};

    for(hour = 0; hour < 24; hour++) {
      hour = ('0' + hour).slice(-2);
      for (minute = 0; minute < 60; minute = minute + 15) {
        formattedMinute = minute === 0 ? minute + '0' : minute;
        timeArray.push(hour+ ':' +formattedMinute);
        timeArrayCopy.push(hour+ ':' +formattedMinute);
      }
    }

    for(index = 1; index <= 96; index++ ){
      var shiftedTime = timeArrayCopy.shift();
      timeObject = {
        timeValue : shiftedTime,
        timeKey   : index
      };
      arrayOfObjects.push(timeObject);
    }

    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 96,
      range: "min",
      value: select[ 0 ].selectedIndex +1,
      create: function(event, ui) {
       initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
       for(i = 1; i < arrayOfObjects.length; i++) {
        if (initialTime === arrayOfObjects[i].timeValue ) {
            $(this).slider('value', arrayOfObjects[i].timeKey);
        }
       }
      },
      slide: function(event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      },
    });

    $("#slider")
      .slider("pips", {
        labels: timeArray,
          rest: 'label',
          step: 8,
      })

      .slider("float", {
          labels: timeArray
      });

    $("#timeSlider" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });

    $("#slider").slider({
      change: function( event, ui ) {
        timeAppendToUrl = timeSlider.value;
        newUrl = initialUrl.replace(initialTime,timeAppendToUrl);
        window.location.href = newUrl;
      }
    });

    $('#timeSlider').empty();
    $.each(timeArray, function(key, value) {
      $('#timeSlider')
        .append($("<option></option>")
        .attr("value", value)
        .text(value));
    });

    $("#timeSlider" ).ready(function() {
     var initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
     for(i = 1; i < arrayOfObjects.length; i++) {
        if ($("#slider").slider("value") === arrayOfObjects[i].timeKey ) {
          $("#timeSlider").val(arrayOfObjects[i].timeValue );
          timeAppendToUrl = timeSlider.value;
        }
      }
    });

    $scope.date = date;
    $scope.time = timeAppendToUrl;

    hideLoader();
  });
});

app.controller('nodes-graph-phaseA', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;
  var time = $routeParams.time;

  $http ({
    url : '/nodes-all/' + date + '/' + time,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    var voltageA611 = response[0].voltageA611;
    var voltageA632 = response[0].voltageA632;
    var voltageA645 = response[0].voltageA645;
    var voltageA646 = response[0].voltageA646;
    var voltageA652 = response[0].voltageA652;
    var voltageA671 = response[0].voltageA671;
    var voltageA675 = response[0].voltageA675;
    var voltageA680 = response[0].voltageA680;
    var voltageA684 = 0;
    var voltageA692 = response[0].voltageA692;
    var voltageA6321 = response[0].voltageA6321;
    var voltageA6711 = response[0].voltageA6711;

    var currentOutA632_645 = response[0].currentOutA632_645;
    var currentOutA632_6321 = response[0].currentOutA632_6321;
    var currentOutA645_646 = response[0].currentOutA645_646;
    var currentOutA6321_671 = response[0].currentOutA6321_671;
    var currentOutA671_680 = response[0].currentOutA671_680;
    var currentOutA671_684 = response[0].currentOutA671_684;

    var nodes = new vis.DataSet([
        {id: 611, label: '611', title: 'A : ' +voltageA611},
        {id: 632, label: '632', title: 'A : ' +voltageA632},
        {id: 645, label: '645', title: 'A : ' +voltageA645},
        {id: 646, label: '646', title: 'A : ' +voltageA646},
        {id: 652, label: '652', title: 'A : ' +voltageA652},
        {id: 671, label: '671', title: 'A : ' +voltageA671},
        {id: 675, label: '675', title: 'A : ' +voltageA675},
        {id: 680, label: '680', title: 'A : ' +voltageA680},
        {id: 684, label: '684', title: 'A : ' +voltageA684},
        {id: 692, label: '692', title: 'A : ' +voltageA692},
        {id: 6321, label: '6321', title: 'A : ' +voltageA6321},
        {id: 6711, label: '6711', title: 'A : ' +voltageA6711}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 611, to: null},
        {from: 632, to: 645, title: 'A : ' +currentOutA632_645},
        {from: 632, to: 6321, title: 'A : ' +currentOutA632_6321},
        {from: 645, to: 646, title: 'A : ' +currentOutA645_646},
        {from: 6321, to: 671, title: 'A : ' +currentOutA6321_671},
        {from: 671, to: 680, title: 'A : ' +currentOutA671_680},
        {from: 671, to: 684, title: 'A : ' +currentOutA671_684},
        {from: 671, to: 6711, title: 'A : 0'},
        {from: 671, to: 692, title: 'A : 0'},
        {from: 692, to: 675, title: 'A : 0'},
        {from: 684, to: 652, title: 'A : 0'},
        {from: 684, to: 611, title: 'A : 0'},
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

    var select = $( "#timeSlider" );
    var initialUrl = window.location.href;
    var initialTime;
    var newUrl;
    var arrayOfInputs = initialUrl.split('/');
    var date = arrayOfInputs[7];
    var timeAppendToUrl;
    var timeArray = [];
    var formattedTimeArray = [];
    var formattedMinute;
    var arrayOfObjects = [];
    var timeArrayCopy = [];
    var timeObject = {};

    for(hour = 0; hour < 24; hour++) {
      hour = ('0' + hour).slice(-2);
      for (minute = 0; minute < 60; minute = minute + 15) {
        formattedMinute = minute === 0 ? minute + '0' : minute;
        timeArray.push(hour+ ':' +formattedMinute);
        timeArrayCopy.push(hour+ ':' +formattedMinute);
      }
    }

    for(index = 1; index <= 96; index++ ){
      var shiftedTime = timeArrayCopy.shift();
      timeObject = {
        timeValue : shiftedTime,
        timeKey   : index
      };
      arrayOfObjects.push(timeObject);
    }

    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 96,
      range: "min",
      value: select[ 0 ].selectedIndex +1,
      create: function(event, ui) {
       initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
       for(i = 1; i < arrayOfObjects.length; i++) {
        if (initialTime === arrayOfObjects[i].timeValue ) {
            $(this).slider('value', arrayOfObjects[i].timeKey);
        }
       }
      },
      slide: function(event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      },
    });

    $("#slider")
      .slider("pips", {
        labels: timeArray,
          rest: 'label',
          step: 8,
      })

      .slider("float", {
          labels: timeArray
      });

    $("#timeSlider" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });

    $("#slider").slider({
      change: function( event, ui ) {
        timeAppendToUrl = timeSlider.value;
        newUrl = initialUrl.replace(initialTime,timeAppendToUrl);
        window.location.href = newUrl;
      }
    });

    $('#timeSlider').empty();
    $.each(timeArray, function(key, value) {
      $('#timeSlider')
        .append($("<option></option>")
        .attr("value", value)
        .text(value));
    });

    $("#timeSlider" ).ready(function() {
     var initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
     for(i = 1; i < arrayOfObjects.length; i++) {
        if ($("#slider").slider("value") === arrayOfObjects[i].timeKey ) {
          $("#timeSlider").val(arrayOfObjects[i].timeValue );
          timeAppendToUrl = timeSlider.value;
        }
      }
    });

    $scope.date = date;
    $scope.time = timeAppendToUrl;

    hideLoader();
  });
});

app.controller('nodes-graph-phaseB', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;
  var time = $routeParams.time;

  $http ({
    url : '/nodes-all/' + date + '/' + time,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    var voltageB611 = response[0].voltageB611;
    var voltageB632 = response[0].voltageB632;
    var voltageB645 = response[0].voltageB645;
    var voltageB646 = response[0].voltageB646;
    var voltageB652 = response[0].voltageB652;
    var voltageB671 = response[0].voltageB671;
    var voltageB675 = response[0].voltageB675;
    var voltageB680 = response[0].voltageB680;
    var voltageB684 = 0;
    var voltageB692 = response[0].voltageB692;
    var voltageB6321 = response[0].voltageB6321;
    var voltageB6711 = response[0].voltageB6711;

    var currentOutB632_645 = response[0].currentOutB632_645;
    var currentOutB632_6321 = response[0].currentOutB632_6321;
    var currentOutB645_646 = response[0].currentOutB645_646;
    var currentOutB6321_671 = response[0].currentOutB6321_671;
    var currentOutB671_680 = response[0].currentOutB671_680;
    var currentOutB671_684 = response[0].currentOutB671_684;

    var nodes = new vis.DataSet([
        {id: 611, label: '611', title: 'B : ' +voltageB611},
        {id: 632, label: '632', title: 'B : ' +voltageB632},
        {id: 645, label: '645', title: 'B : ' +voltageB645},
        {id: 646, label: '646', title: 'B : ' +voltageB646},
        {id: 652, label: '652', title: 'B : ' +voltageB652},
        {id: 671, label: '671', title: 'B : ' +voltageB671},
        {id: 675, label: '675', title: 'B : ' +voltageB675},
        {id: 680, label: '680', title: 'B : ' +voltageB680},
        {id: 684, label: '684', title: 'B : ' +voltageB684},
        {id: 692, label: '692', title: 'B : ' +voltageB692},
        {id: 6321, label: '6321', title: 'B : ' +voltageB6321},
        {id: 6711, label: '6711', title: 'B : ' +voltageB6711}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 611, to: null},
        {from: 632, to: 645, title: 'B : ' +currentOutB632_645, label: '632 -> 645'},
        {from: 632, to: 6321, title: 'B : ' +currentOutB632_6321, label: '632 -> 6321'},
        {from: 645, to: 646, title: 'B : ' +currentOutB645_646, label: '645 -> 646'},
        {from: 6321, to: 671, title: 'B : ' +currentOutB6321_671, label: '6321 -> 671'},
        {from: 671, to: 680, title: 'B : ' +currentOutB671_680, label: '671 -> 680'},
        {from: 671, to: 684, title: 'B : ' +currentOutB671_684, label: '671 -> 684'},
        {from: 671, to: 6711, title: 'B : 0'},
        {from: 671, to: 692, title: 'B : 0'},
        {from: 692, to: 675, title: 'B : 0'} ,
        {from: 684, to: 652, title: 'B : 0'},
        {from: 684, to: 611, title: 'B : 0'},
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

    var select = $( "#timeSlider" );
    var initialUrl = window.location.href;
    var initialTime;
    var newUrl;
    var arrayOfInputs = initialUrl.split('/');
    var date = arrayOfInputs[7];
    var timeAppendToUrl;
    var timeArray = [];
    var formattedTimeArray = [];
    var formattedMinute;
    var arrayOfObjects = [];
    var timeArrayCopy = [];
    var timeObject = {};

    for(hour = 0; hour < 24; hour++) {
      hour = ('0' + hour).slice(-2);
      for (minute = 0; minute < 60; minute = minute + 15) {
        formattedMinute = minute === 0 ? minute + '0' : minute;
        timeArray.push(hour+ ':' +formattedMinute);
        timeArrayCopy.push(hour+ ':' +formattedMinute);
      }
    }

    for(index = 1; index <= 96; index++ ){
      var shiftedTime = timeArrayCopy.shift();
      timeObject = {
        timeValue : shiftedTime,
        timeKey   : index
      };
      arrayOfObjects.push(timeObject);
    }

    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 96,
      range: "min",
      value: select[ 0 ].selectedIndex +1,
      create: function(event, ui) {
       initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
       for(i = 1; i < arrayOfObjects.length; i++) {
        if (initialTime === arrayOfObjects[i].timeValue ) {
            $(this).slider('value', arrayOfObjects[i].timeKey);
        }
       }
      },
      slide: function(event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      },
    });

    $("#slider")
      .slider("pips", {
        labels: timeArray,
          rest: 'label',
          step: 8,
      })

      .slider("float", {
          labels: timeArray
      });

    $("#timeSlider" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });

    $("#slider").slider({
      change: function( event, ui ) {
        timeAppendToUrl = timeSlider.value;
        newUrl = initialUrl.replace(initialTime,timeAppendToUrl);
        window.location.href = newUrl;
      }
    });

    $('#timeSlider').empty();
    $.each(timeArray, function(key, value) {
      $('#timeSlider')
        .append($("<option></option>")
        .attr("value", value)
        .text(value));
    });

    $("#timeSlider" ).ready(function() {
     var initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
     for(i = 1; i < arrayOfObjects.length; i++) {
        if ($("#slider").slider("value") === arrayOfObjects[i].timeKey ) {
          $("#timeSlider").val(arrayOfObjects[i].timeValue );
          timeAppendToUrl = timeSlider.value;
        }
      }
    });

    $scope.date = date;
    $scope.time = timeAppendToUrl;

    hideLoader();
  });
});

app.controller('nodes-graph-phaseC', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;
  var time = $routeParams.time;

  $http ({
    url : '/nodes-all/' + date + '/' + time,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    var voltageC611 = response[0].voltageC611;
    var voltageC632 = response[0].voltageC632;
    var voltageC645 = response[0].voltageC645;
    var voltageC646 = response[0].voltageC646;
    var voltageC652 = response[0].voltageC652;
    var voltageC671 = response[0].voltageC671;
    var voltageC675 = response[0].voltageC675;
    var voltageC680 = response[0].voltageC680;
    var voltageC684 = 0;
    var voltageC692 = response[0].voltageC692;
    var voltageC6321 = response[0].voltageC6321;
    var voltageC6711 = response[0].voltageC6711;

    var currentOutC632_645 = response[0].currentOutC632_645;
    var currentOutC632_6321 = response[0].currentOutC632_6321;
    var currentOutC645_646 = response[0].currentOutC645_646;
    var currentOutC6321_671 = response[0].currentOutC6321_671;
    var currentOutC671_680 = response[0].currentOutC671_680;
    var currentOutC671_684 = response[0].currentOutC671_684;

    var nodes = new vis.DataSet([
        {id: 611, label: '611', title: 'C : ' +voltageC611},
        {id: 632, label: '632', title: 'C : ' +voltageC632},
        {id: 645, label: '645', title: 'C : ' +voltageC645},
        {id: 646, label: '646', title: 'C : ' +voltageC646},
        {id: 652, label: '652', title: 'C : ' +voltageC652},
        {id: 671, label: '671', title: 'C : ' +voltageC671},
        {id: 675, label: '675', title: 'C : ' +voltageC675},
        {id: 680, label: '680', title: 'C : ' +voltageC680},
        {id: 684, label: '684', title: 'C : ' +voltageC684},
        {id: 692, label: '692', title: 'C : ' +voltageC692},
        {id: 6321, label: '6321', title: 'C : ' +voltageC6321},
        {id: 6711, label: '6711', title: 'C : ' +voltageC6711}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 611, to: null},
        {from: 632, to: 645, title: 'C : ' +currentOutC632_645, label: '632 -> 645'},
        {from: 632, to: 6321, title: 'C : ' +currentOutC632_6321, label: '632 -> 6321'},
        {from: 645, to: 646, title: 'C : ' +currentOutC645_646, label: '645 -> 646'},
        {from: 6321, to: 671, title: 'C : ' +currentOutC6321_671, label: '6321 -> 671'},
        {from: 671, to: 680, title: 'C : ' +currentOutC671_680, label: '671 -> 680'},
        {from: 671, to: 684, title: 'C : ' +currentOutC671_684, label: '671 -> 684'},
        {from: 671, to: 6711, title: 'C : 0'},
        {from: 671, to: 692, title: 'C : 0'},
        {from: 692, to: 675, title: 'C : 0'},
        {from: 684, to: 652, title: 'C : 0'},
        {from: 684, to: 611, title: 'C : 0'},
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

    var select = $( "#timeSlider" );
    var initialUrl = window.location.href;
    var initialTime;
    var newUrl;
    var arrayOfInputs = initialUrl.split('/');
    var date = arrayOfInputs[7];
    var timeAppendToUrl;
    var timeArray = [];
    var formattedTimeArray = [];
    var formattedMinute;
    var arrayOfObjects = [];
    var timeArrayCopy = [];
    var timeObject = {};

    for(hour = 0; hour < 24; hour++) {
      hour = ('0' + hour).slice(-2);
      for (minute = 0; minute < 60; minute = minute + 15) {
        formattedMinute = minute === 0 ? minute + '0' : minute;
        timeArray.push(hour+ ':' +formattedMinute);
        timeArrayCopy.push(hour+ ':' +formattedMinute);
      }
    }

    for(index = 1; index <= 96; index++ ){
      var shiftedTime = timeArrayCopy.shift();
      timeObject = {
        timeValue : shiftedTime,
        timeKey   : index
      };
      arrayOfObjects.push(timeObject);
    }

    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 96,
      range: "min",
      value: select[ 0 ].selectedIndex +1,
      create: function(event, ui) {
       initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
       for(i = 1; i < arrayOfObjects.length; i++) {
        if (initialTime === arrayOfObjects[i].timeValue ) {
            $(this).slider('value', arrayOfObjects[i].timeKey);
        }
       }
      },
      slide: function(event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      },
    });

    $("#slider")
      .slider("pips", {
        labels: timeArray,
          rest: 'label',
          step: 8,
      })

      .slider("float", {
          labels: timeArray
      });

    $("#timeSlider" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });

    $("#slider").slider({
      change: function( event, ui ) {
        timeAppendToUrl = timeSlider.value;
        newUrl = initialUrl.replace(initialTime,timeAppendToUrl);
        window.location.href = newUrl;
      }
    });

    $('#timeSlider').empty();
    $.each(timeArray, function(key, value) {
      $('#timeSlider')
        .append($("<option></option>")
        .attr("value", value)
        .text(value));
    });

    $("#timeSlider" ).ready(function() {
     var initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
     for(i = 1; i < arrayOfObjects.length; i++) {
        if ($("#slider").slider("value") === arrayOfObjects[i].timeKey ) {
          $("#timeSlider").val(arrayOfObjects[i].timeValue );
          timeAppendToUrl = timeSlider.value;
        }
      }
    });

    $scope.date = date;
    $scope.time = timeAppendToUrl;

    hideLoader();
  });
});

app.controller('nodes-tree' ,function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;
  var time = $routeParams.time;

  $http ({
    url : '/nodes-all/' + date + '/' + time,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    nodesTree(response);

    $scope.nodesTree = function (response) {

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
          {from: 632, to: 645, title: 'A : ' +currentOutA632_645+' '+ 'B : ' +currentOutB632_645+' '+ 'C : ' +currentOutC632_645, label: '632 -> 645'},
          {from: 632, to: 6321, title: 'A : ' +currentOutA632_6321+' '+ 'B : ' +currentOutB632_6321+' '+ 'C : ' +currentOutC632_6321, label: '632 -> 6321'},
          {from: 645, to: 646, title: 'A : ' +currentOutA645_646+' '+ 'B : ' +currentOutB645_646+' '+ 'C : ' +currentOutC645_646, label: '645 -> 646'},
          {from: 6321, to: 671, title: 'A : ' +currentOutA6321_671+' '+ 'B : ' +currentOutB6321_671+' '+ 'C : ' +currentOutC6321_671, label: '6321 -> 671'},
          {from: 671, to: 680, title: 'A : ' +currentOutA671_680+' '+ 'B : ' +currentOutB671_680+' '+ 'C : ' +currentOutC671_680, label: '671 -> 680'},
          {from: 671, to: 684, title: 'A : ' +currentOutA671_684+' '+ 'B : ' +currentOutB671_684+' '+ 'C : ' +currentOutC671_684, label: '671 -> 684'},
          {from: 671, to: 6711, title: 'A : 0 B : 0 C : 0'},
          {from: 671, to: 692, title: 'A : 0 B : 0 C : 0'},
          {from: 692, to: 675, title: 'A : 0 B : 0 C : 0'},
          {from: 684, to: 652, title: 'A : 0 B : 0 C : 0'},
          {from: 684, to: 611, title: 'A : 0 B : 0 C : 0'},
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

    };

    var select = $( "#timeSlider" );
    var initialUrl = window.location.href;
    var initialTime;
    var newUrl;
    var arrayOfInputs = initialUrl.split('/');
    var date = arrayOfInputs[6];
    var timeAppendToUrl;
    var timeArray = [];
    var formattedTimeArray = [];
    var formattedMinute;
    var arrayOfObjects = [];
    var timeArrayCopy = [];
    var timeObject = {};

    for(hour = 0; hour < 24; hour++) {
      hour = ('0' + hour).slice(-2);
      for (minute = 0; minute < 60; minute = minute + 15) {
        formattedMinute = minute === 0 ? minute + '0' : minute;
        timeArray.push(hour+ ':' +formattedMinute);
        timeArrayCopy.push(hour+ ':' +formattedMinute);
      }
    }

    for(index = 1; index <= 96; index++ ){
      var shiftedTime = timeArrayCopy.shift();
      timeObject = {
        timeValue : shiftedTime,
        timeKey   : index
      };
      arrayOfObjects.push(timeObject);
    }

    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 96,
      range: "min",
      value: select[ 0 ].selectedIndex +1,
      create: function(event, ui) {
       initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
       for(i = 1; i < arrayOfObjects.length; i++) {
        if (initialTime === arrayOfObjects[i].timeValue ) {
            $(this).slider('value', arrayOfObjects[i].timeKey);
        }
       }
      },
      slide: function(event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      },
    });

    $("#slider")
      .slider("pips", {
        labels: timeArray,
          rest: 'label',
          step: 8,
      })

      .slider("float", {
          labels: timeArray
      });

    $("#timeSlider" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });

    $("#slider").slider({
      change: function( event, ui ) {
        timeAppendToUrl = timeSlider.value;
        newUrl = initialUrl.replace(initialTime,timeAppendToUrl);
        window.location.href = newUrl;
      }
    });

    $('#timeSlider').empty();
    $.each(timeArray, function(key, value) {
      $('#timeSlider')
        .append($("<option></option>")
        .attr("value", value)
        .text(value));
    });

    $("#timeSlider" ).ready(function() {
     var initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
     for(i = 1; i < arrayOfObjects.length; i++) {
        if ($("#slider").slider("value") === arrayOfObjects[i].timeKey ) {
          $("#timeSlider").val(arrayOfObjects[i].timeValue );
          timeAppendToUrl = timeSlider.value;
        }
      }
    });

    $scope.date = date;
    $scope.time = timeAppendToUrl;

    hideLoader();
  });
});

app.controller('nodes-tree-phaseA', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;
  var time = $routeParams.time;

  $http ({
    url : '/nodes-all/' + date + '/' + time,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    nodesTreePhaseA(response);

    $scope.nodesTreePhaseA = function (response) {
      var voltageA611 = response[0].voltageRealA611;
      var voltageA632 = response[0].voltageRealA632;
      var voltageA645 = response[0].voltageRealA645;
      var voltageA646 = response[0].voltageRealA646;
      var voltageA652 = response[0].voltageRealA652;
      var voltageA671 = response[0].voltageRealA671;
      var voltageA675 = response[0].voltageRealA675;
      var voltageA680 = response[0].voltageRealA680;
      var voltageA684 = 0;
      var voltageA692 = response[0].voltageRealA692;
      var voltageA6321 = response[0].voltageRealA6321;
      var voltageA6711 = response[0].voltageRealA6711;

      var currentOutA632_645 = response[0].currentA632_645;
      var currentOutA632_6321 = response[0].currentA632_6321;
      var currentOutA645_646 = response[0].currentA645_646;
      var currentOutA6321_671 = response[0].currentA6321_671;
      var currentOutA671_680 = response[0].currentA671_680;
      var currentOutA671_684 = response[0].currentA671_684;

      var nodes = new vis.DataSet([
          {id: 611, label: '611', title: 'A : ' +voltageA611, value: voltageA611},
          {id: 632, label: '632', title: 'A : ' +voltageA632, value: voltageA632},
          {id: 645, label: '645', title: 'A : ' +voltageA645, value: voltageA645},
          {id: 646, label: '646', title: 'A : ' +voltageA646, value: voltageA646},
          {id: 652, label: '652', title: 'A : ' +voltageA652, value: voltageA652},
          {id: 671, label: '671', title: 'A : ' +voltageA671, value: voltageA671},
          {id: 675, label: '675', title: 'A : ' +voltageA675, value: voltageA675},
          {id: 680, label: '680', title: 'A : ' +voltageA680, value: voltageA680},
          {id: 684, label: '684', title: 'A : ' +voltageA684, value: voltageA684},
          {id: 692, label: '692', title: 'A : ' +voltageA692, value: voltageA692},
          {id: 6321, label: '6321', title: 'A : ' +voltageA6321, value: voltageA6321},
          {id: 6711, label: '6711', title: 'A : ' +voltageA6711, value: voltageA6711}
      ]);

      // create an array with edges
      var edges = new vis.DataSet([
          {from: 632, to: 645, title: 'A : ' +currentOutA632_645, value: currentOutA632_645},
          {from: 632, to: 6321, title: 'A : ' +currentOutA632_6321, value: currentOutA632_6321},
          {from: 645, to: 646, title: 'A : ' +currentOutA645_646, value: currentOutA645_646},
          {from: 6321, to: 671, title: 'A : ' +currentOutA6321_671, value: currentOutA6321_671},
          {from: 671, to: 680, title: 'A : ' +currentOutA671_680, value: currentOutA671_680},
          {from: 671, to: 684, title: 'A : ' +currentOutA671_684, value: currentOutA671_684},
          {from: 671, to: 6711, title: 'A : 0 '},
          {from: 671, to: 692, title: 'A : 0 ' },
          {from: 692, to: 675, title: 'A : 0 '},
          {from: 684, to: 652, title: 'A : 0 ' },
          {from: 684, to: 611, title: 'A : 0 '},
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
          // arrows: {
          //   to: {enabled: true, scaleFactor:1},
          // },
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
    };

    var select = $( "#timeSlider" );
    var initialUrl = window.location.href;
    var initialTime;
    var newUrl;
    var arrayOfInputs = initialUrl.split('/');
    var date = arrayOfInputs[7];
    var timeAppendToUrl;
    var timeArray = [];
    var formattedTimeArray = [];
    var formattedMinute;
    var arrayOfObjects = [];
    var timeArrayCopy = [];
    var timeObject = {};

    for(hour = 0; hour < 24; hour++) {
      hour = ('0' + hour).slice(-2);
      for (minute = 0; minute < 60; minute = minute + 15) {
        formattedMinute = minute === 0 ? minute + '0' : minute;
        timeArray.push(hour+ ':' +formattedMinute);
        timeArrayCopy.push(hour+ ':' +formattedMinute);
      }
    }

    for(index = 1; index <= 96; index++ ){
      var shiftedTime = timeArrayCopy.shift();
      timeObject = {
        timeValue : shiftedTime,
        timeKey   : index
      };
      arrayOfObjects.push(timeObject);
    }

    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 96,
      range: "min",
      value: select[ 0 ].selectedIndex +1,
      create: function(event, ui) {
       initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
       for(i = 1; i < arrayOfObjects.length; i++) {
        if (initialTime === arrayOfObjects[i].timeValue ) {
            $(this).slider('value', arrayOfObjects[i].timeKey);
        }
       }
      },
      slide: function(event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      },
    });

    $("#slider")
      .slider("pips", {
        labels: timeArray,
          rest: 'label',
          step: 8,
      })

      .slider("float", {
          labels: timeArray
      });

    $("#timeSlider" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });

    $("#slider").slider({
      change: function( event, ui ) {
        timeAppendToUrl = timeSlider.value;
        newUrl = initialUrl.replace(initialTime,timeAppendToUrl);
        window.location.href = newUrl;
        // console.log('timeisCHANGE ' +timeAppendToUrl);
        // console.log('initialurl ' +initialUrl);
        // console.log('initialtime ' +initialTime);
        // console.log('urlAgain! ' +newUrl);
      }
    });

    $('#timeSlider').empty();
    $.each(timeArray, function(key, value) {
      $('#timeSlider')
        .append($("<option></option>")
        .attr("value", value)
        .text(value));
    });

    $("#timeSlider" ).ready(function() {
     var initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
     for(i = 1; i < arrayOfObjects.length; i++) {
        if ($("#slider").slider("value") === arrayOfObjects[i].timeKey ) {
          $("#timeSlider").val(arrayOfObjects[i].timeValue );
          timeAppendToUrl = timeSlider.value;
        }
      }
    });

    $scope.date = date;
    $scope.time = timeAppendToUrl;

    hideLoader();
  });
});


app.controller('nodes-tree-phaseB', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;
  var time = $routeParams.time;

  $http ({
    url : '/nodes-all/' + date + '/' + time,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    nodesTreePhaseB(response);

    $scope.nodesTreePhaseB = function(response) {
      var voltageB611 = response[0].voltageRealB611;
      var voltageB632 = response[0].voltageRealB632;
      var voltageB645 = response[0].voltageRealB645;
      var voltageB646 = response[0].voltageRealB646;
      var voltageB652 = response[0].voltageRealB652;
      var voltageB671 = response[0].voltageRealB671;
      var voltageB675 = response[0].voltageRealB675;
      var voltageB680 = response[0].voltageRealB680;
      var voltageB684 = 0;
      var voltageB692 = response[0].voltageRealB692;
      var voltageB6321 = response[0].voltageRealB6321;
      var voltageB6711 = response[0].voltageRealB6711;

      var currentOutB632_645 = response[0].currentB632_645;
      var currentOutB632_6321 = response[0].currentB632_6321;
      var currentOutB645_646 = response[0].currentB645_646;
      var currentOutB6321_671 = response[0].currentB6321_671;
      var currentOutB671_680 = response[0].currentB671_680;
      var currentOutB671_684 = response[0].currentB671_684;

      var nodes = new vis.DataSet([
          {id: 611, label: '611', title: 'B : ' +voltageB611, value: voltageB611},
          {id: 632, label: '632', title: 'B : ' +voltageB632, value: voltageB632},
          {id: 645, label: '645', title: 'B : ' +voltageB645, value: voltageB645},
          {id: 646, label: '646', title: 'B : ' +voltageB646, value: voltageB646},
          {id: 652, label: '652', title: 'B : ' +voltageB652, value: voltageB652},
          {id: 671, label: '671', title: 'B : ' +voltageB671, value: voltageB671},
          {id: 675, label: '675', title: 'B : ' +voltageB675, value: voltageB675},
          {id: 680, label: '680', title: 'B : ' +voltageB680, value: voltageB680},
          {id: 684, label: '684', title: 'B : ' +voltageB684, value: voltageB684},
          {id: 692, label: '692', title: 'B : ' +voltageB692, value: voltageB692},
          {id: 6321, label: '6321', title: 'B : ' +voltageB6321, value: voltageB6321},
          {id: 6711, label: '6711', title: 'B : ' +voltageB6711, value: voltageB6711}
      ]);

      // create an array with edges
      var edges = new vis.DataSet([
          {from: 632, to: 645, title: 'B : ' +currentOutB632_645, value: currentOutB632_645},
          {from: 632, to: 6321, title: 'B : ' +currentOutB632_6321, value: currentOutB632_6321},
          {from: 645, to: 646, title: 'B : ' +currentOutB645_646, value: currentOutB645_646},
          {from: 6321, to: 671, title: 'B : ' +currentOutB6321_671, value: currentOutB6321_671},
          {from: 671, to: 680, title: 'B : ' +currentOutB671_680, value: currentOutB671_680},
          {from: 671, to: 684, title: 'B : ' +currentOutB671_684, value: currentOutB671_684},
          {from: 671, to: 6711, title: 'B : 0 '},
          {from: 671, to: 692, title: 'B : 0 ' },
          {from: 692, to: 675, title: 'B : 0 '},
          {from: 684, to: 652, title: 'B : 0 ' },
          {from: 684, to: 611, title: 'B : 0 '},

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
          // arrows: {
          //   to: {enabled: true, scaleFactor:1},
          // },
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

    };

    var select = $( "#timeSlider" );
    var initialUrl = window.location.href;
    var initialTime;
    var newUrl;
    var arrayOfInputs = initialUrl.split('/');
    var date = arrayOfInputs[7];
    var timeAppendToUrl;
    var timeArray = [];
    var formattedTimeArray = [];
    var formattedMinute;
    var arrayOfObjects = [];
    var timeArrayCopy = [];
    var timeObject = {};

    for(hour = 0; hour < 24; hour++) {
      hour = ('0' + hour).slice(-2);
      for (minute = 0; minute < 60; minute = minute + 15) {
        formattedMinute = minute === 0 ? minute + '0' : minute;
        timeArray.push(hour+ ':' +formattedMinute);
        timeArrayCopy.push(hour+ ':' +formattedMinute);
      }
    }

    for(index = 1; index <= 96; index++ ){
      var shiftedTime = timeArrayCopy.shift();
      timeObject = {
        timeValue : shiftedTime,
        timeKey   : index
      };
      arrayOfObjects.push(timeObject);
    }

    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 96,
      range: "min",
      value: select[ 0 ].selectedIndex +1,
      create: function(event, ui) {
       initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
       for(i = 1; i < arrayOfObjects.length; i++) {
        if (initialTime === arrayOfObjects[i].timeValue ) {
            $(this).slider('value', arrayOfObjects[i].timeKey);
        }
       }
      },
      slide: function(event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      },
    });

    $("#slider")
      .slider("pips", {
        labels: timeArray,
          rest: 'label',
          step: 8,
      })

      .slider("float", {
          labels: timeArray
      });

    $("#timeSlider" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });

    $("#slider").slider({
      change: function( event, ui ) {
        timeAppendToUrl = timeSlider.value;
        newUrl = initialUrl.replace(initialTime,timeAppendToUrl);
        window.location.href = newUrl;
      }
    });

    $('#timeSlider').empty();
    $.each(timeArray, function(key, value) {
      $('#timeSlider')
        .append($("<option></option>")
        .attr("value", value)
        .text(value));
    });

    $("#timeSlider" ).ready(function() {
     var initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
     for(i = 1; i < arrayOfObjects.length; i++) {
        if ($("#slider").slider("value") === arrayOfObjects[i].timeKey ) {
          $("#timeSlider").val(arrayOfObjects[i].timeValue );
          timeAppendToUrl = timeSlider.value;
        }
      }
    });

    $scope.date = date;
    $scope.time = timeAppendToUrl;

    hideLoader();
  });
});


app.controller('nodes-tree-phaseC', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;
  var time = $routeParams.time;

  $http ({
    url : '/nodes-all/' + date + '/' + time,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    nodesTreePhaseC(response);

    $scope.nodesTreePhaseC = function(response){
      var voltageC611 = response[0].voltageRealC611;
      var voltageC632 = response[0].voltageRealC632;
      var voltageC645 = response[0].voltageRealC645;
      var voltageC646 = response[0].voltageRealC646;
      var voltageC652 = response[0].voltageRealC652;
      var voltageC671 = response[0].voltageRealC671;
      var voltageC675 = response[0].voltageRealC675;
      var voltageC680 = response[0].voltageRealC680;
      var voltageC684 = 0;
      var voltageC692 = response[0].voltageRealC692;
      var voltageC6321 = response[0].voltageRealC6321;
      var voltageC6711 = response[0].voltageRealC6711;

      var currentOutC632_645 = response[0].currentC632_645;
      var currentOutC632_6321 = response[0].currentC632_6321;
      var currentOutC645_646 = response[0].currentC645_646;
      var currentOutC6321_671 = response[0].currentC6321_671;
      var currentOutC671_680 = response[0].currentC671_680;
      var currentOutC671_684 = response[0].currentC671_684;

      var nodes = new vis.DataSet([
          {id: 611, label: '611', title: 'C : ' +voltageC611, value: voltageC611},
          {id: 632, label: '632', title: 'C : ' +voltageC632, value: voltageC632},
          {id: 645, label: '645', title: 'C : ' +voltageC645, value: voltageC645},
          {id: 646, label: '646', title: 'C : ' +voltageC646, value: voltageC646},
          {id: 652, label: '652', title: 'C : ' +voltageC652, value: voltageC652},
          {id: 671, label: '671', title: 'C : ' +voltageC671, value: voltageC671},
          {id: 675, label: '675', title: 'C : ' +voltageC675, value: voltageC675},
          {id: 680, label: '680', title: 'C : ' +voltageC680, value: voltageC680},
          {id: 684, label: '684', title: 'C : ' +voltageC684, value: voltageC684},
          {id: 692, label: '692', title: 'C : ' +voltageC692, value: voltageC692},
          {id: 6321, label: '6321', title: 'C : ' +voltageC6321, value: voltageC6321},
          {id: 6711, label: '6711', title: 'C : ' +voltageC6711, value: voltageC6711}
      ]);

      // create an array with edges
      var edges = new vis.DataSet([
          {from: 632, to: 645, title: 'C : ' +currentOutC632_645, value: currentOutC632_645},
          {from: 632, to: 6321, title: 'C : ' +currentOutC632_6321, value: currentOutC632_6321},
          {from: 645, to: 646, title: 'C : ' +currentOutC645_646, value: currentOutC645_646},
          {from: 6321, to: 671, title: 'C : ' +currentOutC6321_671, value: currentOutC6321_671},
          {from: 671, to: 680, title: 'C : ' +currentOutC671_680, value: currentOutC671_680},
          {from: 671, to: 684, title: 'C : ' +currentOutC671_684, value: currentOutC671_684},
          {from: 671, to: 6711, title: 'C : 0 '},
          {from: 671, to: 692, title: 'C : 0 ' },
          {from: 692, to: 675, title: 'C : 0 '},
          {from: 684, to: 652, title: 'C : 0 ' },
          {from: 684, to: 611, title: 'C : 0 '},

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
          // arrows: {
          //   to: {enabled: true, scaleFactor:1},
          // },
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
    };

    var select = $( "#timeSlider" );
    var initialUrl = window.location.href;
    var initialTime;
    var newUrl;
    var arrayOfInputs = initialUrl.split('/');
    var date = arrayOfInputs[7];
    var timeAppendToUrl;
    var timeArray = [];
    var formattedTimeArray = [];
    var formattedMinute;
    var arrayOfObjects = [];
    var timeArrayCopy = [];
    var timeObject = {};

    for(hour = 0; hour < 24; hour++) {
      hour = ('0' + hour).slice(-2);
      for (minute = 0; minute < 60; minute = minute + 15) {
        formattedMinute = minute === 0 ? minute + '0' : minute;
        timeArray.push(hour+ ':' +formattedMinute);
        timeArrayCopy.push(hour+ ':' +formattedMinute);
      }
    }

    for(index = 1; index <= 96; index++ ){
      var shiftedTime = timeArrayCopy.shift();
      timeObject = {
        timeValue : shiftedTime,
        timeKey   : index
      };
      arrayOfObjects.push(timeObject);
    }

    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 96,
      range: "min",
      value: select[ 0 ].selectedIndex +1,
      create: function(event, ui) {
       initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
       for(i = 1; i < arrayOfObjects.length; i++) {
        if (initialTime === arrayOfObjects[i].timeValue ) {
            $(this).slider('value', arrayOfObjects[i].timeKey);
        }
       }
      },
      slide: function(event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      },
    });

    $("#slider")
      .slider("pips", {
        labels: timeArray,
          rest: 'label',
          step: 8,
      })

      .slider("float", {
          labels: timeArray
      });

    $("#timeSlider" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });

    $("#slider").slider({
      change: function( event, ui ) {
        timeAppendToUrl = timeSlider.value;
        newUrl = initialUrl.replace(initialTime,timeAppendToUrl);
        window.location.href = newUrl;
      }
    });

    $('#timeSlider').empty();
    $.each(timeArray, function(key, value) {
      $('#timeSlider')
        .append($("<option></option>")
        .attr("value", value)
        .text(value));
    });

    $("#timeSlider" ).ready(function() {
     var initialTime = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
     for(i = 1; i < arrayOfObjects.length; i++) {
        if ($("#slider").slider("value") === arrayOfObjects[i].timeKey ) {
          $("#timeSlider").val(arrayOfObjects[i].timeValue );
          timeAppendToUrl = timeSlider.value;
        }
      }
    });

    $scope.date = date;
    $scope.time = timeAppendToUrl;

    hideLoader();
  });
});

app.controller('transformer-graphical-representation', function($scope, $http, $route, $routeParams) {

  showLoader();

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

    hideLoader();
  });
});


app.controller('system-graph', function($scope, $http) {

  showLoader();

  $http ({
    url : '/house-system-graph/',
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    var nodes = [];
    var edges = [];
    var foundNodeIds = [];
    var foundHouseIds = [];

    var houseId, nodeId, house, node, edge;
    for (index = 0; index < response.length; index++) {
      houseId = response[index].houseID;
      nodeId = response[index].nodeID;

      if (foundHouseIds.indexOf(houseId) === -1) {
        house = {
          id: houseId,
          group: nodeId,
          label: houseId
        };
        nodes.push(house);
        foundHouseIds.push(houseId);
      }

      if (foundNodeIds.indexOf(nodeId) === -1) {
        node = {
          id: nodeId,
          group: nodeId,
          label: nodeId
        };
        nodes.push(node);
        foundNodeIds.push(nodeId);
      }

      edge = {
        from: houseId,
        to: nodeId
      };
      edges.push(edge);
    }

    // Fyteytos komvos + akmes tou
    nodes.push({
      id: 632,
      label: 632,
      group: 632
    });

    var fyteytaEdges = [
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

    edges = edges.concat(fyteytaEdges);
    console.log(edges);

    // // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
      physics : {
        stabilization : {
          iterations : 200,
          updateInterval: 10,
          onlyDynamicEdges: false,
          fit: true
        }
      }
    };

    // create a network
    var container = document.getElementById('systemNetwork');

    // initialize your network!
    var network = new vis.Network(container, data, options);

    network.on("afterDrawing", function(ctx) {
      hideLoader();
      network.off("afterDrawing");
    });
  });
});

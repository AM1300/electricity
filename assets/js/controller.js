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

        .when('/houses/line-chart/:date/:houseID', {
            templateUrl : '/templates/houseLineChart.html',
            controller  : 'house-line-chart'
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
            // controller  : 'triplex-meter-multiple-axes-chart'
        })

         .when('/houses-select', {
            templateUrl : '/templates/housesSelect.html',
            controller  : 'date-picker-controller'
        })

        .when('/market-pool-select', {
            templateUrl : '/templates/marketPoolSelect.html',
            // controller  : 'triplex-meter-multiple-axes-chart'
        })

        .when('/nodes-select', {
            templateUrl : '/templates/nodesSelect.html',
            // controller  : 'triplex-meter-multiple-axes-chart'
        })

        .when('/transformer-select', {
            templateUrl : '/templates/transformerSelect.html',
            // controller  : 'triplex-meter-multiple-axes-chart'
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
  var houseID = $routeParams.houseID;

  $http ({
    url : '/houses/' + date + '/' + houseID,
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
    // console.log(JSON.stringify(datasetIndicatorsList));
    // console.log(JSON.stringify(timestampsList));

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

  $scope.initialDate = 'August 2000';

  // var datefilter = $filter('Aug 1, 2000');
  // var initialDate = datefilter($scope.dt, 'yyyy/MM/dd');

  // var today = new Date();
  // today.setDate(initailDate.getDate());
  // var lastDay = new Date();
  // lastDay.setDate(today.getDate() + 7);
  // $scope.events =
  //   [
  //     {
  //       date: today,
  //       status: 'full'
  //     },
  //     {
  //       date: lastDay,
  //       status: 'partially'
  //     }
  //   ];


  vm.valuationDatePickerOpen = function ($event) {

      if ($event) {
          $event.preventDefault();
          $event.stopPropagation(); // This is the magic
      }
      this.valuationDatePickerIsOpen = true;
  };
}]);

// app.directive('datepickerPopup', function (dateFilter, datepickerPopupConfig) {
//   return {
//       restrict: 'A',
//       priority: 1,
//       require: 'ngModel',
//       link: function(scope, element, attr, ngModel) {
//           var dateFormat = attr.datepickerPopup || datepickerPopupConfig.datepickerPopup;
//           ngModel.$formatters.push(function (value) {
//               return dateFilter(value, dateFormat);
//           });
//       }
//   };
// });

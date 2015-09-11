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

        .when('/houses/multiple-line-chart/:date/:nodeID/:houseID/:phase', {
            templateUrl : '/templates/housesMultipleLineChart.html',
            controller  : 'houses-multiple-charts'
        })

        .when('/houses/spider-chart/:date/:nodeID/:houseID/:phase', {
            templateUrl : '/templates/housesSpiderChart.html',
            controller  : 'houses-spider-chart'
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



app.controller('nodes-graph', function($scope, $http, $route, $routeParams) {

  showLoader();

  var date = $routeParams.date;
  var time = $routeParams.time;

  $http ({
    url : '/nodes-all/' + date + '/' + time,
    method : 'GET'
  })

  .success(function(response, status, headers, config) {

    var timeAppendToUrl;

    nodesGraph(response);
    timeAppendToUrl = nodesAllPhasesSlider();

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

    var timeAppendToUrl;

    nodesGraphPhaseA(response);
    timeAppendToUrl = nodesSliderPerPhase();

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

    var timeAppendToUrl;

    nodesGraphPhaseB(response);
    timeAppendToUrl = nodesSliderPerPhase();

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

    var timeAppendToUrl;

    nodesGraphPhaseC(response);
    timeAppendToUrl = nodesSliderPerPhase();

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

    var timeAppendToUrl;

    nodesTree(response);
    timeAppendToUrl = nodesAllPhasesSlider();

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

    var timeAppendToUrl;

    nodesTreePhaseA(response);
    timeAppendToUrl = nodesSliderPerPhase();

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

    var timeAppendToUrl;

    nodesTreePhaseB(response);
    timeAppendToUrl = nodesSliderPerPhase();

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

    var timeAppendToUrl;

    nodesTreePhaseC(response);
    timeAppendToUrl = nodesSliderPerPhase();

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

    transformerGraphicalRepresentation(response);

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

    systemGraph(response);

    hideLoader();
  });
});

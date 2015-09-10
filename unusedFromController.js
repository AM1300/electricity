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


        .when('/transformer/line-chart/:date', {
            templateUrl : '/templates/transformerLineChart.html',
            controller  : 'transformer-line-chart'
        })

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

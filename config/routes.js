var path = require('path');
var marketPoolDailyRecords = require(path.join(__dirname, '../api/controllers', 'marketPool'));
var deviceDailyRecords = require(path.join(__dirname, '../api/controllers', 'devicesPerTypeAndNodeID'));
var energySourcesDailyRecordsPerType = require(path.join(__dirname, '../api/controllers', 'energySourcesPerType'));
var triplexMeterDailyRecords = require(path.join(__dirname, '../api/controllers', 'triplexMeter'));
var houseDailyRecords = require(path.join(__dirname, '../api/controllers', 'housesPerHouseID'));
var transformerDailyRecords = require(path.join(__dirname, '../api/controllers', 'transformer'));
var deviceAllRecords = require(path.join(__dirname, '../api/controllers', 'devicesForAllDays'));
var triplexMeterPerDate = require(path.join(__dirname, '../api/controllers', 'triplexMeterPerDate'));
var houseRecordsPerPhase = require(path.join(__dirname, '../api/controllers', 'housesPerPhaseToFindHouseID'));
var houseRecordsPerNode = require(path.join(__dirname, '../api/controllers', 'housesPerNodeToFindPhase'));
var nodeRecords = require(path.join(__dirname, '../api/controllers', 'nodesAll'));

module.exports.routes = {

  'get /': function(req, res, next) {
    res.sendfile(sails.config.appPath + '/assets/index.html');
  },

  'get /market/:date' : function(req, res, next) {
    marketPoolDailyRecords.getDailyRecords(req, res, next);
  },

  'get /devices/:date/:type/:nodeID/:houseID' : function(req, res, next) {
    deviceDailyRecords.getDeviceRecordsForTypeAndNodeID(req, res, next);
  },

  'get /devices/:type/:nodeID/:houseID' : function(req, res, next) {
    deviceAllRecords.getAllDeviceRecords(req, res, next);
  },

  'get /energy-sources/:date/:type/:nodeID' : function(req, res, next) {
    energySourcesDailyRecordsPerType.getEnergySourcesRecordsPerType(req, res, next);
  },

  'get /triplex-meter/:date/:nodeID' : function(req, res, next) {
    triplexMeterDailyRecords.getTriplexMeterRecords(req, res, next);
  },

  'get /houses/:date/:nodeID/:houseID/:phase' : function(req, res, next) {
    houseDailyRecords.getHousePerHouseIDRecords(req, res, next);
  },

  'get /transformer/:date' : function(req, res, next) {
    transformerDailyRecords.getTransformerRecords(req, res, next);
  },

  'get /triplex-meter/:date' : function(req, res, next) {
    triplexMeterPerDate.getTriplexMeterRecordsPerDate(req, res, next);
  },

  'get /house-end-point/:nodeID/:phase' : function(req, res, next) {
    houseRecordsPerPhase.getHousePerPhaseRecords(req, res, next);
  },

  'get /house-end-point/:nodeID' : function(req, res, next) {
    houseRecordsPerNode.getHousePerNodeRecords(req, res, next);
  },

  'get /nodes-all' : function(req, res, next) {
    nodeRecords.getFromNodeToNodeRecords(req, res, next);
  },

};

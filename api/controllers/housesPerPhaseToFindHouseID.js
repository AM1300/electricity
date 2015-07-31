var moment = require('moment');

module.exports = {
  getHousePerPhaseRecords: function(req, res, next) {
    var nodeID = req.param('nodeID');
    var phase = req.param('phase');

    mySqlConnection.query('SELECT houses.houseID FROM houses WHERE timestamp="2000-08-01 00:00:00" && nodeID= "'+nodeID+'" && phase= "'+phase+'" ',
      function(err, rows, fields) {
      if (err){
        throw err;
      }
      else {
        var modifiedRows = rows.map(function(row){
          return row;
        });
        res.json(modifiedRows);
      }
    });
  }
};

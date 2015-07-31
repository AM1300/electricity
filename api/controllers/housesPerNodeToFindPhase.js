var moment = require('moment');

module.exports = {
  getHousePerNodeRecords: function(req, res, next) {
    var nodeID = req.param('nodeID');

    mySqlConnection.query('SELECT houses.phase FROM houses WHERE timestamp="2000-08-01 00:00:00" && nodeID= "'+nodeID+'" ',
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

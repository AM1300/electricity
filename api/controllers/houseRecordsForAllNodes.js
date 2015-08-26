var moment = require('moment');

module.exports = {
  getHouseForAllNodesRecords: function(req, res, next) {

    mySqlConnection.query('SELECT nodeID, houseID, devID FROM houses WHERE timestamp = "2000-08-01 00:00:00"' ,
      function(err, rows, fields) {
      if (err){
        throw err;
      }
      else {
        var modifiedRows = rows.map(function(row){
          row.node = rows.nodeID;
          row.house = rows.houseID;
          row.device = rows.devID;
          row.Timestamp = moment(row.Timestamp).format('DD/ MM/ YYYY HH:mm:ss');
          return row;
        });
        res.json(modifiedRows);
      }
    });
  }
};

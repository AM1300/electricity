var moment = require('moment');

module.exports = {
  getAllDeviceRecords: function(req, res, next) {
    var type = req.param('type');
    var nodeID = req.param('nodeID');
    var houseID = req.param('houseID');

    mySqlConnection.query('SELECT * FROM devices WHERE type= "'+type+'" && nodeID= "'+nodeID+'" && houseID= "'+houseID+'" ' ,
      function(err, rows, fields) {
      if (err){
        throw err;
      }
      else {
        var modifiedRows = rows.map(function(row){
          row.Timestamp = moment(row.Timestamp).format('DD/ MM/ YYYY HH:mm:ss');
          return row;
        });
        res.json(modifiedRows);
      }
    });
  }
};

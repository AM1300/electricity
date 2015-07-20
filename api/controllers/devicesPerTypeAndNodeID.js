var moment = require('moment');

module.exports = {
  getDeviceRecordsForTypeAndNodeID: function(req, res, next) {
    var date = req.param('date');
    var type = req.param('type');
    var nodeID = req.param('nodeID');
    var houseID = req.param('houseID');

    var parsedDate = moment(date, "DD-MM-YYYY");
    var formattedDate = parsedDate.format("YYYY-MM-DD HH:mm:ss");
    var formattedDateNext = parsedDate.add(1, 'days').format("YYYY-MM-DD HH:mm:ss");

    mySqlConnection.query('SELECT * FROM devices WHERE timestamp >= "'+formattedDate+'" && timestamp < "'+formattedDateNext+'" && type= "'+type+'" && nodeID= "'+nodeID+'" && houseID= "'+houseID+'" ' ,
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

var moment = require('moment');

module.exports = {
  getTransformerRecords: function(req, res, next) {
    var date = req.param('date');

    var parsedDate = moment(date, "DD-MM-YYYY");
    var formattedDate = parsedDate.format("YYYY-MM-DD HH:mm:ss");
    var formattedDateNext = parsedDate.add(1, 'days').format("YYYY-MM-DD HH:mm:ss");

    mySqlConnection.query('SELECT * FROM transformer WHERE timestamp >= "'+formattedDate+'" && timestamp < "'+formattedDateNext+'" ',
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

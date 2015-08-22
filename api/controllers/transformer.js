var moment = require('moment');

module.exports = {
  getTransformerRecords: function(req, res, next) {
    var date = req.param('date');
    var time = req.param('time');

    var parsedDate = moment(date, "DD-MM-YYYY");
    var parsedTime = moment(time, "HH:mm");
    var formattedDate = parsedDate.format("YYYY-MM-DD").format("HH:mm:ss");
    // var formattedDateNext = parsedDate.add(1, 'days').format("YYYY-MM-DD HH:mm:ss");

    // mySqlConnection.query('SELECT * FROM transformer WHERE timestamp >= "'+formattedDate+'" && timestamp < "'+formattedDateNext+'" ',
    mySqlConnection.query('SELECT * FROM transformer WHERE timestamp = "'+formattedDate+'" ',
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

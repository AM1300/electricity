var moment = require('moment');

module.exports = {
  getTransformerRecords: function(req, res, next) {
    var date = req.param('date');
    var time = req.param('time');

    var hours =  parseInt(time.split(':')[0]);
    var mins  =  parseInt(time.split(':')[1]);


    var parsedDate = moment(date, "DD-MM-YYYY");
    parsedDate.add(hours, 'hours');
    parsedDate.add(mins, 'minutes');
    var formattedDate = parsedDate.format("YYYY-MM-DD HH:mm:ss");
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

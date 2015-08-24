var moment = require('moment');
var math = require('mathjs');

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

    mySqlConnection.query('SELECT * FROM transformer WHERE timestamp = "'+formattedDate+'" ',
      function(err, rows, fields) {
          if (err){
            throw err;
          }
          else {
            var modifiedRows = rows.map(function(row){
              // sails.log(rows[0].power_in_A_real);
              // row.phaseAIn = math.complex(1, 2).toString();
              row.phaseAIn = math.complex(rows[0].power_in_A_real, rows[0].power_in_A_imag).toString();
              row.phaseAOut = math.complex(rows[0].power_out_A_real, rows[0].power_out_A_imag).toString();
              row.phaseALosses = math.complex(rows[0].power_losses_A_real, rows[0].power_losses_A_imag).toString();
              row.phaseBIn = math.complex(rows[0].power_in_B_real, rows[0].power_in_B_imag).toString();
              row.phaseBOut = math.complex(rows[0].power_out_B_real, rows[0].power_out_B_imag).toString();
              row.phaseCIn = math.complex(rows[0].power_in_C_real, rows[0].power_in_C_imag).toString();
              row.phaseCOut = math.complex(rows[0].power_out_C_real, rows[0].power_out_C_imag).toString();
              return row;
            });
            res.json(modifiedRows);
          }
      });
  }
};

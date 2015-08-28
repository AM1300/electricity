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
              // sails.log(AInReal);
              // row.phaseAIn = math.complex(rows[0].power_in_A_real, rows[0].power_in_A_imag).toString();
              // var test = row.phaseAIn;
              // row.phaseAOut = math.complex(rows[0].power_out_A_real, rows[0].power_out_A_imag).toString();
              // row.phaseALosses = math.complex(rows[0].power_losses_A_real, rows[0].power_losses_A_imag).toString();
              // row.phaseBIn = math.complex(rows[0].power_in_B_real, rows[0].power_in_B_imag).toString();
              // row.phaseBOut = math.complex(rows[0].power_out_B_real, rows[0].power_out_B_imag).toString();
              // row.phaseCIn = math.complex(rows[0].power_in_C_real, rows[0].power_in_C_imag).toString();
              // row.phaseCOut = math.complex(rows[0].power_out_C_real, rows[0].power_out_C_imag).toString();
              var AInReal = rows[0].power_in_A_real;
                  AInReal =  ((AInReal/100000).toFixed(2)) + 'e5';
              var AInImag = rows[0].power_in_A_imag;
                  AInImag =  ((AInImag/100000).toFixed(2)) + 'e5';
              row.phaseAIn = AInReal + ' ' +AInImag + ' j';

              var AOutReal = rows[0].power_out_A_real;
                  AOutReal =  ((AOutReal/100000).toFixed(2)) + 'e5';
              var AOutImag = rows[0].power_out_A_imag;
                  AOutImag =  ((AOutImag/100000).toFixed(2)) + 'e5';
              row.phaseAOut = AOutReal + ' ' +AOutImag + ' j';

              var ALossesReal = rows[0].power_losses_A_real;
                  ALossesReal =  ((ALossesReal/1000).toFixed(2)) + 'e3';
              var ALossesImag = rows[0].power_losses_A_imag;
                  ALossesImag =  ((ALossesImag/1000).toFixed(2)) + 'e3';
              row.phaseALosses = ALossesReal + ' ' +ALossesImag + ' j';

              var BInReal = rows[0].power_in_B_real;
                  BInReal =  ((BInReal/100000).toFixed(2)) + 'e5';
              var BInImag = rows[0].power_in_B_imag;
                  BInImag =  ((BInImag/100000).toFixed(2)) + 'e5';
              row.phaseBIn = BInReal + ' ' +BInImag + ' j';

              var BOutReal = rows[0].power_out_B_real;
                  BOutReal =  ((BOutReal/100000).toFixed(2)) + 'e5';
              var BOutImag = rows[0].power_out_B_imag;
                  BOutImag =  ((BOutImag/100000).toFixed(2)) + 'e5';
              row.phaseBOut = BOutReal + ' ' +BOutImag + ' j';

              var CInReal = rows[0].power_in_C_real;
                  CInReal =  ((CInReal/100000).toFixed(2)) + 'e5';
              var CInImag = rows[0].power_in_C_imag;
                  CInImag =  ((CInImag/100000).toFixed(2)) + 'e5';
              row.phaseCIn = CInReal + ' ' +CInImag + ' j';

              var COutReal = rows[0].power_out_C_real;
                  COutReal =  ((COutReal/100000).toFixed(2)) + 'e5';
              var COutImag = rows[0].power_out_C_imag;
                  COutImag =  ((COutImag/100000).toFixed(2)) + 'e5';
              row.phaseCOut = COutReal + ' ' +COutImag + ' j';

              return row;
            });
            res.json(modifiedRows);
          }
      });
  }
};

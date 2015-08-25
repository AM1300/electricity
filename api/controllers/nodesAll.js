var moment = require('moment');
var math = require('mathjs');

module.exports = {
  getFromNodeToNodeRecords: function(req, res, next) {
    var date = req.param('date');
    var time = req.param('time');

    var hours =  parseInt(time.split(':')[0]);
    var mins  =  parseInt(time.split(':')[1]);

    var parsedDate = moment(date, "DD-MM-YYYY");
    parsedDate.add(hours, 'hours');
    parsedDate.add(mins, 'minutes');

    var formattedDate = parsedDate.format("YYYY-MM-DD HH:mm:ss");

    mySqlConnection.query('SELECT * FROM nodes WHERE timestamp = "'+formattedDate+'"' ,
      function(err, rows, fields) {
      if (err){
        throw err;
      }
      else {
        var voltageA611, voltageA632, voltageA645, voltageA646, voltageA652, voltageA671,
            voltageA675, voltageA680, voltageA684, voltageA692, voltageA6321, voltageA6711;
        var voltageB611, voltageB632, voltageB645, voltageB646, voltageB652, voltageB671,
            voltageB675, voltageB680, voltageB684, voltageB692, voltageB6321, voltageB6711;
        var voltageC611, voltageC632, voltageC645, voltageC646, voltageC652, voltageC671,
            voltageC675, voltageC680, voltageC684, voltageC692, voltageC6321, voltageC6711;
        var currentOutA632_645, currentOutA632_6321, currentOutA645_646, currentOutA6321_671,
            currentOutA671_680, currentOutA671_6711, currentOutA671_692, currentOutA671_684,
            currentOutA684_652, currentOutA684_611, currentOutA692_675;
        var currentOutB632_645, currentOutB632_6321, currentOutB645_646, currentOutB6321_671,
            currentOutB671_680, currentOutB671_6711, currentOutB671_692, currentOutB671_684,
            currentOutB684_652, currentOutB684_611, currentOutB692_675;
        var currentOutC632_645, currentOutC632_6321, currentOutC645_646, currentOutC6321_671,
            currentOutC671_680, currentOutC671_6711, currentOutC671_692, currentOutC671_684,
            currentOutC684_652, currentOutC684_611, currentOutC692_675;


        for(counter = 0; counter < rows.length; counter++) {
          if(rows[counter].nodeID === 611) {
            voltageA611 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB611 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC611 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
          }
          if(rows[counter].nodeID === 632) {
            voltageA632 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB632 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC632 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
          }
          if(rows[counter].nodeID === 645) {
            voltageA645 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB645 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC645 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
          }
          if(rows[counter].nodeID === 646) {
            voltageA646 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB646 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC646 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
          }
          if(rows[counter].nodeID === 652) {
            voltageA652 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB652 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC652 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
          }
          if(rows[counter].nodeID === 671) {
            voltageA671 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB671 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC671 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
          }
          if(rows[counter].nodeID === 675) {
            voltageA675 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB675 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC675 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
          }
          if(rows[counter].nodeID === 680) {
            voltageA680 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB680 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC680 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
          }
          if(rows[counter].nodeID === 684) {
            voltageA684 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB684 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC684 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
          }
          if(rows[counter].nodeID === 692) {
            voltageA692 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB692 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC692 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
          }
          if(rows[counter].nodeID === 6321) {
            voltageA6321 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB6321 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC6321 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
          }
          if(rows[counter].nodeID === 6711) {
            voltageA6711 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB6711 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC6711 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
          }
          if(rows[counter].nodeID === 632 && rows[counter].toNodeID === 645) {
            currentOutA632_645 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB632_645 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC632_645 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
          }
          if(rows[counter].nodeID === 632 && rows[counter].toNodeID === 6321) {
            currentOutA632_6321 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB632_6321 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC632_6321 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
          }
          if(rows[counter].nodeID === 645 && rows[counter].toNodeID === 646) {
            currentOutA645_646 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB645_646 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC645_646 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
          }
          if(rows[counter].nodeID === 6321 && rows[counter].toNodeID === 671) {
            currentOutA6321_671 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB6321_671 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC6321_671 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
          }
          if(rows[counter].nodeID === 671 && rows[counter].toNodeID === 680) {
            currentOutA671_680 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB671_680 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC671_680 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
          }
          if(rows[counter].nodeID === 671 && rows[counter].toNodeID === 6711) {
            currentOutA671_6711 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB671_6711 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC671_6711 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
          }
          if(rows[counter].nodeID === 671 && rows[counter].toNodeID === 692) {
            currentOutA671_692 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB671_692 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC671_692 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
          }
          if(rows[counter].nodeID === 671 && rows[counter].toNodeID === 684) {
            currentOutA671_684 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB671_684 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC671_684 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
          }
          if(rows[counter].nodeID === 684 && rows[counter].toNodeID === 652) {
            currentOutA684_652 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB684_652 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC684_652 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
          }
          if(rows[counter].nodeID === 684 && rows[counter].toNodeID === 611) {
            currentOutA684_611 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB684_611 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC684_611 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
          }
          if(rows[counter].nodeID === 692 && rows[counter].toNodeID === 675) {
            currentOutA692_675 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB692_675 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC692_675 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
          }
        }

        var modifiedRows = rows.map(function(row){

          row.voltageA611 = voltageA611;
          row.voltageB611 = voltageB611;
          row.voltageC611 = voltageC611;
          row.voltageA632 = voltageA632;
          row.voltageB632 = voltageB632;
          row.voltageC632 = voltageC632;
          row.voltageA645 = voltageA645;
          row.voltageB645 = voltageB645;
          row.voltageC645 = voltageC645;
          row.voltageA646 = voltageA646;
          row.voltageB646 = voltageB646;
          row.voltageC646 = voltageC646;
          row.voltageA652 = voltageA652;
          row.voltageB652 = voltageB652;
          row.voltageC652 = voltageC652;
          row.voltageA671 = voltageA671;
          row.voltageB671 = voltageB671;
          row.voltageC671 = voltageC671;
          row.voltageA675 = voltageA675;
          row.voltageB675 = voltageB675;
          row.voltageC675 = voltageC675;
          row.voltageA680 = voltageA680;
          row.voltageB680 = voltageB680;
          row.voltageC680 = voltageC680;
          row.voltageA684 = 0;
          row.voltageB684 = 0;
          row.voltageC684 = 0;
          row.voltageA692 = voltageA692;
          row.voltageB692 = voltageB692;
          row.voltageC692 = voltageC692;
          row.voltageA6321 = voltageA6321;
          row.voltageB6321 = voltageB6321;
          row.voltageC6321 = voltageC6321;
          row.voltageA6711 = voltageA6711;
          row.voltageB6711 = voltageB6711;
          row.voltageC6711 = voltageC6711;
          row.currentOutA632_645 = currentOutA632_645;
          row.currentOutB632_645 = currentOutB632_645;
          row.currentOutC632_645 = currentOutC632_645;
          row.currentOutA632_6321 = currentOutA632_6321;
          row.currentOutB632_6321 = currentOutB632_6321;
          row.currentOutC632_6321 = currentOutC632_6321;
          row.currentOutA645_646 = currentOutA645_646;
          row.currentOutB645_646 = currentOutB645_646;
          row.currentOutC645_646 = currentOutC645_646;
          row.currentOutA6321_671 = currentOutA6321_671;
          row.currentOutB6321_671 = currentOutB6321_671;
          row.currentOutC6321_671 = currentOutC6321_671;
          row.currentOutA671_680 = currentOutA671_680;
          row.currentOutB671_680 = currentOutB671_680;
          row.currentOutC671_680 = currentOutC671_680;
          row.currentOutA671_6711 = currentOutA671_6711;
          row.currentOutB671_6711 = currentOutB671_6711;
          row.currentOutC671_6711 = currentOutC671_6711;
          row.currentOutA671_692 = currentOutA671_692;
          row.currentOutB671_692 = currentOutB671_692;
          row.currentOutC671_692 = currentOutC671_692;
          row.currentOutA671_684 = currentOutA671_684;
          row.currentOutB671_684 = currentOutB671_684;
          row.currentOutC671_684 = currentOutC671_684;
          row.currentOutA684_652 = currentOutA684_652;
          row.currentOutB684_652 = currentOutB684_652;
          row.currentOutC684_652 = currentOutC684_652;
          row.currentOutA684_611 = currentOutA684_611;
          row.currentOutB684_611 = currentOutB684_611;
          row.currentOutC684_611 = currentOutC684_611;
          row.currentOutA692_675 = currentOutA692_675;
          row.currentOutB692_675 = currentOutB692_675;
          row.currentOutC692_675 = currentOutC692_675;

          return row;
        });
        res.json(modifiedRows);
      }
    });
  }
};

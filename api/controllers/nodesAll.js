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
        var voltageRealA611, voltageRealA632, voltageRealA645, voltageRealA646, voltageRealA652, voltageRealA671,
            voltageRealA675, voltageRealA680, voltageRealA684, voltageRealA692, voltageRealA6321, voltageRealA6711;
        var voltageRealB611, voltageRealB632, voltageRealB645, voltageRealB646, voltageRealB652, voltageRealB671,
            voltageRealB675, voltageRealB680, voltageRealB684, voltageRealB692, voltageRealB6321, voltageRealB6711;
        var voltageRealC611, voltageRealC632, voltageRealC645, voltageRealC646, voltageRealC652, voltageRealC671,
            voltageRealC675, voltageRealC680, voltageRealC684, voltageRealC692, voltageRealC6321, voltageRealC6711;
        var currentOutA632_645, currentOutA632_6321, currentOutA645_646, currentOutA6321_671,
            currentOutA671_680, currentOutA671_684;
        var currentOutB632_645, currentOutB632_6321, currentOutB645_646, currentOutB6321_671,
            currentOutB671_680, currentOutB671_684;
        var currentOutC632_645, currentOutC632_6321, currentOutC645_646, currentOutC6321_671,
            currentOutC671_680, currentOutC671_684;
        var currentA632_645, currentA632_6321, currentA645_646, currentA6321_671,
            currentA671_680, currentA671_684;
        var currentB632_645, currentB632_6321, currentB645_646, currentB6321_671,
            currentB671_680, currentB671_684;
        var currentC632_645, currentC632_6321, currentC645_646, currentC6321_671,
            currentC671_680, currentC671_684;

        for(counter = 0; counter < rows.length; counter++) {
          if(rows[counter].nodeID === 611) {
            voltageA611 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB611 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC611 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
            voltageRealA611 = Math.sqrt(Math.pow(rows[counter].voltage_A_real, 2) + Math.pow(rows[counter].voltage_A_imag, 2));
            voltageRealB611 = Math.sqrt(Math.pow(rows[counter].voltage_B_real, 2) + Math.pow(rows[counter].voltage_B_imag, 2));
            voltageRealC611 = Math.sqrt(Math.pow(rows[counter].voltage_C_real, 2) + Math.pow(rows[counter].voltage_C_imag, 2));
          }
          if(rows[counter].nodeID === 632) {
            voltageA632 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB632 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC632 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
            voltageRealA632 = Math.sqrt(Math.pow(rows[counter].voltage_A_real, 2) + Math.pow(rows[counter].voltage_A_imag, 2));
            voltageRealB632 = Math.sqrt(Math.pow(rows[counter].voltage_B_real, 2) + Math.pow(rows[counter].voltage_B_imag, 2));
            voltageRealC632 = Math.sqrt(Math.pow(rows[counter].voltage_C_real, 2) + Math.pow(rows[counter].voltage_C_imag, 2));
          }
          if(rows[counter].nodeID === 645) {
            voltageA645 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB645 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC645 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
            voltageRealA645 = Math.sqrt(Math.pow(rows[counter].voltage_A_real, 2) + Math.pow(rows[counter].voltage_A_imag, 2));
            voltageRealB645 = Math.sqrt(Math.pow(rows[counter].voltage_B_real, 2) + Math.pow(rows[counter].voltage_B_imag, 2));
            voltageRealC645 = Math.sqrt(Math.pow(rows[counter].voltage_C_real, 2) + Math.pow(rows[counter].voltage_C_imag, 2));
          }
          if(rows[counter].nodeID === 646) {
            voltageA646 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB646 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC646 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
            voltageRealA646 = Math.sqrt(Math.pow(rows[counter].voltage_A_real, 2) + Math.pow(rows[counter].voltage_A_imag, 2));
            voltageRealB646 = Math.sqrt(Math.pow(rows[counter].voltage_B_real, 2) + Math.pow(rows[counter].voltage_B_imag, 2));
            voltageRealC646 = Math.sqrt(Math.pow(rows[counter].voltage_C_real, 2) + Math.pow(rows[counter].voltage_C_imag, 2));
          }
          if(rows[counter].nodeID === 652) {
            voltageA652 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB652 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC652 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
            voltageRealA652 = Math.sqrt(Math.pow(rows[counter].voltage_A_real, 2) + Math.pow(rows[counter].voltage_A_imag, 2));
            voltageRealB652 = Math.sqrt(Math.pow(rows[counter].voltage_B_real, 2) + Math.pow(rows[counter].voltage_B_imag, 2));
            voltageRealC652 = Math.sqrt(Math.pow(rows[counter].voltage_C_real, 2) + Math.pow(rows[counter].voltage_C_imag, 2));
          }
          if(rows[counter].nodeID === 671) {
            voltageA671 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB671 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC671 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
            voltageRealA671 = Math.sqrt(Math.pow(rows[counter].voltage_A_real, 2) + Math.pow(rows[counter].voltage_A_imag, 2));
            voltageRealB671 = Math.sqrt(Math.pow(rows[counter].voltage_B_real, 2) + Math.pow(rows[counter].voltage_B_imag, 2));
            voltageRealC671 = Math.sqrt(Math.pow(rows[counter].voltage_C_real, 2) + Math.pow(rows[counter].voltage_C_imag, 2));
          }
          if(rows[counter].nodeID === 675) {
            voltageA675 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB675 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC675 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
            voltageRealA675 = Math.sqrt(Math.pow(rows[counter].voltage_A_real, 2) + Math.pow(rows[counter].voltage_A_imag, 2));
            voltageRealB675 = Math.sqrt(Math.pow(rows[counter].voltage_B_real, 2) + Math.pow(rows[counter].voltage_B_imag, 2));
            voltageRealC675 = Math.sqrt(Math.pow(rows[counter].voltage_C_real, 2) + Math.pow(rows[counter].voltage_C_imag, 2));
          }
          if(rows[counter].nodeID === 680) {
            voltageA680 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB680 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC680 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
            voltageRealA680 = Math.sqrt(Math.pow(rows[counter].voltage_A_real, 2) + Math.pow(rows[counter].voltage_A_imag, 2));
            voltageRealB680 = Math.sqrt(Math.pow(rows[counter].voltage_B_real, 2) + Math.pow(rows[counter].voltage_B_imag, 2));
            voltageRealC680 = Math.sqrt(Math.pow(rows[counter].voltage_C_real, 2) + Math.pow(rows[counter].voltage_C_imag, 2));
          }
          if(rows[counter].nodeID === 684) {
            voltageA684 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB684 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC684 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
            voltageRealA684 = Math.sqrt(Math.pow(rows[counter].voltage_A_real, 2) + Math.pow(rows[counter].voltage_A_imag, 2));
            voltageRealB684 = Math.sqrt(Math.pow(rows[counter].voltage_B_real, 2) + Math.pow(rows[counter].voltage_B_imag, 2));
            voltageRealC684 = Math.sqrt(Math.pow(rows[counter].voltage_C_real, 2) + Math.pow(rows[counter].voltage_C_imag, 2));
          }
          if(rows[counter].nodeID === 692) {
            voltageA692 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB692 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC692 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
            voltageRealA692 = Math.sqrt(Math.pow(rows[counter].voltage_A_real, 2) + Math.pow(rows[counter].voltage_A_imag, 2));
            voltageRealB692 = Math.sqrt(Math.pow(rows[counter].voltage_B_real, 2) + Math.pow(rows[counter].voltage_B_imag, 2));
            voltageRealC692 = Math.sqrt(Math.pow(rows[counter].voltage_C_real, 2) + Math.pow(rows[counter].voltage_C_imag, 2));
          }
          if(rows[counter].nodeID === 6321) {
            voltageA6321 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB6321 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC6321 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
            voltageRealA6321 = Math.sqrt(Math.pow(rows[counter].voltage_A_real, 2) + Math.pow(rows[counter].voltage_A_imag, 2));
            voltageRealB6321 = Math.sqrt(Math.pow(rows[counter].voltage_B_real, 2) + Math.pow(rows[counter].voltage_B_imag, 2));
            voltageRealC6321 = Math.sqrt(Math.pow(rows[counter].voltage_C_real, 2) + Math.pow(rows[counter].voltage_C_imag, 2));
          }
          if(rows[counter].nodeID === 6711) {
            voltageA6711 = math.complex(rows[counter].voltage_A_real, rows[counter].voltage_A_imag).toString();
            voltageB6711 = math.complex(rows[counter].voltage_B_real, rows[counter].voltage_B_imag).toString();
            voltageC6711 = math.complex(rows[counter].voltage_C_real, rows[counter].voltage_C_imag).toString();
            voltageRealA6711 = Math.sqrt(Math.pow(rows[counter].voltage_A_real, 2) + Math.pow(rows[counter].voltage_A_imag, 2));
            voltageRealB6711 = Math.sqrt(Math.pow(rows[counter].voltage_B_real, 2) + Math.pow(rows[counter].voltage_B_imag, 2));
            voltageRealC6711 = Math.sqrt(Math.pow(rows[counter].voltage_C_real, 2) + Math.pow(rows[counter].voltage_C_imag, 2));
          }
          if(rows[counter].nodeID === 632 && rows[counter].toNodeID === 645) {
            currentOutA632_645 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB632_645 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC632_645 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
            currentA632_645 = Math.sqrt(Math.pow(rows[counter].current_out_A_real, 2) + Math.pow(rows[counter].current_out_A_imag, 2));
            currentB632_645 = Math.sqrt(Math.pow(rows[counter].current_out_B_real, 2) + Math.pow(rows[counter].current_out_B_imag, 2));
            currentC632_645 = Math.sqrt(Math.pow(rows[counter].current_out_C_real, 2) + Math.pow(rows[counter].current_out_C_imag, 2));
          }
          if(rows[counter].nodeID === 632 && rows[counter].toNodeID === 6321) {
            currentOutA632_6321 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB632_6321 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC632_6321 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
            currentA632_6321 = Math.sqrt(Math.pow(rows[counter].current_out_A_real, 2) + Math.pow(rows[counter].current_out_A_imag, 2));
            currentB632_6321 = Math.sqrt(Math.pow(rows[counter].current_out_B_real, 2) + Math.pow(rows[counter].current_out_B_imag, 2));
            currentC632_6321 = Math.sqrt(Math.pow(rows[counter].current_out_C_real, 2) + Math.pow(rows[counter].current_out_C_imag, 2));
          }
          if(rows[counter].nodeID === 645 && rows[counter].toNodeID === 646) {
            currentOutA645_646 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB645_646 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC645_646 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
            currentA645_646 = Math.sqrt(Math.pow(rows[counter].current_out_A_real, 2) + Math.pow(rows[counter].current_out_A_imag, 2));
            currentB645_646 = Math.sqrt(Math.pow(rows[counter].current_out_B_real, 2) + Math.pow(rows[counter].current_out_B_imag, 2));
            currentC645_646 = Math.sqrt(Math.pow(rows[counter].current_out_C_real, 2) + Math.pow(rows[counter].current_out_C_imag, 2));
          }
          if(rows[counter].nodeID === 6321 && rows[counter].toNodeID === 671) {
            currentOutA6321_671 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB6321_671 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC6321_671 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
            currentA6321_671 = Math.sqrt(Math.pow(rows[counter].current_out_A_real, 2) + Math.pow(rows[counter].current_out_A_imag, 2));
            currentB6321_671 = Math.sqrt(Math.pow(rows[counter].current_out_B_real, 2) + Math.pow(rows[counter].current_out_B_imag, 2));
            currentC6321_671 = Math.sqrt(Math.pow(rows[counter].current_out_C_real, 2) + Math.pow(rows[counter].current_out_C_imag, 2));
          }
          if(rows[counter].nodeID === 671 && rows[counter].toNodeID === 680) {
            currentOutA671_680 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB671_680 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC671_680 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
            currentA671_680 = Math.sqrt(Math.pow(rows[counter].current_out_A_real, 2) + Math.pow(rows[counter].current_out_A_imag, 2));
            currentB671_680 = Math.sqrt(Math.pow(rows[counter].current_out_B_real, 2) + Math.pow(rows[counter].current_out_B_imag, 2));
            currentC671_680 = Math.sqrt(Math.pow(rows[counter].current_out_C_real, 2) + Math.pow(rows[counter].current_out_C_imag, 2));
          }
          if(rows[counter].nodeID === 671 && rows[counter].toNodeID === 684) {
            currentOutA671_684 = math.complex(rows[counter].current_out_A_real, rows[counter].current_out_A_imag).toString();
            currentOutB671_684 = math.complex(rows[counter].current_out_B_real, rows[counter].current_out_B_imag).toString();
            currentOutC671_684 = math.complex(rows[counter].current_out_C_real, rows[counter].current_out_C_imag).toString();
            currentA671_684 = Math.sqrt(Math.pow(rows[counter].current_out_A_real, 2) + Math.pow(rows[counter].current_out_A_imag, 2));
            currentB671_684 = Math.sqrt(Math.pow(rows[counter].current_out_B_real, 2) + Math.pow(rows[counter].current_out_B_imag, 2));
            currentC671_684 = Math.sqrt(Math.pow(rows[counter].current_out_C_real, 2) + Math.pow(rows[counter].current_out_C_imag, 2));
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
          row.currentOutA671_684 = currentOutA671_684;
          row.currentOutB671_684 = currentOutB671_684;
          row.currentOutC671_684 = currentOutC671_684;
          row.voltageRealA611 = voltageRealA611;
          row.voltageRealB611 = voltageRealB611;
          row.voltageRealC611 = voltageRealC611;
          row.voltageRealA632 = voltageRealA632;
          row.voltageRealB632 = voltageRealB632;
          row.voltageRealC632 = voltageRealC632;
          row.voltageRealA645 = voltageRealA645;
          row.voltageRealB645 = voltageRealB645;
          row.voltageRealC645 = voltageRealC645;
          row.voltageRealA646 = voltageRealA646;
          row.voltageRealB646 = voltageRealB646;
          row.voltageRealC646 = voltageRealC646;
          row.voltageRealA652 = voltageRealA652;
          row.voltageRealB652 = voltageRealB652;
          row.voltageRealC652 = voltageRealC652;
          row.voltageRealA671 = voltageRealA671;
          row.voltageRealB671 = voltageRealB671;
          row.voltageRealC671 = voltageRealC671;
          row.voltageRealA675 = voltageRealA675;
          row.voltageRealB675 = voltageRealB675;
          row.voltageRealC675 = voltageRealC675;
          row.voltageRealA680 = voltageRealA680;
          row.voltageRealB680 = voltageRealB680;
          row.voltageRealC680 = voltageRealC680;
          row.voltageRealA684 = 0;
          row.voltageRealB684 = 0;
          row.voltageRealC684 = 0;
          row.voltageRealA692 = voltageRealA692;
          row.voltageRealB692 = voltageRealB692;
          row.voltageRealC692 = voltageRealC692;
          row.voltageRealA6321 = voltageRealA6321;
          row.voltageRealB6321 = voltageRealB6321;
          row.voltageRealC6321 = voltageRealC6321;
          row.voltageRealA6711 = voltageRealA6711;
          row.voltageRealB6711 = voltageRealB6711;
          row.voltageRealC6711 = voltageRealC6711;
          row.currentA632_645 = currentA632_645;
          row.currentB632_645 = currentB632_645;
          row.currentC632_645 = currentC632_645;
          row.currentA632_6321 = currentA632_6321;
          row.currentB632_6321 = currentB632_6321;
          row.currentC632_6321 = currentC632_6321;
          row.currentA645_646 = currentA645_646;
          row.currentB645_646 = currentB645_646;
          row.currentC645_646 = currentC645_646;
          row.currentA6321_671 = currentA6321_671;
          row.currentB6321_671 = currentB6321_671;
          row.currentC6321_671 = currentC6321_671;
          row.currentA671_680 = currentA671_680;
          row.currentB671_680 = currentB671_680;
          row.currentC671_680 = currentC671_680;
          row.currentA671_684 = currentA671_684;
          row.currentB671_684 = currentB671_684;
          row.currentC671_684 = currentC671_684;

          return row;
        });
        res.json(modifiedRows);
      }
    });
  }
};

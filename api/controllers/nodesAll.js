module.exports = {
  getFromNodeToNodeRecords: function(req, res, next) {

    mySqlConnection.query('SELECT nodeID, toNodeID FROM nodes WHERE timestamp = "2000-08-01 00:00:00"' ,
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

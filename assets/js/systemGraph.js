function systemGraph(response){
    var nodes = [];
    var edges = [];
    var foundNodeIds = [];
    var foundHouseIds = [];

    var houseId, nodeId, house, node, edge;
    for (index = 0; index < response.length; index++) {
      houseId = response[index].houseID;
      nodeId = response[index].nodeID;

      if (foundHouseIds.indexOf(houseId) === -1) {
        house = {
          id: houseId,
          group: nodeId,
          label: houseId
        };
        nodes.push(house);
        foundHouseIds.push(houseId);
      }

      if (foundNodeIds.indexOf(nodeId) === -1) {
        node = {
          id: nodeId,
          group: nodeId,
          label: nodeId
        };
        nodes.push(node);
        foundNodeIds.push(nodeId);
      }

      edge = {
        from: houseId,
        to: nodeId
      };
      edges.push(edge);
    }

    // Fyteytos komvos + akmes tou
    nodes.push({
      id: 632,
      label: 632,
      group: 632
    });

    var fyteytaEdges = [
      {from: 632, to: 645},
      {from: 632, to: 6321},
      {from: 645, to: 646},
      {from: 6321, to: 671},
      {from: 671, to: 652},
      {from: 671, to: 611},
      {from: 671, to: 692},
      {from: 671, to: 6711},
      {from: 692, to: 675},
    ];

    edges = edges.concat(fyteytaEdges);

    // // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
      physics : {
        stabilization : {
          iterations : 200,
          updateInterval: 10,
          onlyDynamicEdges: false,
          fit: true
        }
      }
    };

    // create a network
    var container = document.getElementById('systemNetwork');

    // initialize your network!
    var network = new vis.Network(container, data, options);
}

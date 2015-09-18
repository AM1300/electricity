function nodesGraphPhaseA(response) {

    var voltageA611 = response[0].voltageRealA611;
    var voltageA632 = response[0].voltageRealA632;
    var voltageA645 = response[0].voltageRealA645;
    var voltageA646 = response[0].voltageRealA646;
    var voltageA652 = response[0].voltageRealA652;
    var voltageA671 = response[0].voltageRealA671;
    var voltageA675 = response[0].voltageRealA675;
    var voltageA680 = response[0].voltageRealA680;
    var voltageA684 = 0;
    var voltageA692 = response[0].voltageRealA692;
    var voltageA6321 = response[0].voltageRealA6321;
    var voltageA6711 = response[0].voltageRealA6711;

    var currentA632_645 = response[0].currentA632_645;
    var currentA632_6321 = response[0].currentA632_6321;
    var currentA645_646 = response[0].currentA645_646;
    var currentA6321_671 = response[0].currentA6321_671;
    var currentA671_680 = response[0].currentA671_680;
    var currentA671_684 = response[0].currentA671_684;

    var nodes = new vis.DataSet([
        {id: 611, label: '611', title: 'Voltage of Node 611 in Phase A : ' +voltageA611, value: voltageA611},
        {id: 632, label: '632', title: 'Voltage of Node 632 in Phase A : ' +voltageA632, value: voltageA632},
        {id: 645, label: '645', title: 'Voltage of Node 645 in Phase A : ' +voltageA645, value: voltageA645},
        {id: 646, label: '646', title: 'Voltage of Node 646 in Phase A : ' +voltageA646, value: voltageA646},
        {id: 652, label: '652', title: 'Voltage of Node 652 in Phase A : ' +voltageA652, value: voltageA652},
        {id: 671, label: '671', title: 'Voltage of Node 671 in Phase A : ' +voltageA671, value: voltageA671},
        {id: 675, label: '675', title: 'Voltage of Node 675 in Phase A : ' +voltageA675, value: voltageA675},
        {id: 680, label: '680', title: 'Voltage of Node 680 in Phase A : ' +voltageA680, value: voltageA680},
        {id: 684, label: '684', title: 'Voltage of Node 684 in Phase A : ' +voltageA684, value: voltageA684},
        {id: 692, label: '692', title: 'Voltage of Node 692 in Phase A : ' +voltageA692, value: voltageA692},
        {id: 6321, label: '6321', title: 'Voltage of Node 6321 in Phase A : ' +voltageA6321, value: voltageA6321},
        {id: 6711, label: '6711', title: 'Voltage of Node 6711 in Phase A : ' +voltageA6711, value: voltageA6711}
    ]);

    // create an array with edges
      var edges = new vis.DataSet([
        {from: 632, to: 645, title: 'Current from Node 632 to Node 645 in Phase A : ' +currentA632_645, value: currentA632_645},
        {from: 632, to: 6321, title: 'Current from Node 632 to Node 6321 in Phase A : ' +currentA632_6321, value: currentA632_6321},
        {from: 645, to: 646, title: 'Current from Node 645 to Node 646 in Phase A : ' +currentA645_646, value: currentA645_646},
        {from: 6321, to: 671, title: 'Current from Node 6321 to Node 671 in Phase A : ' +currentA6321_671, value: currentA6321_671},
        {from: 671, to: 680, title: 'Current from Node 671 to Node 680 in Phase A : ' +currentA671_680, value: currentA671_680},
        {from: 671, to: 684, title: 'Current from Node 671 to Node 684 in Phase A : ' +currentA671_684, value: currentA671_684},
        {from: 671, to: 6711, title: 'Current from Node 671 to Node 6711 in Phase A : 0 '},
        {from: 671, to: 692, title: 'Current from Node 671 to Node 692 in Phase A : 0 ' },
        {from: 692, to: 675, title: 'Current from Node 692 to Node 675 in Phase A : 0 '},
        {from: 684, to: 652, title: 'Current from Node 684 to Node 652 in Phase A : 0 ' },
        {from: 684, to: 611, title: 'Current from Node 684 to Node 611 in Phase A : 0 '},
    ]);

    // create a network
    var container = document.getElementById('nodesNetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
      edges: {
        smooth: {
          type: 'continuous',
          forceDirection: 'none'
        },
        font: {
          align: 'top'
        }
      }
    };

    // initialize your network!
    var network = new vis.Network(container, data, options);

}

function nodesGraphPhaseC(response) {
    var voltageC611 = response[0].voltageRealC611;
    var voltageC632 = response[0].voltageRealC632;
    var voltageC645 = response[0].voltageRealC645;
    var voltageC646 = response[0].voltageRealC646;
    var voltageC652 = response[0].voltageRealC652;
    var voltageC671 = response[0].voltageRealC671;
    var voltageC675 = response[0].voltageRealC675;
    var voltageC680 = response[0].voltageRealC680;
    var voltageC684 = 0;
    var voltageC692 = response[0].voltageRealC692;
    var voltageC6321 = response[0].voltageRealC6321;
    var voltageC6711 = response[0].voltageRealC6711;

    var currentOutC632_645 = response[0].currentC632_645;
    var currentOutC632_6321 = response[0].currentC632_6321;
    var currentOutC645_646 = response[0].currentC645_646;
    var currentOutC6321_671 = response[0].currentC6321_671;
    var currentOutC671_680 = response[0].currentC671_680;
    var currentOutC671_684 = response[0].currentC671_684;

    var nodes = new vis.DataSet([
        {id: 611, label: '611', title: 'Voltage of Node 611 in Phase C : ' +voltageC611, value: voltageC611},
        {id: 632, label: '632', title: 'Voltage of Node 632 in Phase C : ' +voltageC632, value: voltageC632},
        {id: 645, label: '645', title: 'Voltage of Node 645 in Phase C : ' +voltageC645, value: voltageC645},
        {id: 646, label: '646', title: 'Voltage of Node 646 in Phase C : ' +voltageC646, value: voltageC646},
        {id: 652, label: '652', title: 'Voltage of Node 652 in Phase C : ' +voltageC652, value: voltageC652},
        {id: 671, label: '671', title: 'Voltage of Node 671 in Phase C : ' +voltageC671, value: voltageC671},
        {id: 675, label: '675', title: 'Voltage of Node 675 in Phase C : ' +voltageC675, value: voltageC675},
        {id: 680, label: '680', title: 'Voltage of Node 680 in Phase C : ' +voltageC680, value: voltageC680},
        {id: 684, label: '684', title: 'Voltage of Node 684 in Phase C : ' +voltageC684, value: voltageC684},
        {id: 692, label: '692', title: 'Voltage of Node 692 in Phase C : ' +voltageC692, value: voltageC692},
        {id: 6321, label: '6321', title: 'Voltage of Node 6321 in Phase C : ' +voltageC6321, value: voltageC6321},
        {id: 6711, label: '6711', title: 'Voltage of Node 6711 in Phase C : ' +voltageC6711, value: voltageC6711}
    ]);

    // create an array with edges
      var edges = new vis.DataSet([
        {from: 632, to: 645, title: 'Current from Node 632 to Node 645 in Phase C : ' +currentOutC632_645, value: currentOutC632_645},
        {from: 632, to: 6321, title: 'Current from Node 632 to Node 6321 in Phase C : ' +currentOutC632_6321, value: currentOutC632_6321},
        {from: 645, to: 646, title: 'Current from Node 645 to Node 646 in Phase C : ' +currentOutC645_646, value: currentOutC645_646},
        {from: 6321, to: 671, title: 'Current from Node 6321 to Node 671 in Phase C : ' +currentOutC6321_671, value: currentOutC6321_671},
        {from: 671, to: 680, title: 'Current from Node 671 to Node 680 in Phase C : ' +currentOutC671_680, value: currentOutC671_680},
        {from: 671, to: 684, title: 'Current from Node 671 to Node 684 in Phase C : ' +currentOutC671_684, value: currentOutC671_684},
        {from: 671, to: 6711, title: 'Current from Node 671 to Node 6711 in Phase C : 0 '},
        {from: 671, to: 692, title: 'Current from Node 671 to Node 692 in Phase C : 0 ' },
        {from: 692, to: 675, title: 'Current from Node 692 to Node 675 in Phase C : 0 '},
        {from: 684, to: 652, title: 'Current from Node 684 to Node 652 in Phase C : 0 ' },
        {from: 684, to: 611, title: 'Current from Node 684 to Node 611 in Phase C : 0 '},
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

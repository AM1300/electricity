function nodesGraphPhaseB (response) {
  var voltageB611 = response[0].voltageB611;
    var voltageB632 = response[0].voltageB632;
    var voltageB645 = response[0].voltageB645;
    var voltageB646 = response[0].voltageB646;
    var voltageB652 = response[0].voltageB652;
    var voltageB671 = response[0].voltageB671;
    var voltageB675 = response[0].voltageB675;
    var voltageB680 = response[0].voltageB680;
    var voltageB684 = 0;
    var voltageB692 = response[0].voltageB692;
    var voltageB6321 = response[0].voltageB6321;
    var voltageB6711 = response[0].voltageB6711;

    var currentOutB632_645 = response[0].currentOutB632_645;
    var currentOutB632_6321 = response[0].currentOutB632_6321;
    var currentOutB645_646 = response[0].currentOutB645_646;
    var currentOutB6321_671 = response[0].currentOutB6321_671;
    var currentOutB671_680 = response[0].currentOutB671_680;
    var currentOutB671_684 = response[0].currentOutB671_684;

    var nodes = new vis.DataSet([
        {id: 611, label: '611', title: 'Voltage of Node 611 in Phase B : ' +voltageB611, value: voltageB611},
        {id: 632, label: '632', title: 'Voltage of Node 632 in Phase B : ' +voltageB632, value: voltageB632},
        {id: 645, label: '645', title: 'Voltage of Node 645 in Phase B : ' +voltageB645, value: voltageB645},
        {id: 646, label: '646', title: 'Voltage of Node 646 in Phase B : ' +voltageB646, value: voltageB646},
        {id: 652, label: '652', title: 'Voltage of Node 652 in Phase B : ' +voltageB652, value: voltageB652},
        {id: 671, label: '671', title: 'Voltage of Node 671 in Phase B : ' +voltageB671, value: voltageB671},
        {id: 675, label: '675', title: 'Voltage of Node 675 in Phase B : ' +voltageB675, value: voltageB675},
        {id: 680, label: '680', title: 'Voltage of Node 680 in Phase B : ' +voltageB680, value: voltageB680},
        {id: 684, label: '684', title: 'Voltage of Node 684 in Phase B : ' +voltageB684, value: voltageB684},
        {id: 692, label: '692', title: 'Voltage of Node 692 in Phase B : ' +voltageB692, value: voltageB692},
        {id: 6321, label: '6321', title: 'Voltage of Node 6321 in Phase B : ' +voltageB6321, value: voltageB6321},
        {id: 6711, label: '6711', title: 'Voltage of Node 6711 in Phase B : ' +voltageB6711, value: voltageB6711}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 632, to: 645, title: 'Current from Node 632 to Node 645 in Phase B : ' +currentOutB632_645, value: currentOutB632_645},
        {from: 632, to: 6321, title: 'Current from Node 632 to Node 6321 in Phase B : ' +currentOutB632_6321, value: currentOutB632_6321},
        {from: 645, to: 646, title: 'Current from Node 645 to Node 646 in Phase B : ' +currentOutB645_646, value: currentOutB645_646},
        {from: 6321, to: 671, title: 'Current from Node 6321 to Node 671 in Phase B : ' +currentOutB6321_671, value: currentOutB6321_671},
        {from: 671, to: 680, title: 'Current from Node 671 to Node 680 in Phase B : ' +currentOutB671_680, value: currentOutB671_680},
        {from: 671, to: 684, title: 'Current from Node 671 to Node 684 in Phase B : ' +currentOutB671_684, value: currentOutB671_684},
        {from: 671, to: 6711, title: 'Current from Node 671 to Node 6711 in Phase B : 0 '},
        {from: 671, to: 692, title: 'Current from Node 671 to Node 692 in Phase B : 0 ' },
        {from: 692, to: 675, title: 'Current from Node 692 to Node 675 in Phase B : 0 '},
        {from: 684, to: 652, title: 'Current from Node 684 to Node 652 in Phase B : 0 ' },
        {from: 684, to: 611, title: 'Current from Node 684 to Node 611 in Phase B : 0 '},
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
        arrows: {
          to: {enabled: true, scaleFactor:1},
        },
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

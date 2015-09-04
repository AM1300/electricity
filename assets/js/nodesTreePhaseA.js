function nodesTreePhaseA (response) {
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

    var currentOutA632_645 = response[0].currentA632_645;
    var currentOutA632_6321 = response[0].currentA632_6321;
    var currentOutA645_646 = response[0].currentA645_646;
    var currentOutA6321_671 = response[0].currentA6321_671;
    var currentOutA671_680 = response[0].currentA671_680;
    var currentOutA671_684 = response[0].currentA671_684;

    var nodes = new vis.DataSet([
        {id: 611, label: '611', title: 'A : ' +voltageA611, value: voltageA611},
        {id: 632, label: '632', title: 'A : ' +voltageA632, value: voltageA632},
        {id: 645, label: '645', title: 'A : ' +voltageA645, value: voltageA645},
        {id: 646, label: '646', title: 'A : ' +voltageA646, value: voltageA646},
        {id: 652, label: '652', title: 'A : ' +voltageA652, value: voltageA652},
        {id: 671, label: '671', title: 'A : ' +voltageA671, value: voltageA671},
        {id: 675, label: '675', title: 'A : ' +voltageA675, value: voltageA675},
        {id: 680, label: '680', title: 'A : ' +voltageA680, value: voltageA680},
        {id: 684, label: '684', title: 'A : ' +voltageA684, value: voltageA684},
        {id: 692, label: '692', title: 'A : ' +voltageA692, value: voltageA692},
        {id: 6321, label: '6321', title: 'A : ' +voltageA6321, value: voltageA6321},
        {id: 6711, label: '6711', title: 'A : ' +voltageA6711, value: voltageA6711}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 611, to: null},
        {from: 632, to: 645, title: 'A : ' +currentOutA632_645, value: currentOutA632_645},
        {from: 632, to: 6321, title: 'A : ' +currentOutA632_6321, value: currentOutA632_6321},
        {from: 645, to: 646, title: 'A : ' +currentOutA645_646, value: currentOutA645_646},
        {from: 646, to: null},
        {from: 6321, to: 671, title: 'A : ' +currentOutA6321_671, value: currentOutA6321_671},
        {from: 671, to: 680, title: 'A : ' +currentOutA671_680, value: currentOutA671_680},
        {from: 680, to: null},
        {from: 671, to: 684, title: 'A : ' +currentOutA671_684, value: currentOutA671_684},
        {from: 671, to: 6711, title: 'A : 0 '},
        {from: 671, to: 692, title: 'A : 0 ' },
        {from: 692, to: 675, title: 'A : 0 '},
        {from: 684, to: 652, title: 'A : 0 ' },
        {from: 684, to: 611, title: 'A : 0 '},
        {from: 652, to: null},
        {from: 675, to: null},
        {from: 692, to: null},
        {from: 6711, to: null},

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
        // arrows: {
        //   to: {enabled: true, scaleFactor:1},
        // },
        smooth: {
          type: 'continuous',
          forceDirection: 'none'
        },
        font: {
          align: 'top'
        }
      },
      layout: {
        randomSeed: 632,
        hierarchical: {
          enabled:true,
          levelSeparation: 150,
          direction: 'UD',   // UD, DU, LR, RL
          sortMethod: 'directed' // hubsize, directed
        },
      }
    };

    // initialize your network!
    var network = new vis.Network(container, data, options);
}

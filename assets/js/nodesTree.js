function nodesTree(response){
    var voltageA611 = response[0].voltageA611;
    var voltageB611 = response[0].voltageB611;
    var voltageC611 = response[0].voltageC611;
    var voltageA632 = response[0].voltageA632;
    var voltageB632 = response[0].voltageB632;
    var voltageC632 = response[0].voltageC632;
    var voltageA645 = response[0].voltageA645;
    var voltageB645 = response[0].voltageB645;
    var voltageC645 = response[0].voltageC645;
    var voltageA646 = response[0].voltageA646;
    var voltageB646 = response[0].voltageB646;
    var voltageC646 = response[0].voltageC646;
    var voltageA652 = response[0].voltageA652;
    var voltageB652 = response[0].voltageB652;
    var voltageC652 = response[0].voltageC652;
    var voltageA671 = response[0].voltageA671;
    var voltageB671 = response[0].voltageB671;
    var voltageC671 = response[0].voltageC671;
    var voltageA675 = response[0].voltageA675;
    var voltageB675 = response[0].voltageB675;
    var voltageC675 = response[0].voltageC675;
    var voltageA680 = response[0].voltageA680;
    var voltageB680 = response[0].voltageB680;
    var voltageC680 = response[0].voltageC680;
    var voltageA684 = 0;
    var voltageB684 = 0;
    var voltageC684 = 0;
    var voltageA692 = response[0].voltageA692;
    var voltageB692 = response[0].voltageB692;
    var voltageC692 = response[0].voltageC692;
    var voltageA6321 = response[0].voltageA6321;
    var voltageB6321 = response[0].voltageB6321;
    var voltageC6321 = response[0].voltageC6321;
    var voltageA6711 = response[0].voltageA6711;
    var voltageB6711 = response[0].voltageB6711;
    var voltageC6711 = response[0].voltageC6711;

    var currentOutA632_645 = response[0].currentOutA632_645;
    var currentOutB632_645 = response[0].currentOutB632_645;
    var currentOutC632_645 = response[0].currentOutC632_645;
    var currentOutA632_6321 = response[0].currentOutA632_6321;
    var currentOutB632_6321 = response[0].currentOutB632_6321;
    var currentOutC632_6321 = response[0].currentOutC632_6321;
    var currentOutA645_646 = response[0].currentOutA645_646;
    var currentOutB645_646 = response[0].currentOutB645_646;
    var currentOutC645_646 = response[0].currentOutC645_646;
    var currentOutA6321_671 = response[0].currentOutA6321_671;
    var currentOutB6321_671 = response[0].currentOutB6321_671;
    var currentOutC6321_671 = response[0].currentOutC6321_671;
    var currentOutA671_680 = response[0].currentOutA671_680;
    var currentOutB671_680 = response[0].currentOutB671_680;
    var currentOutC671_680 = response[0].currentOutC671_680;
    var currentOutA671_684 = response[0].currentOutA671_684;
    var currentOutB671_684 = response[0].currentOutB671_684;
    var currentOutC671_684 = response[0].currentOutC671_684;

    var nodes = new vis.DataSet([
        {id: 611, label: '611', title: 'Voltage per Phase A : ' +voltageA611+ '\n' +'B : ' +voltageB611+'\n' + 'C : ' +voltageC611},
        {id: 632, label: '632', title: 'Voltage per Phase A : ' +voltageA632+ '\n' +'B : ' +voltageB632+'\n' + 'C : ' +voltageC632},
        {id: 645, label: '645', title: 'Voltage per Phase A : ' +voltageA645+ '\n' +'B : ' +voltageB645+'\n' + 'C : ' +voltageC645},
        {id: 646, label: '646', title: 'Voltage per Phase A : ' +voltageA646+ '\n' +'B : ' +voltageB646+'\n' + 'C : ' +voltageC646},
        {id: 652, label: '652', title: 'Voltage per Phase A : ' +voltageA652+ '\n' +'B : ' +voltageB652+'\n' + 'C : ' +voltageC652},
        {id: 671, label: '671', title: 'Voltage per Phase A : ' +voltageA671+ '\n' +'B : ' +voltageB671+'\n' + 'C : ' +voltageC671},
        {id: 675, label: '675', title: 'Voltage per Phase A : ' +voltageA675+ '\n' +'B : ' +voltageB675+'\n' + 'C : ' +voltageC675},
        {id: 680, label: '680', title: 'Voltage per Phase A : ' +voltageA680+ '\n' +'B : ' +voltageB680+'\n' + 'C : ' +voltageC680},
        {id: 684, label: '684', title: 'Voltage per Phase A : ' +voltageA684+ '\n' +'B : ' +voltageB684+'\n' + 'C : ' +voltageC684},
        {id: 692, label: '692', title: 'Voltage per Phase A : ' +voltageA692+ '\n' +'B : ' +voltageB692+'\n' + 'C : ' +voltageC692},
        {id: 6321, label: '6321', title: 'Voltage per Phase A : ' +voltageA6321+ '\n' +'B : ' +voltageB6321+'\n' + 'C : ' +voltageC6321},
        {id: 6711, label: '6711', title: 'Voltage per Phase A : ' +voltageA6711+ '\n' +'B : ' +voltageB6711+'\n' + 'C : ' +voltageC6711}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 632, to: 645, title: 'Current per Phase A : ' +currentOutA632_645+' '+ 'B : ' +currentOutB632_645+' '+ 'C : ' +currentOutC632_645},
        {from: 632, to: 6321, title: 'Current per Phase A : ' +currentOutA632_6321+' '+ 'B : '  +currentOutB632_6321+' '+ 'C : ' +currentOutC632_6321},
        {from: 645, to: 646, title: 'Current per Phase A : ' +currentOutA645_646+' '+ 'B : ' +currentOutB645_646+' '+ 'C : ' +currentOutC645_646},
        {from: 6321, to: 671, title: 'Current per Phase A : ' +currentOutA6321_671+' '+ 'B : ' +currentOutB6321_671+' '+ 'C : ' +currentOutC6321_671},
        {from: 671, to: 680, title: 'Current per Phase A : ' +currentOutA671_680+' '+ 'B : ' +currentOutB671_680+' '+ 'C : ' +currentOutC671_680},
        {from: 671, to: 684, title: 'Current per Phase A : ' +currentOutA671_684+' '+ 'B : ' +currentOutB671_684+' '+ 'C : ' +currentOutC671_684},
        {from: 671, to: 6711, title: 'Current per Phase A : 0 B : 0 C : 0'},
        {from: 671, to: 692, title: 'Current per Phase A : 0 B : 0 C : 0'},
        {from: 692, to: 675, title: 'Current per Phase A : 0 B : 0 C : 0'},
        {from: 684, to: 652, title: 'Current per Phase A : 0 B : 0 C : 0'},
        {from: 684, to: 611, title: 'Current per Phase A : 0 B : 0 C : 0'},
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

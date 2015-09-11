function transformerGraphicalRepresentation(response) {

    var powerInPhaseA = response[0].phaseAIn;
    var powerOutPhaseA = response[0].phaseAOut;
    var powerLossesPhaseA = response[0].phaseALosses;
    var powerInPhaseB = response[0].phaseBIn;
    var powerOutPhaseB = response[0].phaseBOut;
    var powerInPhaseC = response[0].phaseCIn;
    var powerOutPhaseC = response[0].phaseCOut;

    var nodesPhaseA = new vis.DataSet([
        { id: 1 , label: '   A   ', x: 200, y: 200, shape: 'box' },
        {id: 0 , label: ' IN ', x: 0, y: 200, shape: 'box', color: { border: '#e3e3e3' }},
        {id: 2 , label: ' OUT ', x: 400, y: 200,  shape: 'box', color: { border: '#e3e3e3' }},
        {id: 3 , label: 'LOSSES', x: 200, y: 350,  shape: 'box', color: { border: '#e3e3e3' }}
    ]);

    // create an array with edges
    var edgesPhaseA = new vis.DataSet([
        {from: 0, to: 1, label: powerInPhaseA, color: '#2ecc71' },
        {from: 1, to: 2, label: powerOutPhaseA, color: '#e74c3c' },
        {from: 1, to: 3, label: powerLossesPhaseA, color: '#e67e22' }
    ]);

    // create a network
    var containerPhaseA = document.getElementById('networkForPhaseA');

    // provide the data in the vis format
    var dataPhaseA = {
        nodes: nodesPhaseA,
        edges: edgesPhaseA
    };


    var nodesPhaseB = new vis.DataSet([
        {id: 1 , label: '   B   ', x: 200, y: 200, shape: 'box'},
        {id: 0 , label: ' IN ', x: 0, y: 200, shape: 'box', color: { border: '#e3e3e3' }},
        {id: 2 , label: ' OUT ', x: 400, y: 200, shape: 'box', color: { border: '#e3e3e3' }},
    ]);

    // create an array with edges
    var edgesPhaseB = new vis.DataSet([
        {from: 0, to: 1, label: powerInPhaseB, color: '#2ecc71' },
        {from: 1, to: 2, label: powerOutPhaseB, color: '#e74c3c' },
    ]);

    // create a network
    var containerPhaseB = document.getElementById('networkForPhaseB');

    // provide the data in the vis format
    var dataPhaseB = {
        nodes: nodesPhaseB,
        edges: edgesPhaseB
    };


    var nodesPhaseC = new vis.DataSet([
        {id: 1 , label: '   C   ', x: 200, y: 200, shape: 'box'},
        {id: 0 , label: ' IN ', x: 0, y: 200, shape: 'box', color: { border: '#e3e3e3' }},
        {id: 2 , label: ' OUT ', x: 400, y: 200, shape: 'box', color: { border: '#e3e3e3' }},

    ]);

    // create an array with edges
    var edgesPhaseC = new vis.DataSet([
        {from: 0, to: 1, label: powerInPhaseC, color: '#2ecc71' },
        {from: 1, to: 2, label: powerOutPhaseC, color: '#e74c3c' },
    ]);

    // create a network
    var containerPhaseC = document.getElementById('networkForPhaseC');

    // provide the data in the vis format
    var dataPhaseC = {
        nodes: nodesPhaseC,
        edges: edgesPhaseC
    };

    var options = {
      nodes: {
        fixed : {
          x: true,
          y: true
        },
        color: '#e3e3e3'
      },
      edges: {
        arrows: {
          to: {enabled: true, scaleFactor:1},
        },
        smooth: false,
        font: {
          align: 'top',
          size: 12
        }
      }
    };

    // initialize your network!
    var networkPhaseA = new vis.Network(containerPhaseA , dataPhaseA , options);
    var networkPhaseB = new vis.Network(containerPhaseB , dataPhaseB , options);
    var networkPhaseC = new vis.Network(containerPhaseC , dataPhaseC , options);
}

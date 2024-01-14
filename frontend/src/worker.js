// eslint-disable-next-line import/no-anonymous-default-export

// eslint-disable-next-line no-restricted-globals

/* eslint-disable-next-line no-restricted-globals */


// const mapping = { 0: 'fp1', 1: 'fp2', 2: 't3', 3: 't4', 4: 'o1', 5: 'o2', 6: 'p3', 7: 'p4' }

// const initialState = {
//     fp1: {
//       labels: [],
//       datasets: [
//         {
//           label: 'FP1',
//           pointRadius: 0,
//           data: [],
//           borderWidth: 0.5,
//           borderColor: '#3498db',
//           backgroundColor: '#3498db',
//         },
//       ],
//     },
//     fp2: {
//       labels: [],
//       datasets: [
//         {
//           label: 'FP2',
//           pointRadius: 0,
//           borderWidth: 0.5,
//           data: [],
//           borderColor: '#e74c3c',
//           backgroundColor: '#e74c3c',
//         },
//       ],
//     },
//     t3: {
//       labels: [],
//       datasets: [
//         {
//           label: ' T3',
//           pointRadius: 0,
//           borderWidth: 0.5,
//           data: [],
//           borderColor: '#2c3e50',
//           backgroundColor: '#2c3e50',
//         },
//       ],
//     },
//     t4: {
//       labels: [],
//       datasets: [
//         {
//           label: ' T4',
//           pointRadius: 0,
//           data: [],
//           borderWidth: 0.5,
//           borderColor: '#2ecc71',
//           backgroundColor: '#2ecc71',
//         },
//       ],
//     },
//     o1: {
//       labels: [],
//       datasets: [
//         {
//           label: ' O1',
//           pointRadius: 0,
//           borderWidth: 0.5,
//           data: [],
//           borderColor: '#f39c12',
//           backgroundColor: '#f39c12',
//         },
//       ],
//     },
//     o2: {
//       labels: [],
//       datasets: [
//         {
//           label: ' O2',
//           pointRadius: 0,
//           data: [],
//           borderColor: '#9b59b6',
//           borderWidth: 0.5,
//           backgroundColor: '#9b59b6',
//         },
//       ],
//     },
//     p3: {
//       labels: [],
//       datasets: [
//         {
//           label: ' P3 ',
//           pointRadius: 0,
//           borderWidth: 0.5,
//           data: [],
//           borderColor: '#1abc9c',
//           backgroundColor: '#1abc9c',
//         },
//       ],
//     },
//     p4: {
//       labels: [],
//       datasets: [
//         {
//           label: 'P4 ',
//           pointRadius: 0,
//           borderWidth: 0.5,
//           data: [],
//           borderColor: '#e67e22',
//           backgroundColor: '#e67e22',
//         },
//       ],
//     },
//   };


self.addEventListener('message', (e) => { /* eslint-disable-line no-restricted-globals */
    const csvData = e.data.csvData;
    const initialState = e.data.initialState;
    const mapping = e.data.mapping;
    try {
        for (let i = 0; i < csvData.length; i++) {
            for (let j = 0; j < csvData[0].length; j++) {
                initialState[mapping[i]].labels.push('0');
                initialState[mapping[i]].datasets[0].data.push(csvData[i][j]);
            }
        }
        // eslint-disable-next-line no-restricted-globals
        self.postMessage({
            result: 'Processing completed successfully',
            initialState:initialState
        });
    } catch (error) {
        // eslint-disable-next-line no-restricted-globals
        self.postMessage({ error: error.message });
    }
});
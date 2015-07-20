function createBatches(data) {
  var originalData = data;
  var altData = [];
  var done = false;
  var batch = 0;
  var batchSize = 100;
  var read = 0;

  while(!done) {
    altData[batch] = originalData.slice(read, read+batchSize);

    if (altData[batch].length < batchSize) {
      done = true;
    }

    read = read + altData[batch].length;
    // console.log('originalData = ' +originalData);
    // console.log('altData[batch] =' +altData[batch]);
    // console.log('altData.length =' +altData[batch].length);
    batch++;
  }
  return altData[batch-1];

}

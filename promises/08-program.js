function attachTitle (first) {
  return 'DR. ' + first;
}

var promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log);

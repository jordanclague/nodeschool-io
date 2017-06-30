function reduce(arr, fn, initial) {
  var head = arr[0];
  var tail = arr.slice(1);
  return reduce(tail, fn, head);
}

module.exports = reduce;

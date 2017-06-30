function reduce(arr, fn, initial) {
  //console.log(arr);
  if (!arr.length) return [];
  let head = arr.shift();

  return reduce(arr, fn, initial + fn(head));

  //console.log(head);
  //return Object.assign(initial, head, reduce(arr, fn, initial));
}

module.exports = reduce;

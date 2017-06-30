let slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments, 0)));
  };
}

module.exports = logger;

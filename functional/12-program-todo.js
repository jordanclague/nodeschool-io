function Spy(target, method) {
  var spy = {count: 0};

  let oldFunction = target[method];

  // New function.
  target[method] = function () {
    spy.count++;
    return oldFunction.apply(this, arguments);
  }

  return spy;
};

module.exports = Spy;

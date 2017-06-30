function curryN (fn, n) {
  let numberOfArguments = fn.arity;
  if (numberOfArguments == 1) {
    return fn.apply(this, args);
  }
  return fn(n);  
}

module.exports = curryN;

function repeat(operation, num) {
  if (num <= 0) return;
  let next = operation()
  if (next) {
    return next;
  }
  return repeat(operation, num--);
}

function trampoline(fn) {
  // Implement a trampoline.
}

module.exports = function(operation, num) {
  trampoline(operation);
  return repeat(operation, num);
}

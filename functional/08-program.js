module.exports = function duckCount() {
  let argArray = Array.prototype.slice.call(arguments);
  return argArray.filter((a) => Object.prototype.hasOwnProperty.call(a, "quack")).length;
};

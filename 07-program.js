module.exports = function average(...numbers) {
  var result = 0;
  numbers.forEach(function (i) {
    result += i;
  });

  return result / numbers.length;
}

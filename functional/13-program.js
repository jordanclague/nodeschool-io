function repeat(operation, num) {
  if (num <= 0) {
    return;
  }

  operation();

  if (num % 1000 === 0) {
    setTimeout(function () {
      return repeat(operation, --num);
    });
  }
  else {
    repeat(operation, --num);
  }
}

module.exports = repeat;

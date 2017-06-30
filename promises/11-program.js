function all (p1, p2) {
  var counter = 0;
  values = [];

  var promise = new Promise(function (fulfill, reject) {
    p1.then(function (value) {
      values[0] = value;
      ++counter;

      if (counter == 2) {
        fulfill(values);
      }
    });

    p2.then(function (value) {
      values[1] = value;
      ++counter;

      if (counter == 2) {
        fulfill(values);
      }
    });
  });

  return promise;
}

all(getPromise1(), getPromise2()).then(console.log);

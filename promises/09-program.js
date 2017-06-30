'use strict';

function parsePromised (input) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(input));
    }
    catch (e) {
      reject(e);
    }
  });
}

parsePromised(process.argv[2]).then(null, console.log);

var http = require('http');
var bl = require('bl');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var results = [];
var count = 0;

function printResults() {
  results.forEach(function(result) {
    console.log(result);
  });
}

function httpGet(i) {
  http.get(urls[i], function(response) {
    response.pipe(bl(function(err, data) {
      if (err) {
        console.error(err);
      }

      results[i] = data.toString();
      count++;

      if (count == 3) {
        printResults();
      }
    }));
  });
}

for (var i = 0; i<3; i++) {
  httpGet(i);
}

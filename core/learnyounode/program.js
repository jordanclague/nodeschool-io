var fs = require('fs');

var buffer = fs.readFile(process.argv[2], function callback(err, data) {
  if (!err) {
    var numberOfNewLines = data.toString().split('\n');
    console.log(numberOfNewLines.length - 1);
  }
  else {
    console.log(err);
  }
})

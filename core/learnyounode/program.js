var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var numberOfNewLines = buffer.toString().split('\n');

console.log(numberOfNewLines.length - 1);

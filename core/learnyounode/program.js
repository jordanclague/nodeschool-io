var directory = process.argv[2];
var fileExtension = process.argv[3];
var fn = require('./functions');

var callback = function (err, data) {
  if (err) {
    console.log(err);
  }
  
  data.forEach(function (item) {
    console.log(item);
  });
};

fn(directory, fileExtension, callback);

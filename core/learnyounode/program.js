var fs = require('fs');
var directory = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(directory, function callback (err, list) {
  if (err) {
    console.log(err);
  }

  list.forEach(function (item) {
    if (item.split('.')[1] == fileExtension) {
      console.log(item);
    }
  });
});

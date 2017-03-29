var fs = require('fs');

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function (err, data) {
    if (err) {
      return callback(err, []);
    }

    var results = [];
    data.forEach(function(item) {
      if (item.split('.')[1] == extension) {
        results.push(item);
      }
    })
    
    return callback(null, results); 
  });
};

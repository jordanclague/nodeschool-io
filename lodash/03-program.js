var _ = require("lodash");

var worker = function(collection) {
  return _.forEach(collection, function (i) {
    if (i.population > 1) {
      i.size = 'big';
    }
    else if (i.population <= 1 && i.population > 0.5) {
      i.size = 'med';
    }
    else {
      i.size = 'small';
    }
  });
};

module.exports = worker;

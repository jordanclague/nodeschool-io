var _ = require("lodash");

var worker = function(collection) {
  var data = {'hot': [], 'warm': []};

  _.forEach(collection, function(v, k) {
    console.log(v, k);
    if (_.every(v, (i) => i > 19)) {
      console.log('hot');
      data.hot.push(k);
    }
    else if (_.some(v, (i) => i > 19)) {
      data.warm.push(k);
    }
  });

  return data;
};

module.exports = worker;

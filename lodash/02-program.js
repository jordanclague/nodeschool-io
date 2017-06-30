var _ = require("lodash");

var worker = function(collection) {
  return _.sortBy(collection, (i) => -(i.quantity));
};

module.exports = worker;

var _ = require("lodash");

var worker = function(collection) {
  return _.filter(collection, (i) => i.active);
};

module.exports = worker;

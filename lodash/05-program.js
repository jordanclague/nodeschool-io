var _ = require("lodash");

var worker = function(collection) {
  return _.chain(collection)
      .map((i) => (i + 'chained').toUpperCase())
      .sortBy((i) => i.charAt(0));
};

module.exports = worker;

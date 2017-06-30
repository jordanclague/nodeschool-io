var _ = require("lodash");

var worker = function(collection) {
  var data = [];

  _.forEach(_.groupBy(collection, (i) => i.username), function (v, k) {
    data.push({username: k, comment_count: _.size(v)});
  });

  return _.sortBy(data, (i) => -i.comment_count);
};

module.exports = worker;

var _ = require("lodash");

var worker = function (collection) {
  var data = {average: 0, underperform: [], overperform: []};

  var average = {count: 0, total: 0};

  _.map(collection, function (i) {
    average.count++;
    average.total += i.income;
  });

  data.average = average.total / average.count;

  _.map(collection, function (i) {
    if (i.income > data.average) {
      data.overperform.push(i);
      data.overperform = _.sortBy(data.overperform, (i) => i.income);
    }
    else {
      data.underperform.push(i);
      data.underperform = _.sortBy(data.underperform, (i) => i.income);
    }
  });

  return data;
};

module.exports = worker;

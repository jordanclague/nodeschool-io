var _ = require("lodash");

var worker = function (collection) {
  return _.reduce(collection, function (acc, item) {

    var matchingArticle = _.find(acc, (ma) => item.article == ma.article);

    if (matchingArticle) {
      matchingArticle.total_orders = matchingArticle.total_orders + item.quantity;
      _.map(acc, (i) => i.article == item.article ? matchingArticle : i);
    }
    else {
      acc.push({article: item.article, total_orders: item.quantity});
    }

    return _.orderBy(acc, (i) => -i.article);
  }, []);
};

module.exports = worker;

var _ = require("lodash");

var worker = function (collection) {
  var template = 'Hello <%= name %> (logins: <%= count %>)';
  return _.template(template)({name: collection.name, count: collection.login.length});
};

module.exports = worker;

var http = require('q-io/http');

http.read('http://localhost:7000').then(function (id) {
  return http.read('http://localhost:7001/' + id);
}).then(function (user) {
  console.log(JSON.parse(user));
});

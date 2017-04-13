var http = require('http');
var url = require('url');
var map = require('through2-map');

function parseTime(iso) {
  var date = new Date(iso);
  return JSON.stringify({
    "hour": date.getHours(),
    "minute": date.getMinutes(),
    "second": date.getSeconds()
  });
}

function unixTime(iso) {
  var date = new Date(iso);
  return JSON.stringify({
    "unixtime": date.getTime()
  });
}

var server = http.createServer(function (request, response) { 
  var parsedUrl = url.parse(request.url, true);
  if (parsedUrl.pathname.match(/parsetime$/)) {
    response.writeHead(200, { 'Content-Type':'application/json' });
    response.write(parseTime(parsedUrl.query.iso));
    response.end();
  }
  if (parsedUrl.pathname.match(/unixtime$/)) {
    response.writeHead(200, { 'Content-Type':'application/json' });
    response.write(unixTime(parsedUrl.query.iso));
    response.end();
  }
});
server.listen(process.argv[2]);

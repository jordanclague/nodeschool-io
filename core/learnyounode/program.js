var net = require('net');

var server = net.createServer(function (socket) {
  var d = new Date();
  var year = d.getFullYear();
  var month = ("0" + (d.getMonth() + 1)).slice(-2);
  var date = ("0" + d.getDate()).slice(-2);
  var hour = d.getHours();
  var minutes = ("0" + d.getMinutes()).slice(-2); 

  var dateString = year + "-" + month + "-" + date + " " + hour + ":" + minutes;
  socket.end(dateString + '\n');
});
server.listen(Number(process.argv[2]));

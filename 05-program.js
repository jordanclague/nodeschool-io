let userArray = process.argv.slice(2);

var data = {};
[, data.username, data.email] = userArray;
console.log(data);

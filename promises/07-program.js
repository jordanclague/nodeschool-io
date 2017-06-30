// first().then(function (value) {
//   return value;
// }).then(function (value) {
//   return second(value);
// }).then(console.log);

first().then(second).then(console.log);

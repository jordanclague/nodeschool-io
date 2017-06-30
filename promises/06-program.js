var promiseYes = Promise.resolve('YES!');
promiseYes.then(console.log);

var promiseNo = Promise.reject(new Error('NO!'));
promiseNo.catch(function (err) {
  console.log(err.message);
});

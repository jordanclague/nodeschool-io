module.exports = function arrayMap(arr, fn) {
  let newArr = [];

  arr.reduce(function(acc, currentValue, currentIndex, arr) {
    newArr[currentIndex] = fn(currentValue);
  }, []);

  return newArr;
};

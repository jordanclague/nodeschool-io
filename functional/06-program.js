function countWords(inputWords) {
  return inputWords.reduce(function(acc, current) { 
    if (acc[current]) {
      acc[current] = acc[current] + 1;
    }
    else {
      acc[current] = 1;
    }
    return acc;
  }, {});
}

module.exports = countWords;

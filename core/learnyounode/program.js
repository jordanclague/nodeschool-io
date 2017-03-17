var numbers = process.argv.slice(2);

var total = 0;
for (i = 0; i < numbers.length; i++) {
  total = total + parseInt(numbers[i]);
}

console.log(total);

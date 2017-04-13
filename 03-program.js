var inputs = process.argv.slice(2);
var result = inputs.map(e => e.slice(0, 1)).reduce((acc, y) => acc + y);
console.log(`[${inputs}] becomes "${result}"`);

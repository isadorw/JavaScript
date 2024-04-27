// versão para beecrowd
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

var prod = a * b;

console.log("PROD = " + prod);
// versão teste
// var a = 0;
// var b = 9;

// var prod = a * b;

// console.log("PROD = " + prod);
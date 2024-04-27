// versão para beecrowd
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

var soma = a + b;

console.log("SOMA = " + soma);
// versão teste
// var a = -30;
// var b = 10;

// var soma = a + b;

// console.log("SOMA = " + soma);
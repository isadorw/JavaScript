var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var num = parseInt(lines.shift());
var qtd_hrs = parseInt(lines.shift());
var h_trab = parseFloat(lines.shift());

var salary = qtd_hrs * h_trab;

console.log("NUMBER = " + num);
console.log("SALARY = U$ " + salary.toFixed(2));
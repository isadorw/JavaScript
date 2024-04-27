var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// separando entrada
var valorentrada = lines[0].split(" ");
var a = parseFloat(valorentrada[0]);
var b = parseFloat(valorentrada[1]);
var c = parseFloat(valorentrada[2]);

// calculando o maior
var maiorAB = (a + b + Math.abs(a - b)) / 2;
var maior = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(maior + " eh o maior");
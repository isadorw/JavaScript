var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// separando entrada
var valorentrada = lines[0].split(" ");
var a = parseFloat(valorentrada[0]);
var b = parseFloat(valorentrada[1]);
var c = parseFloat(valorentrada[2]);

// triangulo
var triangulo = (a * c) / 2;

// ciruclo
var circulo = 3.14159 * (c ** 2);

// trapezio
var trapezio = ((a + b) * c) / 2;

// quadrado
var quadrado = b ** 2;

// retangulo
var retangulo = a * b;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));
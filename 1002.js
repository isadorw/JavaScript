var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines[0]);

var areaCirculo = 3.14159 * (raio ** 2); 

console.log("A=" + areaCirculo.toFixed(4));
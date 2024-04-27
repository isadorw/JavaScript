var input =  require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var l1 = lines[0].split (" ");
var x1 = parseFloat(l1[0]);
var y1 = parseFloat(l1[1]);
var l2 = lines[1].split (" ");
var x2 = parseFloat(l2[0]);
var y2 = parseFloat(l2[1]);

var distancia = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

console.log(distancia.toFixed(4));
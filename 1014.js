var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dist_km = parseFloat(lines.shift());
var comb_l = parseFloat(lines.shift());

var consumo = dist_km / comb_l;

console.log(consumo.toFixed(3) + " km/l");
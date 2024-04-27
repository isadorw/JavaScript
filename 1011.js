var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines);

var volume = (4/3.0) * 3.14159 * (raio ** 3);

console.log("VOLUME = " + volume.toFixed(3));
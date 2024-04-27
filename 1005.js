var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');
// teste de mesa
// a = 5.0 > 17,5
// b = 7.1  > 53,25
// media = 6,43181
var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var media = ((a * 3.5) + (b * 7.5)) / 11;
console.log("MEDIA = " + media.toFixed(5));
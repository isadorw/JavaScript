var input =  require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var distancia = parseInt(lines.shift());

var tempo_min = distancia * 2;

console.log(tempo_min + " minutos");
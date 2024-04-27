var input =  require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var tempo_gasto = parseFloat(lines.shift());
var vel_media = parseFloat(lines.shift());

var l_aut = 12;

var qtd_litros = (vel_media / l_aut) * tempo_gasto;

console.log(qtd_litros.toFixed(3));
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// linha 1
var l1 = lines[0].split(" ");
var cod_1 = l1[0];
var num_1 = parseFloat(l1[1]);
var v_1 = parseFloat(l1[2]);

var venda_1 = num_1 * v_1;

// linha 2
var l2 = lines[1].split(" ");
var cod_2 = l2[0];
var num_2 = parseFloat(l2[1]);
var v_2 = parseFloat(l2[2]);

var venda_2 = num_2 * v_2;

total = venda_1 + venda_2;

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));
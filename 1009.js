var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = lines[0].trim();
var sal_fixo = parseFloat(lines[1]);
var m_total = parseFloat(lines[2]);

var total = (m_total * 0.15) + sal_fixo;

// console.log("Nome = ", nome);
// console.log("Salario fixo = R$ ", sal_fixo);
// console.log("Montante total de vendas = R$ ", m_total);
console.log("TOTAL = R$ " + total.toFixed(2));
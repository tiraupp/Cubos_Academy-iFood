const readlineSync = require("readline-sync");

let valorInicial =
    readlineSync.question("Informe o valor do capital inicial: ") * 1;
let valorFinal =
    readlineSync.question("Informe o valor total a ser pago: ") * 1;
let meses = readlineSync.question("Informe quantos meses: ");

let juros = (Math.pow(valorFinal / valorInicial, 1 / meses) - 1) * 100;

console.log(
    `O seu financiamento de R$${valorInicial.toFixed(
        2
    )} teve uma taxa de juros de ${juros.toFixed(
        3
    )}%, pois após ${meses} meses você teve que pagar R$${valorFinal.toFixed(
        2
    )}.`
);

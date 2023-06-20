const readlineSync = require("readline-sync");
let valorInicial = readlineSync.question("Informe o valor inicial: ");
let juros = readlineSync.question("Informe a taxa de juros mensal: ") / 100;
let tempo = readlineSync.question("Informe o período em meses: ");

let valorFinal = valorInicial * (1 + juros) ** tempo;

console.log(
    `O valor final acrescido os juros será de R$${valorFinal.toFixed(2)}.`
);



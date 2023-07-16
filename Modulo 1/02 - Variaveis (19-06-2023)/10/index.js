const readlineSync = require("readline-sync");

let a = readlineSync.question("Informe o valor do coeficiente A: ");
let b = readlineSync.question("Informe o valor do coeficiente B: ");
let c = readlineSync.question("Informe o valor do coeficiente C: ");

let delta = b ** 2 - 4 * a * c;

console.log(`O valor de delta é ${delta}.`);

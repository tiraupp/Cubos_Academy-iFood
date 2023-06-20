const readlineSync = require("readline-sync");
let x1 = readlineSync.question("Informe a cordenada X do primeiro ponto: ");
let y1 = readlineSync.question("Informe a cordenada Y do primeiro ponto: ");
let x2 = readlineSync.question("Informe a cordenada X do segundo ponto: ");
let y2 = readlineSync.question("Informe a cordenada Y do segundo ponto: ");

let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(`A distância entre esses 2 pontos dados é de ${distancia}.`);

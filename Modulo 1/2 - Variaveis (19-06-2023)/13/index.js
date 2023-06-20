const readlineSync = require("readline-sync");

let raio = readlineSync.question("Informe o raio do cilindro: ") * 1;
let altura = readlineSync.question("Informe a altura do cilindro: ") * 1;

let areaTotal = 2 * raio * (raio + altura);

console.log(`A área total do cilindro é ${areaTotal}PI`);

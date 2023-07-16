const readlineSync = require("readline-sync");

let raio = readlineSync.question("Informe o raio do círculo: ");

let comprimento = 2 * Math.PI * raio;
let area = Math.PI * raio ** 2;

console.log(
    `Para um círculo com raio de ${raio}, o comprimento do círculo será ${comprimento.toFixed(
        1
    )} e a área do círculo será ${area.toFixed(2)}.`
);

const readlineSync = require("readline-sync");

let diametro = readlineSync.question("Informe o valor do diametro em cm: ");
let raio = diametro / 2;
let volume = (4 * raio ** 3) / 3;

console.log(
    `O volume de uma esfera de raio ${raio} é ${volume.toFixed(
        2
    )}PI, equivalente a ${volume * Math.PI}cm³`
);

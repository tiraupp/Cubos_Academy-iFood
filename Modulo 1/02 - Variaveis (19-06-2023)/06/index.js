const readlineSync = require("readline-sync");
let distanciaPercorrida = readlineSync.question(
    "Informe a distância em metros percorrida pelo atleta: "
);
let tempo = readlineSync.question(
    "Informe o tempo em segundos gasto pelo atleta: "
);

let velocidade = (distanciaPercorrida / tempo) * 3.6;

console.log(
    `A velocidade média do atleta foi de ${velocidade.toFixed(2)}km/h.`
);


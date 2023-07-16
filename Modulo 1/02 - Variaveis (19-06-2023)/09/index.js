const readlineSync = require("readline-sync");

let poligono = readlineSync.question(
    "Informe a quantidade de lados do polígono: "
);

let soma = (poligono - 2) * 180;
let angulo = soma / poligono;

console.log(
    `O valor da soma dos ângulos internos é ${soma}º e o valor de cada ângulo do polígono é ${angulo}º.`
);

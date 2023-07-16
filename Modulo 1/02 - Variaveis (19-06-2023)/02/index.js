const readlineSync = require("readline-sync");
let fahrenheit = readlineSync.question(
    "Informe a temperatura em Fahrenheit(ºF) em sua cidade: "
);

let celcius = (fahrenheit - 32) * (5 / 9);

console.log(`No momento está fazendo ${celcius.toFixed(1)}ºC em sua cidade.`);

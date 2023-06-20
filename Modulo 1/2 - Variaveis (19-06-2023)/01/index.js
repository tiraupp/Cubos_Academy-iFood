const readlineSync = require("readline-sync");
let peso = readlineSync.question("Informe seu peso: ");
let altura = readlineSync.question("Informe sua altura: ");

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(`Seu IMC é ${imc}, classificação: Magreza.`);
} else if (imc < 24.9) {
    console.log(`Seu IMC é ${imc}, classificação: Normal.`);
} else if (imc < 29.9) {
    console.log(`Seu IMC é ${imc}, classificação: Sobrepeso.`);
} else if (imc < 39.9) {
    console.log(`Seu IMC é ${imc}, classificação: Obesidade.`);
} else {
    console.log(`Seu IMC é ${imc}, classificação: Obesidade Grave.`);
}

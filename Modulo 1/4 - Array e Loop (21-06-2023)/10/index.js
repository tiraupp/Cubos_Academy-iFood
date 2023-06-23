const numeros = [3, 99, 1, 8, 11, 7, 1500];

let maiorNumero = 0;
let menorNumero = 999999999;

for (let numero of numeros) {
    maiorNumero = numero > maiorNumero ? numero : maiorNumero;
    menorNumero = numero < menorNumero ? numero : menorNumero;
}

console.log(maiorNumero - menorNumero);

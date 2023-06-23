const numeros = [3, 24, 1, 8, 11, 7, 15];

let maiorNumero = 0;

for (let numero of numeros) {
    maiorNumero = numero > maiorNumero ? numero : maiorNumero;
}

console.log(maiorNumero);

const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((acumulador, atual) => {
    let maior = acumulador;
    if (atual > maior) {
        maior = atual;
    }
    return maior;
});

console.log(maiorNumero);

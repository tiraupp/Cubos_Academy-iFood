const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const maiorNome = cidades.reduce((acumulador, atual) => {
    let maior = acumulador;
    if (atual.length > maior.length) {
        maior = atual;
    }
    return maior;
});

console.log(maiorNome);

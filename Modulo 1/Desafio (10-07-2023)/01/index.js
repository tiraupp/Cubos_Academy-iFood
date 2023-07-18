function solucao(lista) {
    let soma = 0;
    for (let valor of lista) {
        soma += valor;
    }
    console.log(soma);
}

const entrada = [1, 2, 3, 4];

solucao(entrada);

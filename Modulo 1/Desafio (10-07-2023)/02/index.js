function solucao(lista) {
    let soma = 0;
    for (let valor of lista) {
        soma += valor;
    }
    console.log(soma / lista.length);
}

const entrada = [2, 3, 4];

solucao(entrada);

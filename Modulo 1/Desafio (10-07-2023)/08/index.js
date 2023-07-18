function solucao(numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    let posicaoGoleiro =
        soma % numeros.length === 0 ? numeros.length : soma % numeros.length;
    console.log(posicaoGoleiro);
}

solucao([1, 3, 2, 1]);
solucao([1, 1, 1]);

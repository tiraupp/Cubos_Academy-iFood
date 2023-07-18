function solucao(min, max, valores) {
    const valorJogadoresAutorizado = [];
    for (let valor of valores) {
        if (valor >= min && valor <= max) {
            valorJogadoresAutorizado.push(valor);
        }
    }
    console.log(valorJogadoresAutorizado);
}

solucao(2, 10, [0, 5, 6, 10, 11]);
solucao(1, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

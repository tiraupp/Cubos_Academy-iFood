function solucao(precos) {
    let valorTotal = 0;
    let menorValor = precos[0];
    let valorDesconto = 0;
    for (let valor of precos) {
        valorTotal += valor;
        if (valor < menorValor) {
            menorValor = valor;
        }
    }
    if (precos.length > 2) {
        valorDesconto = menorValor / 2;
    }
    console.log(valorTotal - valorDesconto);
}

solucao([150, 50]);
solucao([100, 100, 100]);
solucao([200, 150, 50, 100]);

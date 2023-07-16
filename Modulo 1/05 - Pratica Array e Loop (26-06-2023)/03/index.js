const precos = [100, 500, 100, 200, 50];
//const precos = [100, 100, 100, 50];

solucao(precos);

function solucao(precos) {
    let valorTotal = 0;
    let menorValor = 9999999999999999999;
    if (precos.length < 5) {
        for (let preco of precos) {
            valorTotal += preco;
        }
    } else {
        for (let preco of precos) {
            valorTotal += preco;
            if (preco < menorValor) {
                menorValor = preco;
            }
        }
        valorTotal -= menorValor;
    }
    console.log(valorTotal);
}

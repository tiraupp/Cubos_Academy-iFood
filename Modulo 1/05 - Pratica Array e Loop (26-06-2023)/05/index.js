//const precos = [5, 10, 3];
const precos = [30, 10, 54, 76, 1, 4, 35];

solucao(precos);

function solucao(precos) {
    let diferenca = Infinity;
    for (let i = 0; i < precos.length; i++) {
        for (let j = i + 1; j < precos.length; j++) {
            let comparacao;
            if (precos[i] > precos[j]) {
                comparacao = precos[i] - precos[j];
                if (comparacao < diferenca) {
                    diferenca = comparacao;
                }
            }
        }
    }
    console.log(diferenca);
}

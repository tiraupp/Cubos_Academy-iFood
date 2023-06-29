const resultados = ["V", "E", "V", "E"];

solucao(resultados);

function solucao(resultados) {
    let pontos = 0;
    for (let jogo of resultados) {
        if (jogo === "V") {
            pontos += 3;
        } else if (jogo === "E") {
            pontos += 1;
        }
    }
    console.log(pontos);
}

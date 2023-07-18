function solucao(carta) {
    const cartas = ["Q", "J", "K", "A", "2", "3"];
    const posicaoCarta = cartas.indexOf(carta);
    if (posicaoCarta === cartas.length - 1) {
        console.log(cartas[0]);
    } else {
        console.log(cartas[posicaoCarta + 1]);
    }
}

solucao("Q");

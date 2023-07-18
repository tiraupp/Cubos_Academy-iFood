function solucao(texto) {
    const palavras = texto.trim().split(" ");
    let contadorPalavras = 0;
    for (let palavra of palavras) {
        if (palavra != "") {
            contadorPalavras++;
        }
    }
    console.log(contadorPalavras);
}

solucao("Um texto qualquer");
solucao(
    "Cuidado, pois  usuarios as vezes deixam espacos vazios no fim do texto sem querer"
);

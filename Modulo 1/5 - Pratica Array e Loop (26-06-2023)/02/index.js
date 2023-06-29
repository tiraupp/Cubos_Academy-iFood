const letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];

solucao(letra, palavras);

function solucao(letra, palavras) {
    let contador = 0;
    for (let palavra of palavras) {
        if (palavra[0] !== letra) {
            contador++;
        }
    }
    console.log(contador);
}

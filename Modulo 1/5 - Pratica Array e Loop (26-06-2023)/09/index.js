const palpite = "a";
const palavra = "abelha";

solucao(palpite, palavra);

function solucao(palpite, palavra) {
    let contador = 0;
    for (let caracter of palavra) {
        if (caracter === palpite) {
            contador++;
        }
    }
    console.log(contador);
}

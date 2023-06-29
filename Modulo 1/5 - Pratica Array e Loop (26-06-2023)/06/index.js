const primeiraLetra = "c";
const segundaLetra = "v";
const palavras = ["aveia", "manha", "ave"];

solucao(primeiraLetra, segundaLetra, palavras);

function solucao(primeiraLetra, segundaLetra, palavras) {
    let encontrou = false;
    for (let item of palavras) {
        if (item[0] === primeiraLetra) {
            if (item[1] === segundaLetra) {
                console.log(item);
                encontrou = true;
            }
        }
    }
    if (!encontrou) {
        console.log("NENHUMA");
    }
}

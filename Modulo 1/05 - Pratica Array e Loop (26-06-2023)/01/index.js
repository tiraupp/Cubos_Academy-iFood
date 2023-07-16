const stringCorrompida = "*Canis %lupus )familiaris";

solucao(stringCorrompida);

function solucao(stringCorrompida) {
    let stringPurificada;
    for (let leitura of stringCorrompida) {
        if (
            leitura === "!" ||
            leitura === "@" ||
            leitura === "#" ||
            leitura === "$" ||
            leitura === "%" ||
            leitura === "&" ||
            leitura === "*" ||
            leitura === "(" ||
            leitura === ")" ||
            leitura === "."
        ) {
            //ignora
        } else {
            if (stringPurificada) {
                stringPurificada += leitura;
            } else {
                stringPurificada = leitura;
            }
        }
    }
    console.log(stringPurificada);
}

function solucao(input) {
    const entrada = input.split("\n");
    let posicao = 0;
    let senha = "";
    for (let caracter of entrada[0]) {
        if (entrada[1].includes(caracter, posicao)) {
            senha += caracter;
            posicao = entrada[1].indexOf(caracter, posicao);
        }
    }
    if (entrada[0] === senha) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }
}

solucao(`cubos
cuggbyos`);
solucao(`cubos
ewvelrabsocaeln`);

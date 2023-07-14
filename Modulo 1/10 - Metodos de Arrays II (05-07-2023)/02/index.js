const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const verificarTamanhoPalavras = (palavras) => {
    resultado = palavras.some((palavra) => {
        return palavra.length > 4;
    });
    if (resultado) {
        console.log("existe palavra inválida!");
    } else {
        console.log("Array validado!");
    }
};

verificarTamanhoPalavras(palavras);

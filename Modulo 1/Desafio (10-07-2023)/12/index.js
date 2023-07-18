function solucao(input) {
    const novoTexto = input.trim().split(/\s+/);
    let textoFormatado = "";
    for (let palavra of novoTexto) {
        if (palavra[0] === palavra[0].toLowerCase()) {
            if (palavra[1] !== "") {
                if (palavra.slice(1) === palavra.slice(1).toUpperCase()) {
                    textoFormatado +=
                        palavra[0].toUpperCase() +
                        palavra.slice(1).toLowerCase() +
                        " ";
                } else {
                    textoFormatado += palavra + " ";
                }
            } else {
                textoFormatado += palavra.toLowerCase() + " ";
            }
        } else {
            if (palavra[0] === palavra[0].toUpperCase()) {
                if (palavra[1] !== "") {
                    if (palavra.slice(1) === palavra.slice(1).toUpperCase()) {
                        textoFormatado += palavra.toLowerCase() + " ";
                    } else {
                        textoFormatado += palavra + " ";
                    }
                } else {
                    textoFormatado += palavra.toLowerCase() + " ";
                }
            }
        }
    }
    console.log(textoFormatado.trim());
}

solucao("cAPS");
solucao("lock");
solucao("CAPS");

const nomeArquivo = "Foto da Familia.pdf";

const extensoesPermitidas = ["jpg", "jpeg", "gif", "png"];

function validarArquivo(nomeArquivo) {
    const posicaoExtensao = nomeArquivo.lastIndexOf(".");
    const extensao = nomeArquivo.slice(posicaoExtensao + 1);
    if (extensoesPermitidas.includes(extensao)) {
        return "Arquivo válido";
    } else {
        return "Arquivo inválido";
    }
}

console.log(validarArquivo(nomeArquivo));
console.log(validarArquivo("Cubos Academy.jpg"));
console.log(validarArquivo("Modulo 1.gif"));

const cpf = "011.022.033-44";

function removeCaracter(cpf) {
    let cpfFormatado = "";
    let cpfSemPonto = String(cpf).split(".");

    for (let item of cpfSemPonto) {
      cpfFormatado += item;
    }
    let cpfSemIfem = cpfFormatado.split("-");
    cpfFormatado = "";
    for (let item of cpfSemIfem) {
      cpfFormatado += item;
    }
    return cpfFormatado;
}

console.log(removeCaracter(cpf));
console.log(removeCaracter("011.022.03344"));
console.log(removeCaracter("011022033-44"));
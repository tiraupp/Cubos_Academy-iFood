function validarCpf(cpf) {
    let cpfFormatado = "";
    if (cpf.length === 11) {
        cpfFormatado +=
            cpf.slice(0, 3) +
            "." +
            cpf.slice(3, 6) +
            "." +
            cpf.slice(6, 9) +
            "-" +
            cpf.slice(-2);
    } else {
        return "CPF Inválido";
    }
    return cpfFormatado;
}

function validarCnpj(cnpj) {
    let cnpjFormatado = "";
    if (cnpj.length === 14) {
        cnpjFormatado +=
            cnpj.slice(0, 2) +
            "." +
            cnpj.slice(2, 5) +
            "." +
            cnpj.slice(5, 8) +
            "/" +
            cnpj.slice(8, 12) +
            "-" +
            cnpj.slice(-2);
    } else {
        return "CNPJ Inválido";
    }
    return cnpjFormatado;
}

console.log(validarCpf("12345678900"));
console.log(validarCnpj("12345678000199"));

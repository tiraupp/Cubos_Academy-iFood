let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

const formulario = [];

function criarFormulario(identificador, nome, email) {
    formulario.push({
        identificador: formatarId(identificador),
        nome: formatarNome(nome),
        email: formatarEmail(email),
    });
}

function formatarId(identificador) {
    identificador = String(identificador).padStart(6, "0");
    return identificador;
}

function formatarNome(nome) {
    let nomeFormatado = " ";
    let nomes = nome.trim().split(" ");
    for (let item of nomes) {
        nomeFormatado += item[0].toUpperCase() + item.slice(1) + " ";
    }
    return nomeFormatado.trim();
}

function formatarEmail(email) {
    return email.trim();
}
criarFormulario(identificador, nome, email);
criarFormulario(1, " tiago raupp ", " tiraupp@gmail.com    ");
console.log(formulario);

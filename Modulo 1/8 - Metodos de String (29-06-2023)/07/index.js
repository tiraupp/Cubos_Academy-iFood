const email = "aluno@cubos.academy";

function emailFormatado(email) {
    let emailValido = email.trim();
    let retornoEmail = emailValido;
    if (emailValido[0] !== ".") {
        let indiceArroba = emailValido.indexOf("@");
        if (emailValido.includes(".", indiceArroba)) {
            if (!emailValido.includes(".", emailValido.length - 1)) {
                retornoEmail = emailValido;
            } else {
                retornoEmail = "E-mail inválido";
            }
        } else {
            retornoEmail = "E-mail inválido";
        }
    } else {
        retornoEmail = "E-mail inválido";
    }
    return retornoEmail;
}

console.log(emailFormatado(email));
console.log(emailFormatado("   .tiraupp@gmail.com"));
console.log(emailFormatado("tiraupp@gmail.com.   "));
console.log(emailFormatado(".tiraupp@gmailcom."));
console.log(emailFormatado(".tirauppgmail.com"));
console.log(emailFormatado("tiraupp@gmail.com."));
console.log(emailFormatado("tiraupp@gmail.com"));
console.log(emailFormatado("  tiraupp@gmail.com   "));

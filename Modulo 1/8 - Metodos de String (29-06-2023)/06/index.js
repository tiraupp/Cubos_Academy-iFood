const celular = 71999918888;

function formatarCelular(celular) {
    const numeroCelular = String(celular);
    let celularFormatado = "";
    switch (numeroCelular.length) {
        case 11:
            celularFormatado = `(${numeroCelular.slice(
                0,
                2
            )}) ${numeroCelular.slice(2, 3)} ${numeroCelular.slice(
                3,
                7
            )}-${numeroCelular.slice(7)}`;
            break;
        case 10:
            celularFormatado = `(${numeroCelular.slice(
                0,
                2
            )}) 9 ${numeroCelular.slice(2, 6)}-${numeroCelular.slice(6)}`;
            break;
        case 9:
            celularFormatado = `${numeroCelular.slice(
                0,
                1
            )} ${numeroCelular.slice(1, 5)}-${numeroCelular.slice(5)}`;
            break;
        case 8:
            celularFormatado = `9 ${numeroCelular.slice(
                0,
                4
            )}-${numeroCelular.slice(4)}`;
            break;
        default:
            celularFormatado = "Número celular inválido!";
            break;
    }
    return celularFormatado;
}

console.log(formatarCelular(celular));
console.log(formatarCelular(4899799419));
console.log(formatarCelular(999799419));
console.log(formatarCelular(99799419));
console.log(formatarCelular(799419));

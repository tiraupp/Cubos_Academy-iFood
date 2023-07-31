const { differenceInHours } = require("date-fns");

const dataInicial = new Date(2023, 6, 31);

const validarPromocao = (dataInicial, dataUtilizacao) => {
    if (differenceInHours(dataUtilizacao, dataInicial) < 24) {
        return true;
    } else {
        return false;
    }
};

console.log(
    validarPromocao(dataInicial, new Date(2023, 6, 31, 23, 59, 59, 999))
);
console.log(validarPromocao(dataInicial, new Date(2023, 7, 1)));

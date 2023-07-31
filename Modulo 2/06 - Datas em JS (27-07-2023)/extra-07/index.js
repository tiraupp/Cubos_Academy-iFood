const { differenceInHours, differenceInDays } = require("date-fns");

const dataInicial = new Date(2023, 6, 31, 0, 0, 0, 1);

const validarPromocao = (dataInicial, dataUtilizacao) => {
    if (differenceInDays(dataUtilizacao, dataInicial) < 31) {
        return true;
    } else {
        return false;
    }
};

console.log(
    validarPromocao(dataInicial, new Date(2023, 7, 1, 23, 59, 59, 999))
);
console.log(validarPromocao(dataInicial, new Date(2023, 7, 31, 1)));

const { format } = require("date-fns");

const formatacaoA = (data) => {
    return format(data, "dd 'de' MMMM 'de' yyyy");
};
const formatacaoB = (data) => {
    return format(data, "dd/MM/yyyy");
};
const formatacaoC = (data) => {
    return format(data, "d MMM");
};
const formatacaoD = (data) => {
    return format(data, "dd MMM yyyy");
};
const formatacaoE = (data) => {
    return format(data, "dd 'de' MMM 'de' yyyy");
};
const formatacaoF = (data) => {
    return format(data, "dd/MMM");
};

console.log(formatacaoA(new Date(2020, 9, 5)));
console.log(formatacaoB(new Date(2020, 9, 5)));
console.log(formatacaoC(new Date(2020, 9, 5)));
console.log(formatacaoD(new Date(2020, 9, 5)));
console.log(formatacaoE(new Date(2020, 9, 5)));
console.log(formatacaoF(new Date(2020, 9, 5)));

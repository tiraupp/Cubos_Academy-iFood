const readlineSync = require("readline-sync");
const transmissao = 4;
let populacaoInicial = readlineSync.question(
    "Informe quantas pessoas estão infectadas: "
);
let tempo = readlineSync.question("Informe quantos dias de infecção: ");

let populacaoInfectada = populacaoInicial * transmissao ** (tempo / 7);

console.log(
    `Após ${tempo} dias, o total de pessoas infectadas será de ${populacaoInfectada}, uma vez que inicialmente existiam ${populacaoInicial} pessoas infectadas.`
);

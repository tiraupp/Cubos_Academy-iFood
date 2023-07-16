const readlineSync = require("readline-sync");
let valorDisponivel = readlineSync.question(
    "Informe o valor que você tem disponível no momento: "
);
let valorProduto = readlineSync.question("Informe o valor do produto: ");

let percentualDesconto = (valorDisponivel * 100) / valorProduto;

console.log(
    `O percentual de desconto necessério é de ${percentualDesconto.toFixed(
        2
    )}%, equivalente a R$${(
        valorProduto -
        (valorProduto * percentualDesconto) / 100
    ).toFixed(2)} de desconto.`
);

//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const parcelasRestante =
    quantidadeDoParcelamento -
    valorPago / (valorDoProduto / 100 / quantidadeDoParcelamento);

const valorRestante = (valorDoProduto / 100 - valorPago) / parcelasRestante;

console.log(
    `Restam ${parcelasRestante} parcelas de R$${valorRestante.toFixed(2)}`
);

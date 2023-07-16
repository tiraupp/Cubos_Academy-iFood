//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

switch (tipoDePagamento) {
    case "credito":
        console.log(
            `Valor a ser pago: R$${(
                (valorDoProduto - valorDoProduto * 0.05) /
                100
            ).toFixed(2)}`
        );
        break;
    case "cheque":
        console.log(
            `Valor a ser pago: R$${(
                (valorDoProduto - valorDoProduto * 0.03) /
                100
            ).toFixed(2)}`
        );
        break;
    case ("debito", "dinheiro"):
        console.log(
            `Valor a ser pago: R$${(
                (valorDoProduto - valorDoProduto * 0.1) /
                100
            ).toFixed(2)}`
        );
        break;

    default:
        console.log("Tipo de pagamento inválido!");
        break;
}

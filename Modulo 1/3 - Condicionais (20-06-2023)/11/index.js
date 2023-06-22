//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 1_500_00;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10_000_00;

let valorParcela;
let mensagem;

if (rendaMensalEmCentavos > 2_000_00) {
    if (mesesDecorridos <= 60) {
        if (totalJaPagoPeloAluno < 18_000_00) {
            valorParcela = (rendaMensalEmCentavos * 18) / 10000;
            mensagem = `O valor da parcela desse mês é R$ ${valorParcela.toFixed(
                2
            )} reais`;
        } else {
            mensagem =
                "O valor da parcela desse mês é R$ 0 reais. Pois o Aluno já quitou o contrato de R$ 18.000,00 reais.";
        }
    } else {
        mensagem =
            "O valor da parcela desse mês é R$ 0 reais. Pois já ultrapassou o prazo do contrato de 60 meses.";
    }
} else {
    mensagem =
        "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2.000,00 reais.";
}

console.log(mensagem);

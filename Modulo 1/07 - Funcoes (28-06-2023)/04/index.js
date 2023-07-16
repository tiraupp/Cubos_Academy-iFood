const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor: valor,
        });
        console.log(
            `Depósito de R$ ${(valor / 100).toFixed(
                2
            )} realizado para o cliente: ${this.nome}.`
        );
    },
    sacar: function (valor) {
        if (this.saldo < valor) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}.`);
        } else {
            this.saldo -= valor;
            this.historicos.push({
                tipo: "Saque",
                valor: valor,
            });
            console.log(
                `Saque de R$ ${(valor / 100).toFixed(
                    2
                )} realizado para o cliente: ${this.nome}.`
            );
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${(
            this.saldo / 100
        ).toFixed(2)}
Histórico: `);
        for (let historico of this.historicos) {
            console.log(
                `${historico.tipo} de R$${(historico.valor / 100).toFixed(2)}`
            );
        }
    },
};

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();

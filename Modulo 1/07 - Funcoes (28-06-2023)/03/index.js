const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000,
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000,
        },
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}
Total de itens: ${this.calcularTotalDeItens()} ${
            this.calcularTotalDeItens() > 1 ? "itens" : "item"
        }
Total a pagar: R$${(this.calcularTotalAPagar() / 100).toFixed(2)}`);
    },
    addProduto: function (novoItem) {
        let itemExistente = false;
        for (let item of this.produtos) {
            if (item.id === novoItem.id) {
                item.qtd += novoItem.qtd;
                itemExistente = true;
            }
        }
        if (!itemExistente) {
            this.produtos.push(novoItem);
        }
    },
    imprimirDetalhes: function () {
        let contador = 1;
        console.log(`Cliente: ${this.nomeDoCliente}`);
        for (let item of this.produtos) {
            console.log(
                `Item ${contador} - ${item.nome} - ${item.qtd} und - R$ ${(
                    (item.precoUnit * item.qtd) /
                    100
                ).toFixed(2)}`
            );
            contador++;
        }
        console.log(`Total de itens: ${this.calcularTotalDeItens()} ${
            this.calcularTotalDeItens() > 1 ? "itens" : "item"
        }
Total: R$${(this.calcularTotalAPagar() / 100).toFixed(2)}
Desconto de R$ ${(this.calcularDesconto() / 100).toFixed(2)}
Total a pagar: R$${(
            (this.calcularTotalAPagar() - this.calcularDesconto()) /
            100
        ).toFixed(2)} `);
    },
    calcularTotalDeItens: function () {
        let totalItens = 0;
        for (let item of this.produtos) {
            totalItens += item.qtd;
        }
        return totalItens;
    },
    calcularTotalAPagar: function () {
        let valorTotalItens = 0;
        for (let item of this.produtos) {
            valorTotalItens += item.precoUnit * item.qtd;
        }
        return valorTotalItens;
    },
    calcularDesconto: function () {
        let descontoPorItem = 0;
        let descontoPorValor = 0;
        let itemMaisBarato = Infinity;
        if (this.calcularTotalDeItens() > 4) {
            for (let item of this.produtos) {
                if (item.precoUnit < itemMaisBarato) {
                    itemMaisBarato = item.precoUnit;
                }
            }
            descontoPorItem = itemMaisBarato;
        }
        if (this.calcularTotalAPagar() > 10000) {
            descontoPorValor = this.calcularTotalAPagar() * 0.1;
        }
        if (descontoPorItem > descontoPorValor) {
            return descontoPorItem;
        } else {
            return descontoPorValor;
        }
    },
};

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000,
};

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000,
};

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
//carrinho.imprimirResumo();
carrinho.imprimirDetalhes();

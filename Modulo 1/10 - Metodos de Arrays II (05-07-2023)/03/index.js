const nomeUsuario = "João";
const palavras = ["arroz", "feijão", "carne", "vodka", "macarrão"];
const proibicoes = ["cerveja", "vodka"];

const listaCompras = (palavras, proibicoes) => {
    let resultado = 0;
    for (let proibidas of proibicoes) {
        resultado = palavras.some((item) => {
            return item === proibidas;
        });
    }
    if (resultado) {
        console.log(
            `revise sua lista, ${nomeUsuario}. possui bebida com venda proibida!`
        );
    } else {
        console.log(`tudo certo ${nomeUsuario}, vamos as compras! `);
    }
};
listaCompras(palavras, proibicoes);

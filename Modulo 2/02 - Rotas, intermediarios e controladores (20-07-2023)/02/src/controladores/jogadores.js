const jogadores = require("../bancoDeDados");
let contador = 0;
const proximoJogador = (req, res) => {
    if (jogadores.length === 0) {
        return res.send(`Não existe mais jogadores para jogar!`);
    }
    if (contador >= jogadores.length) {
        contador = 0;
    }
    res.send(`É a vez de ${jogadores[contador]} jogar!`);
    contador++;
};

const removerJogador = (req, res) => {
    const { indice } = req.query;
    if (!indice) {
        return res.send("índice não informado");
    }
    if (indice > jogadores.length - 1) {
        return res.send("Não existe jogador com o índice informado");
    }
    jogadores.splice(indice, 1);
    res.send(jogadores);
};

const adicionarJogador = (req, res) => {
    const { nome, indice } = req.query;
    if (!nome) {
        return res.send("Nome do jogador não informado.");
    }
    if (!indice) {
        jogadores.push(nome);
    } else {
        if (indice > jogadores.length) {
            return res.send(
                `O índice informado ${indice} não existe no array. Novo jogador não foi adicionado.`
            );
        } else {
            jogadores.splice(indice, 0, nome);
        }
    }
    res.send(jogadores);
};

module.exports = {
    proximoJogador,
    removerJogador,
    adicionarJogador,
};

const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let indice = 0;

const proximoJogador = (jogadores, indice) => {
    return jogadores[indice];
};

app.get("/proximoJogador", (req, res) => {
    res.send(`É a vez de ${proximoJogador(jogadores, indice)} jogar!`);
    if (indice >= jogadores.length - 1) {
        indice = 0;
    } else {
        indice++;
    }
});

app.listen(3000, () => {
    console.log("Servidor ativo, porta: 3000");
});

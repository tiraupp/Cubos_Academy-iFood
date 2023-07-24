const express = require("express");
const { proximoJogador, removerJogador, adicionarJogador } = require("./controladores/jogadores")

const app = express();



app.get("/", proximoJogador);
app.get("/remover", removerJogador);
app.get("/adicionar", adicionarJogador);

app.listen(8000);
const express = require("express");
const { enderecoEncontrado } = require("./controles/enderecoControle");
const { verificarCepValido } = require("./intermediarios");

const rotas = express();

rotas.get("/endereco/:cep", verificarCepValido, enderecoEncontrado);

module.exports = rotas;

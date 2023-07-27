const express = require("express");
const {
    listarProdutos,
    produtoPorId,
    calcularFrete,
} = require("./controles/produtosControle");
const { verificarIdValido, verificarCepValido } = require("./intermediarios");

const rotas = express();

rotas.get("/produtos", listarProdutos);
rotas.get("/produtos/:id", verificarIdValido, produtoPorId);
rotas.get(
    "/produtos/:id/frete/:cep",
    verificarIdValido,
    verificarCepValido,
    calcularFrete
);

module.exports = rotas;

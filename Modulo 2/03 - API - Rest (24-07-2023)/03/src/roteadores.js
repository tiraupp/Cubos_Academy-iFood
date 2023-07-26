const express = require("express");
const rotas = express();

const {
    verificarIdValido,
    propriedadesObrigatorias,
} = require("./intermediarios");

const {
    listarLivros,
    livroPorId,
    adicionarLivro,
    atualizarLivro,
    atualizarDadosLivro,
    removerLivro,
} = require("./controles/livros_Controler");

rotas.get("/livros", listarLivros);
rotas.get("/livros/:id", verificarIdValido, livroPorId);
rotas.post("/livros", propriedadesObrigatorias, adicionarLivro);
rotas.put(
    "/livros/:id",
    verificarIdValido,
    propriedadesObrigatorias,
    atualizarLivro
);
rotas.patch("/livros/:id", verificarIdValido, atualizarDadosLivro);
rotas.delete("/livros/:id", verificarIdValido, removerLivro);

module.exports = rotas;

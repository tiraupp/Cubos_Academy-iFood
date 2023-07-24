const roteador = require("express").Router();
const { mostrarImoveis, imovelPorId } = require("./controladores/imoveis");

roteador.get("/imoveis", mostrarImoveis);
roteador.get("/imoveis/:id", imovelPorId);

module.exports = roteador;

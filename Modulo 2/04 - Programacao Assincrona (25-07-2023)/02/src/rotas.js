const express = require("express");
const { detalhesPokemon, mostrarPokemons } = require("./controles/controles");
const { verificarIdValido } = require("./intermediarios");

const rotas = express();

rotas.get("/pokemons", mostrarPokemons);
rotas.get("/pokemons/:id", detalhesPokemon);

module.exports = rotas;

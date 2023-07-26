const express = require("express");
const rotas = express();

const {
    protecaoPorSenha,
    verificarIdValido,
    propriedadesObrigatorias,
    maiorIdade,
} = require("./intermediarios");

const {
    listarAlunos,
    alunoPorId,
    adicionarAluno,
    excluirAluno,
    atualizarAluno,
    atualizarDadosAluno
} = require("./controles/alunos");

rotas.use(protecaoPorSenha);

rotas.get("/alunos", listarAlunos);
rotas.get("/alunos/:id", verificarIdValido, alunoPorId);
rotas.post("/alunos", propriedadesObrigatorias, maiorIdade, adicionarAluno);
rotas.delete("/alunos/:id", verificarIdValido, excluirAluno);
rotas.patch("/alunos/:id", verificarIdValido, propriedadesObrigatorias, maiorIdade, atualizarAluno);
rotas.put("/alunos/:id", verificarIdValido, atualizarDadosAluno);

module.exports = rotas;

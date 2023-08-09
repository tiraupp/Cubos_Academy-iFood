const express = require("express");
const {
  listarContas,
  atualizarContas,
  abrirConta,
  encerrarConta,
  depositar,
  sacar,
  transferir,
  consultarSaldo,
  consultarExtrato,
} = require("../controladores/controladores");
const {
  verificarAcesso,
  verificarCamposObrigatorios,
  verificarIdValido,
} = require("../intermediarios/intermediarios");
const {
  logDepositos,
  logSaques,
  logTransferencias,
} = require("../controladores/logsControles");

const rotas = express();

rotas.get("/contas", verificarAcesso, listarContas);
rotas.post("/contas", verificarCamposObrigatorios, abrirConta);
rotas.put("/contas/:numeroConta/usuario", verificarIdValido, atualizarContas);
rotas.delete("/contas/:numeroConta", verificarIdValido, encerrarConta);
rotas.post("/transacoes/depositar", depositar);
rotas.post("/transacoes/sacar", sacar);
rotas.post("/transacoes/transferir", transferir);
rotas.get("/contas/saldo", consultarSaldo);
rotas.get("/contas/extrato", consultarExtrato);
rotas.get("/logs/depositos", verificarAcesso, logDepositos);
rotas.get("/logs/saques", verificarAcesso, logSaques);
rotas.get("/logs/transferencias", verificarAcesso, logTransferencias);

module.exports = {
  rotas,
};

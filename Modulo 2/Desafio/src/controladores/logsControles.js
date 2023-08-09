const {
  contas,
  saques,
  depositos,
  transferencias,
} = require("../bancodedados/bancodedados");

const logDepositos = (req, res) => {
  return res.status(201).json(depositos);
};

const logSaques = (req, res) => {
  return res.status(201).json(saques);
};

const logTransferencias = (req, res) => {
  return res.status(201).json(transferencias);
};

module.exports = {
  logDepositos,
  logSaques,
  logTransferencias,
};

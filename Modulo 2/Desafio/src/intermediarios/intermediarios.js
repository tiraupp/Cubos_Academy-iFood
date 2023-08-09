const { banco } = require("../bancodedados/bancodedados");
const {
  consultarNomeValido,
  consultarCpfValido,
  consultarNascimentoValido,
  consultarTelefoneValido,
  consultarEmailValido,
  consultarSenhaValida,
  consultarCpfExistente,
  consultarEmailExistente,
} = require("../utils/utils");

const verificarIdValido = (req, res, next) => {
  const { numeroConta } = req.params;
  if (Number(numeroConta) < 1 || isNaN(numeroConta)) {
    return res
      .status(400)
      .json({ mensagem: "ID da conta deve ser um número válido." });
  }
  next();
};

const verificarAcesso = (req, res, next) => {
  const { senha_banco } = req.query;
  if (!senha_banco) {
    return res.status(400).json({ mensagem: "Senha de acesso não informada." });
  }
  if (senha_banco !== banco.senha) {
    return res.status(401).json({ mensagem: "Senha de acesso incorreta." });
  }
  next();
};

const verificarCamposObrigatorios = (req, res, next) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  if (!nome || !consultarNomeValido(nome)) {
    return res
      .status(400)
      .json({ mensagem: "Nome do usuário deve ser informado ou é inválido." });
  }
  if (consultarCpfExistente(cpf)) {
    return res.status(404).json({ mensagem: "CPF já existente." });
  }
  if (!cpf || !consultarCpfValido(cpf)) {
    return res
      .status(400)
      .json({ mensagem: "CPF do usuário deve ser informado ou é iválido." });
  }
  if (!data_nascimento || !consultarNascimentoValido(data_nascimento)) {
    return res.status(400).json({
      mensagem:
        "Data de nascimento do usuário deve ser informado ou é inválida.",
    });
  }
  if (!telefone || !consultarTelefoneValido(telefone)) {
    return res.status(400).json({
      mensagem: "Telefone do usuário deve ser informado ou é inválido.",
    });
  }
  if (consultarEmailExistente(email)) {
    return res.status(404).json({ mensagem: "Email já existente." });
  }
  if (!email || !consultarEmailValido(email)) {
    return res
      .status(400)
      .json({ mensagem: "Email do usuário deve ser informado ou é inválido." });
  }
  if (!senha || !consultarSenhaValida(senha)) {
    return res
      .status(400)
      .json({ mensagem: "Senha do usuário deve ser informada ou é inválida." });
  }
  next();
};

module.exports = {
  verificarIdValido,
  verificarAcesso,
  verificarCamposObrigatorios,
};

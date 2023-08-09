const {
  contas,
  saques,
  depositos,
  transferencias,
} = require("../bancodedados/bancodedados");

const {
  consultarCpfExistente,
  consultarEmailExistente,
  consultarNomeValido,
  consultarCpfValido,
  consultarNascimentoValido,
  consultarTelefoneValido,
  consultarEmailValido,
  consultarSenhaValida,
  gravarData,
  buscarConta,
} = require("../utils/utils");
let numeroConta = 1;

const listarContas = (req, res) => {
  return res.status(200).json(contas);
};

const abrirConta = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  const novaConta = {
    numero: String(numeroConta++),
    saldo: 0,
    usuario: {
      nome: nome.trim(),
      cpf: cpf.trim(),
      data_nascimento: data_nascimento.trim(),
      telefone: telefone.trim(),
      email: email.trim(),
      senha: senha.trim(),
    },
  };
  contas.push(novaConta);
  return res.status(201).json(novaConta);
};

const atualizarContas = (req, res) => {
  const { numeroConta } = req.params;
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  if (!nome && !cpf && !data_nascimento && !telefone && !email && !senha) {
    return res
      .status(400)
      .json({ mensagem: "Nenhuma informação enviada para atualização." });
  }
  const conta = buscarConta(numeroConta);
  if (!conta) {
    return res.status(404).json({ mensagem: "Conta não encontrada." });
  }
  let atualizarNome = false;
  let atualizarCpf = false;
  let atualizarDataNascimento = false;
  let atualizarTelefone = false;
  let atualizarEmail = false;
  let atualizarSenha = false;
  if (nome) {
    if (consultarNomeValido(nome)) {
      atualizarNome = true;
    } else {
      return res.status(400).json({ mensagem: "Nome do usuário invádilo." });
    }
  }
  if (cpf) {
    if (cpf.trim() !== conta.usuario.cpf) {
      if (consultarCpfExistente(cpf)) {
        return res.status(404).json({ mensagem: "CPF já existente." });
      }
      if (consultarCpfValido(cpf)) {
        atualizarCpf = true;
      } else {
        return res.status(400).json({ mensagem: "CPF do usuário invádilo." });
      }
    }
  }
  if (data_nascimento) {
    if (consultarNascimentoValido(data_nascimento)) {
      atualizarDataNascimento = true;
    } else {
      return res
        .status(400)
        .json({ mensagem: "Data de nascimento do usuário invádila." });
    }
  }
  if (telefone) {
    if (consultarTelefoneValido(telefone)) {
      atualizarTelefone = true;
    } else {
      return res
        .status(400)
        .json({ mensagem: "Telefone do usuário invádilo." });
    }
  }
  if (email) {
    if (email.trim() !== conta.usuario.email) {
      if (consultarEmailExistente(email)) {
        return res.status(404).json({ mensagem: "Email já existente." });
      }
      if (consultarEmailValido(email)) {
        atualizarEmail = true;
      } else {
        return res.status(400).json({ mensagem: "Email do usuário invádilo." });
      }
    }
  }
  if (senha) {
    if (consultarSenhaValida(senha)) {
      atualizarSenha = true;
    } else {
      return res.status(400).json({ mensagem: "Senha do usuário invádila." });
    }
  }
  if (atualizarNome) {
    conta.usuario.nome = nome.trim();
  }
  if (atualizarCpf) {
    conta.usuario.cpf = cpf.trim();
  }
  if (atualizarDataNascimento) {
    conta.usuario.data_nascimento = data_nascimento.trim();
  }
  if (atualizarTelefone) {
    conta.usuario.telefone = telefone.trim();
  }
  if (atualizarEmail) {
    conta.usuario.email = email.trim();
  }
  if (atualizarSenha) {
    conta.usuario.senha = senha.trim();
  }
  return res.status(200).json({ mensagem: "Conta atualizada com sucesso." });
};

const encerrarConta = (req, res) => {
  const { numeroConta } = req.params;
  const conta = buscarConta(numeroConta);
  if (!conta) {
    return res.status(404).json({ mensagem: "Conta não encontrada." });
  }
  if (conta.saldo > 0) {
    return res.status(403).json({
      mensagem:
        "Conta possui saldo positivo, antes de encerrar deve sacar o valor.",
    });
  }
  if (conta.saldo < 0) {
    return res.status(403).json({
      mensagem:
        "Conta possui saldo negativo, antes de encerrar deve depositar o valor.",
    });
  }
  const indice = contas.findIndex((item) => {
    return numeroConta === item.numero;
  });
  contas.splice(indice, 1);
  return res.status(201).json({
    mensagem: "Conta encerrada com sucesso.",
  });
};

const depositar = (req, res) => {
  const { numero_conta, valor } = req.body;
  const conta = buscarConta(numero_conta);
  if (!conta) {
    return res.status(404).json({ mensagem: "Conta não encontrada." });
  }
  if (valor <= 0 || isNaN(valor)) {
    return res.status(400).json({ mensagem: "Valor para depósito inválido." });
  }
  conta.saldo += Number(valor);
  depositos.push({ data: gravarData(), numero_conta, valor });
  return res.status(201).json({
    mensagem: "Depósito efetuado com sucesso.",
  });
};

const sacar = (req, res) => {
  const { numero_conta, valor, senha } = req.body;
  if (!numero_conta || !valor || !senha) {
    return res.status(400).json({
      mensagem: "Número da conta, valor e senha devem ser informados.",
    });
  }
  const conta = buscarConta(numero_conta);
  if (!conta) {
    return res.status(404).json({ mensagem: "Conta não encontrada." });
  }
  if (conta.usuario.senha !== senha) {
    return res.status(403).json({ mensagem: "Senha do usuário invádila." });
  }
  if (isNaN(valor)) {
    return res.status(400).json({ mensagem: "Valor para saque inválido." });
  }
  if (valor > conta.saldo) {
    return res.status(400).json({ mensagem: "Saldo insuficiente." });
  }
  conta.saldo -= Number(valor);
  saques.push({ data: gravarData(), numero_conta, valor });
  return res.status(201).json({
    mensagem: "Saque efetuado com sucesso.",
  });
};

const transferir = (req, res) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;
  if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
    return res.status(400).json({
      mensagem: "Número da conta, valor e senha devem ser informados.",
    });
  }
  const conta_origem = buscarConta(numero_conta_origem);
  if (!conta_origem) {
    return res
      .status(404)
      .json({ mensagem: "Conta de origem não encontrada." });
  }
  if (conta_origem.usuario.senha !== senha) {
    return res.status(403).json({ mensagem: "Senha do usuário invádila." });
  }
  const conta_destino = buscarConta(numero_conta_destino);
  if (!conta_destino) {
    return res
      .status(404)
      .json({ mensagem: "Conta de destino não encontrada." });
  }
  if (numero_conta_origem === numero_conta_destino) {
    return res
      .status(400)
      .json({ mensagem: "Conta de origem e destino não devem ser a mesma." });
  }
  if (isNaN(valor)) {
    return res
      .status(400)
      .json({ mensagem: "Valor para transferência inválido." });
  }
  if (valor > conta_origem.saldo) {
    return res.status(400).json({ mensagem: "Saldo insuficiente." });
  }
  conta_origem.saldo -= Number(valor);
  conta_destino.saldo += Number(valor);
  transferencias.push({
    data: gravarData(),
    numero_conta_origem,
    numero_conta_destino,
    valor,
  });
  return res.status(201).json({
    mensagem: "Transferência efetuada com sucesso.",
  });
};

const consultarSaldo = (req, res) => {
  const { numero_conta, senha } = req.query;
  if (!numero_conta || !senha) {
    return res.status(400).json({
      mensagem: "Número da conta e senha devem ser informados.",
    });
  }
  const conta = buscarConta(numero_conta);
  if (!conta) {
    return res.status(404).json({ mensagem: "Conta não encontrada." });
  }
  if (conta.usuario.senha !== senha) {
    return res.status(403).json({ mensagem: "Senha do usuário invádila." });
  }
  return res.status(200).json(conta.saldo);
};

const consultarExtrato = (req, res) => {
  const { numero_conta, senha } = req.query;
  if (!numero_conta || !senha) {
    return res.status(400).json({
      mensagem: "Número da conta e senha devem ser informados.",
    });
  }
  const conta = buscarConta(numero_conta);
  if (!conta) {
    return res.status(404).json({ mensagem: "Conta não encontrada." });
  }
  if (conta.usuario.senha !== senha) {
    return res.status(403).json({ mensagem: "Senha do usuário invádila." });
  }
  const depositosEfetuado = depositos.filter((item) => {
    return item.numero_conta === conta.numero;
  });
  const saquesEfetuado = saques.filter((item) => {
    return item.numero_conta === conta.numero;
  });
  const transferenciasEnviadas = transferencias.filter((item) => {
    return item.numero_conta_origem === conta.numero;
  });
  const transferenciasRecebidas = transferencias.filter((item) => {
    return item.numero_conta_destino === conta.numero;
  });
  return res.status(200).json({
    depositos: depositosEfetuado,
    saques: saquesEfetuado,
    transferenciasEnviadas,
    transferenciasRecebidas,
  });
};

module.exports = {
  listarContas,
  abrirConta,
  atualizarContas,
  encerrarConta,
  depositar,
  sacar,
  transferir,
  consultarSaldo,
  consultarExtrato,
};

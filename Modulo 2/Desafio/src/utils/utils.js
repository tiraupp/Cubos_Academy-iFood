const { contas } = require("../bancodedados/bancodedados");

const buscarConta = (numeroConta) => {
  const conta = contas.find((item) => {
    return numeroConta === item.numero;
  });
  return conta;
};

const consultarCpfExistente = (cpf) => {
  const resulstado = contas.find((item) => {
    return cpf === item.usuario.cpf;
  });
  if (resulstado) {
    return true;
  }
  return false;
};
const consultarEmailExistente = (email) => {
  const resulstado = contas.find((item) => {
    return email.trim() === item.usuario.email;
  });
  if (resulstado) {
    return true;
  }
  return false;
};

const consultarNomeValido = (nome) => {
  const nomeConferido = nome.split("").filter((caracter) => {
    return caracter !== " ";
  });
  if (nomeConferido.join("") === "" || nome.trim().length < 4) {
    return false;
  }
  return true;
};

const consultarCpfValido = (cpf) => {
  const cpfConferido = cpf.split("").filter((caracter) => {
    return caracter !== " ";
  });
  if (cpfConferido.join("") === "" || cpf.length !== 11 || isNaN(cpf)) {
    return false;
  }
  return true;
};

const consultarNascimentoValido = (data_nascimento) => {
  const data_nascimentoConferido = data_nascimento
    .split("")
    .filter((caracter) => {
      return caracter !== " ";
    });
  if (
    data_nascimentoConferido.join("") === "" ||
    data_nascimento.length !== 10
  ) {
    return false;
  }
  return true;
};

const consultarTelefoneValido = (telefone) => {
  const telefoneConferido = telefone.split("").filter((caracter) => {
    return caracter !== " ";
  });
  if (
    telefoneConferido.join("") === "" ||
    telefone.length !== 11 ||
    isNaN(telefone)
  ) {
    return false;
  }
  return true;
};

const consultarEmailValido = (email) => {
  const emailConferido = email.split("").filter((caracter) => {
    return caracter !== " ";
  });
  const emailValido = email.trim();
  let retornoEmail = false;
  if (emailValido[0] !== ".") {
    const indiceArroba = emailValido.indexOf("@");
    if (indiceArroba > 0) {
      if (emailValido.includes(".", indiceArroba)) {
        if (!emailValido.includes("@", indiceArroba + 1)) {
          if (!emailValido.includes(".", emailValido.length - 1)) {
            retornoEmail = true;
          }
        }
      }
    }
  }
  if (emailConferido.join("") === "" || !retornoEmail) {
    return false;
  }
  return true;
};

const consultarSenhaValida = (senha) => {
  const senhaConferida = senha.split("").filter((caracter) => {
    return caracter !== " ";
  });
  if (
    senhaConferida.join("") === "" ||
    senha.trim().length !== 6 ||
    isNaN(senha)
  ) {
    return false;
  }
  return true;
};

const gravarData = () => {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  const horas = String(data.getHours()).padStart(2, "0");
  const minutos = String(data.getMinutes()).padStart(2, "0");
  const segundos = String(data.getSeconds()).padStart(2, "0");
  return (dataFormatada = `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}`);
};

module.exports = {
  buscarConta,
  consultarCpfExistente,
  consultarEmailExistente,
  consultarNomeValido,
  consultarCpfValido,
  consultarNascimentoValido,
  consultarTelefoneValido,
  consultarEmailValido,
  consultarSenhaValida,
  gravarData,
};

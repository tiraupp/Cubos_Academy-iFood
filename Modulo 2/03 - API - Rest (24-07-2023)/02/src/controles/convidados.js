const { convidados } = require("../dados/convidados");

const listarConvidados = (req, res) => {
    const { nome } = req.query;
    let nomeNaLista = false;
    if (nome) {
        nomeNaLista = convidados.some((item) => {
            return item.toUpperCase() === nome.toUpperCase();
        });
        if (nomeNaLista) {
            return res.status(200).json({
                mensagem: `${nome} está presente na lista de convidados.`,
            });
        } else {
            return res.status(404).json({
                mensagem: `${nome} não está na lista de convidados.`,
            });
        }
    }

    return res.status(200).json(convidados);
};

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;
    let nomeNaLista = false;
    const nomeConferido = nome
        ? nome.split("").filter((caracter) => {
              return caracter !== " ";
          })
        : "";
    if (!nome || nomeConferido.join("") === "") {
        return res
            .status(400)
            .json({ mensagem: "Nome do convidado deve ser informado." });
    }
    nomeNaLista = convidados.some((item) => {
        return item.toUpperCase() === nome.toUpperCase();
    });
    if (nomeNaLista) {
        return res.status(404).json({
            mensagem: `${nome} já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.`,
        });
    }
    convidados.push(nome);
    return res.status(404).json({
        mensagem: `${nome} adicionado na lista de convidados.`,
    });
};

const removerConvidado = (req, res) => {
    const { nome } = req.params;
    let indiceConvidado = 0;
    indiceConvidado = convidados.findIndex((item) => {
        return item.toUpperCase() === nome.toUpperCase();
    });
    if (indiceConvidado < 0) {
        return res.status(404).json({
            mensagem: `${nome} não existe na lista. Nenhum convidado foi removido.`,
        });
    }
    convidados.splice(indiceConvidado, 1);
    return res.status(404).json({
        mensagem: `${nome} removido.`,
    });
};

module.exports = {
    listarConvidados,
    adicionarConvidado,
    removerConvidado,
};

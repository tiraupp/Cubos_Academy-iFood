const seguranca = require("./dados/seguranca");
const {cursos} = require("./dados/dadosCursos");

const protecaoPorSenha = (req, res, next) => {
    const { senha } = req.query;
    if (!senha) {
        return res
            .status(401)
            .json({ mensagem: "Acesso negado. Senha não informada." });
    }
    if (senha !== seguranca) {
        return res
            .status(401)
            .json({ mensagem: "Acesso negado. Senha incorreta." });
    }
    next();
};

const verificarIdValido = (req, res, next) => {
    const { id } = req.params;
    if (Number(id) < 1 || isNaN(id)) {
        return res
            .status(400)
            .json({ mensagem: "ID deve ser um número válido." });
    }
    next();
};

const propriedadesObrigatorias = (req, res, next) => {
    const { nome, sobrenome, idade, curso } = req.body;
    const nomeConferido = nome ? nome.split("").filter((caracter) => {
        return caracter !== " ";
    }) : "";
    const sobrenomeConferido = sobrenome ? sobrenome.split("").filter((caracter) => {
        return caracter !== " ";
    }) : "";
    const cursoConferido = curso ? curso.split("").filter((caracter) => {
        return caracter !== " ";
    }) : "";
    if (!nome || nomeConferido.join("") === "") {
        return res
            .status(400)
            .json({ mensagem: "Nome do aluno deve ser informado." });
    }
    if (!sobrenome || sobrenomeConferido.join("") === "") {
        return res
            .status(400)
            .json({ mensagem: "Sobrenome do aluno deve ser informado." });
    }
    if (!idade) {
        return res
            .status(400)
            .json({ mensagem: "Idade do aluno deve ser informado." });
    }
    if (!curso || cursoConferido.join("") === "" || curso === " ") {
        return res
            .status(400)
            .json({ mensagem: "O curso deve ser informado." });
    }
    const cursoValido = cursos.some((item) => {
        return item.titulo === curso;
    })
    if (!cursoValido) {
        return res
            .status(400)
            .json({ mensagem: "O curso informado não é um curso válido." });
    }
    next();
};

const maiorIdade = (req, res, next) => {
    const { idade } = req.body;
    if (idade < 18) {
        return res
            .status(400)
            .json({ mensagem: "Aluno deve ser maior de idade" });
    }
    next();
};

module.exports = {
    protecaoPorSenha,
    verificarIdValido,
    propriedadesObrigatorias,
    maiorIdade,
};

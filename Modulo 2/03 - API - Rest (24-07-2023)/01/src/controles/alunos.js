const { alunos } = require("../dados/dadosAlunos");
let { idAluno } = require("../dados/dadosAlunos");

const listarAlunos = (req, res) => {
    return res.status(200).json(alunos);
};

const alunoPorId = (req, res) => {
    const { id } = req.params;
    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });
    if (!aluno) {
        return res
            .status(404)
            .json({ mensagem: "O aluno não foi encontrado." });
    }
    return res.status(200).json(aluno);
};

const adicionarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;
    const aluno = {
        id: idAluno++,
        nome: nome.trim(),
        sobrenome: sobrenome.trim(),
        idade,
        curso: curso.trim(),
    };
    alunos.push(aluno);
    return res.status(201).send();
};

const excluirAluno = (req, res) => {
    const { id } = req.params;
    const index = alunos.findIndex((aluno) => {
        return aluno.id === Number(id);
    });
    const aluno = alunos[index];
    if (!aluno) {
        return res
            .status(404)
            .json({ mensagem: "O aluno não foi encontrado." });
    }
    alunos.splice(index, 1);
    return res.status(201).json(aluno);
};

const atualizarAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;
    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });
    if (!aluno) {
        return res
            .status(404)
            .json({ mensagem: "O aluno não foi encontrado." });
    }
    aluno.nome = nome.trim();
    aluno.sobrenome = sobrenome.trim();
    aluno.idade = idade;
    aluno.curso = curso.trim();

    return res.status(201).send();
};

const atualizarDadosAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;
    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });
    if (!aluno) {
        return res
            .status(404)
            .json({ mensagem: "O aluno não foi encontrado." });
    }
    if (nome) {
        aluno.nome = nome.trim();
    }
    if (sobrenome) {
        aluno.sobrenome = sobrenome.trim();
    }
    if (idade) {
        aluno.idade = idade;
    }
    if (curso) {
        aluno.curso = curso.trim();
    }

    return res.status(201).send();
};

module.exports = {
    listarAlunos,
    alunoPorId,
    adicionarAluno,
    excluirAluno,
    atualizarAluno,
    atualizarDadosAluno,
};

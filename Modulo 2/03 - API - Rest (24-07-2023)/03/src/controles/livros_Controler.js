const { livros } = require("../dados/dadosLivros");
let { idLivros } = require("../dados/dadosLivros");

const listarLivros = (req, res) => {
    return res.status(200).json(livros);
};

const livroPorId = (req, res) => {
    const { id } = req.params;
    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });
    if (!livro) {
        return res
            .status(404)
            .json({ mensagem: "Não existe livro para o ID informado." });
    }
    return res.status(200).json(livro);
};

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;
    const livro = {
        id: idLivros++,
        titulo: titulo.trim(),
        autor: autor.trim(),
        ano,
        numPaginas,
    };
    livros.push(livro);
    return res.status(201).json(livro);
};

const removerLivro = (req, res) => {
    const { id } = req.params;
    const index = livros.findIndex((livro) => {
        return livro.id === Number(id);
    });
    const livro = livros[index];
    if (!livro) {
        return res
            .status(404)
            .json({
                mensagem:
                    "Não existe livro a ser removido para o ID informado.",
            });
    }
    livros.splice(index, 1);
    return res.status(201).json({ mensagem: "Livro removido." });
};

const atualizarLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;
    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });
    if (!livro) {
        return res.status(404).json({
            mensagem: "Não existe livro a ser substituído para o ID informado.",
        });
    }
    livro.titulo = titulo.trim();
    livro.autor = autor.trim();
    livro.ano = ano;
    livro.numPaginas = numPaginas;

    return res.status(201).json({ mensagem: "Livro substituído" });
};

const atualizarDadosLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;
    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });
    if (!livro) {
        return res.status(404).json({
            mensagem: "Não existe livro a ser alterado para o ID informado.",
        });
    }
    if (titulo) {
        livro.titulo = titulo.trim();
    }
    if (autor) {
        livro.autor = autor.trim();
    }
    if (ano) {
        livro.ano = ano;
    }
    if (numPaginas) {
        livro.numPaginas = numPaginas;
    }

    return res.status(201).json({ mensagem: "Livro substituído" });
};

module.exports = {
    listarLivros,
    livroPorId,
    adicionarLivro,
    atualizarLivro,
    atualizarDadosLivro,
    removerLivro,
};

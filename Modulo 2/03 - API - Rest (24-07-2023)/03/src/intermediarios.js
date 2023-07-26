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
    const { titulo, autor, ano, numPaginas } = req.body;
    const tituloConferido = titulo
        ? titulo.split("").filter((caracter) => {
              return caracter !== " ";
          })
        : "";
    const autorConferido = autor
        ? autor.split("").filter((caracter) => {
              return caracter !== " ";
          })
        : "";
    if (!titulo || tituloConferido.join("") === "") {
        return res
            .status(400)
            .json({ mensagem: "Titulo do livro deve ser informado." });
    }
    if (!autor || autorConferido.join("") === "") {
        return res
            .status(400)
            .json({ mensagem: "Autor do livro deve ser informado." });
    }
    if (!ano) {
        return res
            .status(400)
            .json({ mensagem: "Ano do livro deve ser informado." });
    }
    if (!numPaginas) {
        return res
            .status(400)
            .json({ mensagem: "O número de páginas deve ser informado." });
    }
    next();
};

module.exports = {
    verificarIdValido,
    propriedadesObrigatorias,
};

const verificarIdValido = (req, res, next) => {
    const { id } = req.params;
    if (Number(id) < 1 || isNaN(id)) {
        return res
            .status(400)
            .json({ mensagem: "ID do produto deve ser um número válido." });
    }
    next();
};

module.exports = {
    verificarIdValido,
};

const verificarCepValido = (req, res, next) => {
    const { cep } = req.params;
    if (Number(cep) < 1 || isNaN(cep)) {
        return res
            .status(400)
            .json({ mensagem: "Cep deve conter somente números." });
    }
    if (cep.length !== 8) {
        return res.status(400).json({ mensagem: "Cep deve conter 8 números." });
    }
    next();
};

module.exports = {
    verificarCepValido,
};

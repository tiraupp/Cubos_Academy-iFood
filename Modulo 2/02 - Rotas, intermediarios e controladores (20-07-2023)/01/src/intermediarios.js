const verificarNumeros = (req, res, next) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.send("Números não informado");
    }
    next();
};

module.exports = {
    verificarNumeros,
};

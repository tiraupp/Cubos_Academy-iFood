const imoveis = require("../bancoDedados");

const mostrarImoveis = (req, res) => {
    res.send(imoveis);
};

const imovelPorId = (req, res) => {
    const { id } = req.params;
    const resultado = imoveis.find((imovel) => {
        return imovel.id === Number(id);
    });
    resultado
        ? res.send(resultado)
        : res.send(`Nenhum imóvel encontrador com id ${id}.`);
};

module.exports = {
    mostrarImoveis,
    imovelPorId,
};

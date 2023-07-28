const { produtos } = require("../bancodedados/produtos");
const { getStateFromZipcode } = require("utils-playground");

const listarProdutos = (req, res) => {
    return res.status(200).json(produtos);
};

const produtoPorId = (req, res) => {
    const { id } = req.params;
    const produto = produtos.find((produto) => {
        return produto.id === Number(id);
    });
    if (!produto) {
        return res.status(404).json({
            mensagem: "O produto não foi encontrado para o ID informado.",
        });
    }
    return res.status(200).json(produto);
};

const calcularFrete = async (req, res) => {
    const { id, cep } = req.params;
    let valorFrete = 0;
    const produto = produtos.find((produto) => {
        return produto.id === Number(id);
    });
    if (!produto) {
        return res.status(404).json({
            mensagem: "O produto não foi encontrado para o ID informado.",
        });
    }
    try {
        const estado = await getStateFromZipcode(cep);
        if(!estado){
            return res.status(404).json({
                mensagem: "O cep informado não foi encontrado.",
            });
        }
        switch (estado) {
            case "BA":
            case "SE":
            case "AL":
            case "PE":
            case "PB":
                valorFrete = produto.valor * 0.1;
                break;
            case "SP":
            case "RJ":
                valorFrete = produto.valor * 0.15;
                break;
            default:
                valorFrete = produto.valor * 0.12;
                break;
        }
        return res.status(200).json({ produto, estado, valorFrete });
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    listarProdutos,
    produtoPorId,
    calcularFrete,
};

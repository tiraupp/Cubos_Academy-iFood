const { buscarEndereco } = require("utils-playground");
const fs = require("fs/promises");

const enderecoEncontrado = async (req, res) => {
    const { cep } = req.params;
    let endereco = "";
    try {
        endereco = await buscarEndereco(cep);
        if (!endereco) {
            return res.status(404).json({
                mensagem: "O cep informado não foi encontrado.",
            });
        }
        const enderecosRegistrados = await fs.readFile(
            "./03/src/bancodedados/enderecos.json"
        );
        const enderecoJson = JSON.parse(enderecosRegistrados);
        const verificarEndereco = enderecoJson.find((item) => {
            return item.cep === endereco.cep;
        });
        if (!verificarEndereco) {
            await enderecoJson.push(endereco);
            await fs.writeFile(
                "./03/src/bancodedados/enderecos.json",
                JSON.stringify(enderecoJson)
            );
        }

        return res.status(200).json({ endereco });
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    enderecoEncontrado,
};

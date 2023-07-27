const { listarPokemons, detalharPokemon } = require("utils-playground");

const mostrarPokemons = async (req, res) => {
    const { pagina } = req.query;
    if (pagina) {
        const resultado = await listarPokemons(Number(pagina));
        return res.status(200).json({ resultado });
    }
    const resultado = await listarPokemons();
    return res.status(200).json({ resultado });
};

const detalhesPokemon = async (req, res) => {
    const { id } = req.params;
    const argumento = isNaN(id) ? id : Number(id);
    const pokemon = await detalharPokemon(argumento).catch((erro) => {
        console.log(erro.message);
        return res.status(404).json(erro.message);
    });
    const detalhes = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species,
    };

    return res.status(200).json(detalhes);
};

module.exports = {
    mostrarPokemons,
    detalhesPokemon,
};

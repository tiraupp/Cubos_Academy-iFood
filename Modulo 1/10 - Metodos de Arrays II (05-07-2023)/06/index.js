const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const novaLista = (cidades) => {
    resultado = cidades.filter((item) => {
        return item.length < 9;
    });
    console.log(resultado.join(", "));
};

novaLista(cidades);

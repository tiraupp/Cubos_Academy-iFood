const enderecos = [
    { cep: "00111222", rua: "Rua dos Artistas" },
    { cep: "00111333", rua: "Rua Augusta" },
    { cep: "00222444", rua: "Avenida Paralela" },
    { cep: "11222333", rua: "Rua Carlos Gomes" },
];

const pesquisaCep = (enderecos, pesquisa) => {
    resultado = enderecos.find((endereco) => {
        return endereco.cep === pesquisa;
    });
    console.log(resultado.rua);
};

pesquisaCep(enderecos, "00222444");

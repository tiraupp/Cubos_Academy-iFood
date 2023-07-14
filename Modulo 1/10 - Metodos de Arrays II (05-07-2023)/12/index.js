const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const pesquisaUsuario = (pessoas, profissao, idade) => {
    const resultado = pessoas.filter((pessoa) => {
        return pessoa.profissao === profissao && pessoa.idade > idade;
    });
    console.log(`Usuários ${profissao} até ${idade}`);
    console.log(resultado);
};
const pesquisaUsuarioJovem = (pessoas, profissao) => {
    const resultado = pessoas.filter((pessoa) => {
        return pessoa.idade < 29;
    });
    console.log("Usuários jovens conforme IBGE(até 29 anos): ");
    console.log(resultado);
};

pesquisaUsuario(pessoas, "Programador", 20);
pesquisaUsuario(pessoas, "Jornalista", 30);

pesquisaUsuarioJovem(pessoas);

const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const verificaUsuarios = (usuarios) => {
    const novaLista = usuarios.filter((item) => {
        if (item.idade >= 18 && item.idade <= 65) {
            return {
                nome: item.nome,
                idade: item.idade,
                habilitado: item.habilitado,
            };
        }
    });
    const resultado = novaLista.every((item) => {
        return item.habilitado === true;
    });
    if (!resultado) {
        console.log("todos precisam estar habilitados");
    } else {
        console.log("todos passaram no teste");
    }
};

verificaUsuarios(usuarios);

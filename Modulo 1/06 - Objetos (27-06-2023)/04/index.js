const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idade >= 18) {
        usuarios[i].maior_idade = true;
    } else {
        usuarios[i].maior_idade = false;
    }
}

console.log(usuarios);

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

function econtrarDono(usuarios, nomePet) {
    let dono = "";
    for (let pet of usuarios) {
        if (pet.pets.includes(nomePet)) {
            dono = pet.nome;
        }
    }
    dono === ""
        ? console.log(`Que pena ${nomePet}, não encontramos seu dono(a).`)
        : console.log(`O dono(a) do(a) ${nomePet} é o(a) ${dono}.`);
}

econtrarDono(usuarios, "Max");
econtrarDono(usuarios, "Farofa");
econtrarDono(usuarios, "Meg");

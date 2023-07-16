const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
];

const pesquisa = "Carlos";

for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].nome === pesquisa) {
        console.log(
            `Galera... O ${pesquisa} está na posição ${i + 1}, corre lá!`
        );
    }
}

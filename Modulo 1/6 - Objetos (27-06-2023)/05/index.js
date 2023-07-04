const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
};

const aulas = [
    "Introdução a programação",
    "Variáveis",
    "Condicionais",
    "Arrays",
];

for (let i = 0; i < aulas.length; i++) {
    curso.aulas[i] = { identificado: i + 1, nome_da_aula: aulas[i] };
}

console.log(curso);

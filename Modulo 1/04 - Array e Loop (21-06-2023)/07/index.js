const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const pesquisaInicial = "A";
const nomesComInicial = [];

for (let nome of nomes) {
    let inicialNome = nome.substring(0, 1);
    if (inicialNome.toLocaleUpperCase() === pesquisaInicial) {
        nomesComInicial.push(nome);
    }
}

console.log(nomesComInicial);

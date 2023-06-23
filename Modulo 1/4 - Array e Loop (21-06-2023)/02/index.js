const letras = ["A", "a", "B", "C", "E", "e"];

const pesquisa = "E";
let encontrou = false;
let contador = 0;

for (let letra of letras.toLocaleString().toUpperCase()) {
    if (letra === pesquisa) {
        contador++;
        encontrou = true;
    }
}

if (encontrou) {
    console.log(
        `Foram encontradas ${contador} letras ${pesquisa.toLocaleUpperCase()} ou ${pesquisa.toLocaleLowerCase()}.`
    );
} else {
    console.log(
        `Nenhuma letra ${pesquisa.toLocaleUpperCase()} ou ${pesquisa.toLocaleLowerCase()} foi encontrada.`
    );
}

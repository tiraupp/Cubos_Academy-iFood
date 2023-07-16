const numeros = [54, 22, 14, 87, 10, 284];

const pesquisa = 10;
let encontrou = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === pesquisa) {
        console.log(`O número ${pesquisa} foi encontrado na posição ${i}.`);
        encontrou = true;
    }
}

if (!encontrou) {
    console.log(-1);
}

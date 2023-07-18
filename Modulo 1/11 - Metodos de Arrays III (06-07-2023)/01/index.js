const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

//ordenação crescente.
console.log(
    numeros.sort((a, b) => {
        return a - b;
    })
);

//ordenação decrescente.
console.log(
    numeros.sort((a, b) => {
        return b - a;
    })
);

//ordenação com base nos valores dos pontos de código Unicode.
console.log(numeros.sort());

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

//Ordem alfabética.

console.log(
    frutas.sort((a, b) => {
        return a.localeCompare(b);
    })
);

//Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais).

console.log(
    frutas.sort((a, b) => {
        return a.length - b.length;
    })
);

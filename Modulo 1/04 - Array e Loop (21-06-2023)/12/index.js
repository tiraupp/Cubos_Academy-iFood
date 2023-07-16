const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while (filaDeDentro.length < 5 && filaDeFora.length > 0) {
    filaDeDentro.push(filaDeFora.shift());
}

console.log(
    `Na fila de dentro possui ${filaDeDentro.length} pessoas : ${filaDeDentro}`
);
console.log(
    `Na fila de dentro possui ${filaDeFora.length} pessoas : ${filaDeFora}`
);

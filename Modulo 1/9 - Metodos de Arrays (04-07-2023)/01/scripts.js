const frutas = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

console.log(frutas.reverse().join(", "));
frutas.reverse().splice(0, 1);
frutas.splice(frutas.length - 1, 1, "Melão");
console.log(frutas);

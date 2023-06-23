const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let conferencia of original) {
    conferencia % 2 == 0 ? pares.push(conferencia) : impares.push(conferencia);
}

console.log(pares);
console.log(impares);

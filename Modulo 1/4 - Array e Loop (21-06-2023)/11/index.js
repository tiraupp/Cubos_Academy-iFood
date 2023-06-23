const original = [5, 7, 10, 13, 17, 20, 26, 34, 100, 118, 245];

const novaOrdem = [];

for (let consulta of original) {
    if ((consulta >= 10 && consulta <= 20) || consulta > 100) {
        novaOrdem.push(consulta);
    }
}

console.log(novaOrdem);

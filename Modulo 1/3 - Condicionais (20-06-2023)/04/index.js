const ladoA = 3;
const ladoB = 3;
const nomePedra = ["Branco", "Ás", "Duque", "Terno", "Quadra", "Quina", "Sena"];
const verificaBucha =
    ladoA === ladoB ? `Bucha de ${nomePedra[ladoA]}` : "Não é bucha";

console.log(verificaBucha);

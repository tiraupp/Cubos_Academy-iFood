const jogada1 = "pedra";
const jogada2 = "tesoura";

if (jogada1 === "pedra") {
    if (jogada2 === "tesoura") {
        console.log("Jogada 1 vencedora, pedra quebra tesoura!");
    } else if (jogada2 === "papel") {
        console.log("Jogada 2 vencedora, papel embrulha pedra!");
    } else {
        console.log("Empate, os dois jogadores escolheram o mesmo objeto!");
    }
} else if (jogada1 === "papel") {
    if (jogada2 === "tesoura") {
        console.log("Jogada 2 vencedora, tesoura corta papel!");
    } else if (jogada2 === "pedra") {
        console.log("Jogada 1 vencedora, papel embrulha pedra!");
    } else {
        console.log("Empate, os dois jogadores escolheram o mesmo objeto!");
    }
} else {
    if (jogada2 === "pedra") {
        console.log("Jogada 2 vencedora, pedra quebra tesoura!");
    } else if (jogada2 === "papel") {
        console.log("Jogada 1 vencedora, tesoura corta papel!");
    } else {
        console.log("Empate, os dois jogadores escolheram o mesmo objeto!");
    }
}

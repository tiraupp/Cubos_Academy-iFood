const comentario = "Esse COVID é muito perigoso!";
const palavrasProibidas = ["pandemia", "covid"];

let bloquearComentario = true;

for (let palavra of palavrasProibidas) {
    bloquearComentario = comentario.toLowerCase().includes(palavra);
}

if (!bloquearComentario) {
    console.log("Comentário autorizado");
} else {
    console.log("Comentário bloqueado por conter palavras proibidas");
}

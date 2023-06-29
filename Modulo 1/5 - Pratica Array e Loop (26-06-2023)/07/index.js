//const disparo = [0, 10, 50, 70, 80, 30];
const disparo = [0, 50, 90, 80, 100, 80, 40];

solucao(disparo);

function solucao(disparos) {
    let contador = 0;
    for (let disparo of disparos) {
        if (disparo > 70) {
            contador++;
        }
    }
    if (contador >= 3) {
        console.log(contador);
    } else {
        console.log("ELIMINADO");
    }
}

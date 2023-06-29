//const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
const notas = [100, 100, 100, 50];

solucao(notas);

function solucao(notas) {
    let soma = 0;
    let menorNota = Infinity;
    let maiorNota = 0;

    for (let nota of notas) {
        soma += nota;
        if (nota < menorNota) {
            menorNota = nota;
        }
        if (nota > maiorNota) {
            maiorNota = nota;
        }
    }
    console.log((soma - (menorNota + maiorNota)) / (notas.length - 2));
}

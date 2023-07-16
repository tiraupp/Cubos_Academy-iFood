//const sequencia = [">",">",">","<",">","<",">"];
//const sequencia = [">"];
//const sequencia = ["<"];
const sequencia = [">", ">", ">", ">", ">", ">", ">", ">", ">"];

solucao(sequencia);

function solucao(sequencia) {
    let indice = 0;
    for (let seta of sequencia) {
        if (seta === ">") {
            if (indice >= 6) {
                indice = 0;
            } else {
                indice++;
            }
        } else {
            if (indice <= 0) {
                indice = 6;
            } else {
                indice--;
            }
        }
    }
    console.log(indice);
}

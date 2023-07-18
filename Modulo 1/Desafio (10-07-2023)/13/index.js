function solucao(input) {
    const entrada = input.trim().split("\n");
    let coordenadas = [];
    let maiorDistancia = 0;

    for (let i = 1; i < entrada.length; i++) {
        coordenadas.push(entrada[i].trim().split(" ").map(Number));
    }
    for (let i = 0; i < coordenadas.length; i++) {
        for (let j = i + 1; j < coordenadas.length; j++) {
            let distancia = Math.sqrt(
                (coordenadas[j][0] - coordenadas[i][0]) ** 2 +
                    (coordenadas[j][1] - coordenadas[i][1]) ** 2
            );
            if (distancia > maiorDistancia) {
                maiorDistancia = distancia;
            }
        }
    }
    console.log(maiorDistancia);
}

solucao(`3
0 0
0 3
4 0`);

solucao(`5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7`);

function solucao(jogadores) {
    let zero = 0;
    let um = 0;
    for (let sorteado of jogadores) {
        if (sorteado.jogada === 0) {
            zero++;
        } else {
            um++;
        }
    }
    if (zero === 1) {
        for (let jogador of jogadores) {
            if (jogador.jogada === 0) {
                console.log(jogador.nome);
            }
        }
    } else if (um === 1) {
        for (let jogador of jogadores) {
            if (jogador.jogada === 1) {
                console.log(jogador.nome);
            }
        }
    } else {
        console.log("NINGUEM");
    }
}

const entrada = [
    {
        nome: "Herman",
        jogada: 1,
    },
    {
        nome: "Rhodes",
        jogada: 0,
    },
    {
        nome: "Beach",
        jogada: 0,
    },
    {
        nome: "Laurel",
        jogada: 0,
    },
    {
        nome: "Beatrice",
        jogada: 0,
    },
    {
        nome: "Alison",
        jogada: 0,
    },
    {
        nome: "Saundra",
        jogada: 0,
    },
    {
        nome: "Klein",
        jogada: 0,
    },
];

solucao(entrada);

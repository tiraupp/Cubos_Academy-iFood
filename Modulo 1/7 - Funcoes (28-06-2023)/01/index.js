const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b",
        },
        {
            resposta: "c",
            correta: "c",
        },
        {
            resposta: "e",
            correta: "b",
        },
        {
            resposta: "b",
            correta: "b",
        },
        {
            resposta: "c",
            correta: "c",
        },
    ],
};

function corrigirProva(prova) {
    const pesoProva = prova.valor / prova.questoes.length;
    let acertos = 0;
    for (let confereResposta of prova.questoes) {
        if (confereResposta.resposta === confereResposta.correta) {
            acertos++;
        }
    }

    console.log(
        `O aluno(a) ${prova.aluno} acertou ${acertos} ${
            acertos > 1 ? "questões" : "questão"
        } e obteve nota ${pesoProva * acertos}.`
    );
}

corrigirProva(prova);

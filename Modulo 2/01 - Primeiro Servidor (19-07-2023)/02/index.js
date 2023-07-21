const express = require("express");

const app = express();

let minutos = 0;
let segundos = 0;
let pausar = false;

const cronometro = () => {
    const resultado = setInterval(() => {
        if (pausar) {
            clearInterval(resultado);
        } else {
            if (segundos === 59) {
                segundos = 0;
                minutos++;
            } else {
                segundos++;
            }
        }
    }, 1000);
};

app.get("/", (req, res) => {
    res.send(
        `Tempo atual do cronômetro: ${String(minutos).padStart(
            2,
            "0"
        )} minutos e ${String(segundos).padStart(2, "0")} segundos`
    );
});

app.get("/iniciar", (req, res) => {
    res.send(`Cronômetro iniciado!`);
    cronometro();
});

app.get("/pausar", (req, res) => {
    pausar = true;
    res.send(`Cronômetro pausado!`);
});
app.get("/continuar", (req, res) => {
    pausar = false;
    cronometro();
    res.send(`Cronômetro continuando!`);
});
app.get("/zerar", (req, res) => {
    minutos = 0;
    segundos = 0;
    res.send(`Cronômetro zerado!`);
});

app.listen(8000, () => {
    console.log("Servidor ativo, porta: 8000");
});

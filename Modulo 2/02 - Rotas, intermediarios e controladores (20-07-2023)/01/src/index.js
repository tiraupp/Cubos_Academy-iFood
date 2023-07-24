const express = require("express");
const {
    somar,
    subtrair,
    multiplicar,
    dividir,
} = require("./controladores/operacoes");
const { verificarNumeros } = require("./intermediarios");

const app = express();

app.use(verificarNumeros);

app.get("/somar", somar);
app.get("/subtrair", subtrair);
app.get("/multiplicar", multiplicar);
app.get("/dividir", dividir);

app.listen(3000);

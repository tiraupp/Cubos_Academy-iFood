const express = require("express");
const roteador = require('./roteadores')

const app = express();


app.use("/", roteador);



app.listen(8000);
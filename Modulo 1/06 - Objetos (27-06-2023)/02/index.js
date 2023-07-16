const carros = [
    {
        marca: "Volkswagen",
        modelo: "Gol",
        ano: 2022,
        cor: "vermelho",
        quantidade_portas: 5,
        automatico: false,
    },
    {
        marca: "Chevrolet",
        modelo: "Cruze",
        ano: 2022,
        cor: "branco",
        quantidade_portas: 4,
        automatico: true,
    },
    {
        marca: "Toyota",
        modelo: "Hilux",
        ano: 2022,
        cor: "preto",
        quantidade_portas: 4,
        automatico: true,
    },
];

for (let carro of carros) {
    console.log(carro);
}

const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];
const letraInicial = "a";

const novaLista = (nomes, letraInicial) => {
  resultado = nomes.filter((nome) => {
    const nomeMaiusculo = nome.toUpperCase();
    return nomeMaiusculo[0] === letraInicial.toUpperCase()
  })
  console.log(resultado);
}

novaLista(nomes, letraInicial);
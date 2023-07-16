const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function encontrarCarros(carros, posicao){
  const carrosEcontrados = carros.slice(posicao, posicao+3);
  console.log(carrosEcontrados.join(" - "));
}

encontrarCarros(nomes, posicao);
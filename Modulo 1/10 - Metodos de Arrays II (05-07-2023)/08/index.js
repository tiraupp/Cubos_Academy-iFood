const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const novaLista = (frutas) => {
  const resultado = frutas.map((item, indice) => {
    return `${indice} - ${item[0].toUpperCase()+item.slice(1).toLowerCase()}`;
  })
  console.log(resultado);
  console.log(resultado.join(", "));
}

novaLista(frutas);

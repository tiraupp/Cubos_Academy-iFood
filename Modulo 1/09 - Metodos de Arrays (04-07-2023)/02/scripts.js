const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function dividirGrupos(tamanho, grupo){
  let indiceGrupo = 1;
  let grupos = [];
  for(let i = 0; i < grupo.length; i = i+tamanho){
    grupos = grupo.slice(i, i+tamanho);
    console.log(`Grupo ${indiceGrupo}: ${grupos.join(", ")}.`);
    indiceGrupo++;
  }
}

dividirGrupos(tamanhoDoGrupo, nomes);
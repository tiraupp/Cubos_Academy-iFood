const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const localizarLivro = (livros, nomeDoLivro) =>{
  const resultado = livros.findIndex((livro)=>{
    return livro === nomeDoLivro;
  })
  if(resultado === -1){
    console.log(`Nenhum livro encontrado com o nome: ${nomeDoLivro}`);
  } else {
    console.log(`O livro ${nomeDoLivro} está na posição ${resultado+1}.`);
  }
}

localizarLivro(livros, nomeDoLivro);
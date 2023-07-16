const nome = "Guido Cerqueira";

function gerarNickname(nome) {
    const nomeMinusculoSemEspaco = nome.toLowerCase().replace(/ /g,"");
    const nickName = nomeMinusculoSemEspaco.slice(0,12);
    const nickNamePronto = nickName.padStart(nickName.length+1,"@")
    return nickNamePronto;
}

console.log(gerarNickname(nome));
console.log(gerarNickname("Tiago  Raupp"));

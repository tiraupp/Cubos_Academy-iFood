const numeroCartao = "1111222233334444";


function formatarNumeroCartao(numeroCartao){
  const primeirosQuatro = String(numeroCartao).slice(0, 4);
  const ultimosQuatro = String(numeroCartao).slice(-4);
  const numeroFormatado = primeirosQuatro + ultimosQuatro.padStart(12, "****");
  return numeroFormatado;
}


console.log(formatarNumeroCartao(numeroCartao));
console.log(formatarNumeroCartao(1234567890123));


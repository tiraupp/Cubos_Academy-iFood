function solucao(lista) {
    let maisNovo = Infinity;
    for (let idade of lista) {
        if (idade >= 18) {
            if (idade < maisNovo) {
                maisNovo = idade;
            }
        }
    }
    if (maisNovo != Infinity) {
        console.log(maisNovo);
    } else {
        console.log("CRESCA E APARECA");
    }
}

solucao([12, 18, 27]);
solucao([12, 17, 15]);

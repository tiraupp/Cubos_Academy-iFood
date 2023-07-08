const texto = "Aprenda programar do zero na Cubos Academy";

function urlAmigavel(url) {
    let urlAmigavel = url.toLowerCase();

    while (urlAmigavel != urlAmigavel.replace(" ", "-")) {
        urlAmigavel = urlAmigavel.replace(/ /g, "-");
    }
    return urlAmigavel;
}

// primeira forma: chamando função que retorna a url formatada.
console.log(urlAmigavel(texto));

// segunda alternativa: utilizando o RegExp para deixar o
//replace ativo enquanto tiver a condição solicitada.
console.log(texto.toLowerCase().replace(/ /g, "-"));

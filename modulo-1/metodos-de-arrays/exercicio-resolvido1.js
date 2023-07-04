function inversao (texto){
    let arrayPalavra = texto.split('')
    //console.log(arrayPalavra)
    let palavraInvertida = arrayPalavra.reverse()
    console.log(palavraInvertida)
    let resultado = ''
    for(let item of palavraInvertida){
        resultado += item
    }
    console.log(resultado)
}

inversao("bring")



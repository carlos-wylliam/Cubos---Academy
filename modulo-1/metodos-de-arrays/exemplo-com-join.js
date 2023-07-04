function inversao (texto){
    let arrayPalavra = texto.split('')
    //console.log(arrayPalavra)
    let palavraInvertida = arrayPalavra.reverse()
    //console.log(palavraInvertida)
    
    let resultado = palavraInvertida.join("")
    console.log(resultado)
}

inversao("bring")



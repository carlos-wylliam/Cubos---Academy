//input - cAPS : output - Caps - OK
//input - lock : output - lock - OK
//input - CAPS : output - caps - OK

let input = "CaPS"
let formatada = ''

let primeiraLetra = input.slice(0,1)
let restoPalavra = input.slice(1)

if(primeiraLetra === primeiraLetra.toLowerCase() && restoPalavra === restoPalavra.toUpperCase()){
    let primeiraLetraInvertida = primeiraLetra.toUpperCase() 
    let restoPalavraInvertida = restoPalavra.toLowerCase()
    let palavraFormatada = primeiraLetraInvertida + restoPalavraInvertida
    console.log(palavraFormatada)
}else if(primeiraLetra === primeiraLetra.toLowerCase() && restoPalavra === restoPalavra.toLowerCase()){
    console.log(input)
}else if(primeiraLetra === primeiraLetra.toUpperCase() && restoPalavra === restoPalavra.toUpperCase()){
    let primeiraLetraInvertida = primeiraLetra.toLowerCase()
    let restoPalavraInvertida = restoPalavra.toLowerCase()
    let palavraFormatada = primeiraLetraInvertida + restoPalavraInvertida
    console.log(palavraFormatada)
}else{
    console.log(input)
}

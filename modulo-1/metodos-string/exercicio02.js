const valor = "1.350.000"
// let valorComPonto = valor.replaceAll(".", ",")
// console.log(valorComPonto) 




function replaceAll(original, text, newText){
    while(original !== original.replaceAll(text, newText)){
        original = original.replaceAll(text, newText)
    }
    return original
}

console.log(replaceAll(valor, '.', ','))
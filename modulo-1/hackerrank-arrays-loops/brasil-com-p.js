//Esse código não está 100% correto ele não passa em 4 testCase

let encontrado = false

for(let letras of palavras){
    if(letras.substring(0,1) === primeiraLetra || letras.substring(0,2) === segundaLetra){
        console.log(letras)
        encontrado = true
          
    }
}

if(!encontrado ){
    console.log('NENHUMA')
}

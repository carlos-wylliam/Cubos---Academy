let lista = [1,1,1]
let periodoRepeticao = lista.length
let soma = 0
for(let item of lista){
    soma += item
}

let restoDivisao = soma % periodoRepeticao
if(restoDivisao === 0){
    console.log(lista.length)
}else{
    console.log(restoDivisao)
}





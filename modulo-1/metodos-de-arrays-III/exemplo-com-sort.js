const numeros = [1,2,3,100,15,9]

const ordenacaoCrescente = numeros.sort((a,b)=>{
    if(a < b){
        //o primeiro parametro vem antes do segundo.
        return -1
    }
    if(a > b){
        //o segundo parametro vem antes do primeiro.
        return 1
    }
        //mantem o primeiro e o segundo parametro inalterados.
        return 0
})

console.log("Ordem crescente: " + ordenacaoCrescente)

const ordenacaoDecrescente = numeros.sort((a,b)=>{
    if(a < b){
        return 1
    }
    if(a > b){
        return -1
    }

    return 0
})

console.log("Ordem decrescente: " + ordenacaoDecrescente)
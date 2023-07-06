const array = [0,1,2,3,4]

const metodo = array.reduce((acumulador,valorAtual,indice,array) =>{
    return acumulador + valorAtual
}, 10)

console.log(metodo)
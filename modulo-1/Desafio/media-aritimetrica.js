const lista = [2,3,4]
let tamanhoLista = lista.length
let valorAcumulador = 0

for(let item of lista){
    valorAcumulador += item
}

let media = valorAcumulador / tamanhoLista
console.log(media)
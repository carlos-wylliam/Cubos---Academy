//há um limite minimo de dinheiro pra poder jogar
//tambem há um limite máximo de dinheiro para poder jogar

const lista = [1,2, 3, 4 ,5, 6, 7, 8, 9]

let listaAtualizada = []
let novaLista = 0
for(i = 0;i < lista.length;i++){
    //console.log(lista[i]
    if(lista[i] >= 1 && lista[i] <= 1){
        novaLista = lista[i]
        listaAtualizada.push(novaLista)
    }
}

console.log(listaAtualizada)
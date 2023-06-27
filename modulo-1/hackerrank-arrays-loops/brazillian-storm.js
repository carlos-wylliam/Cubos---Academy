let somaDasNotas = 0
let menorNota = Math.min(...notas)
let maiorNota = Math.max(...notas)
let quantidadeDeNotas = notas.length - 2


for(let item of notas){
    somaDasNotas += item
}

let subtracao = somaDasNotas - maiorNota - menorNota
let media = subtracao / quantidadeDeNotas

console.log(media)   
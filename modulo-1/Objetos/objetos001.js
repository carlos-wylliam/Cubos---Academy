let pessoa = {
    nome: "Carlos",
    idade: 19,
    altura:1.77,
    temCNH:false,
    apelido: ["will", "uila"]
}

const textoCNH = pessoa.temCNH === true ? "possui" : "não possui"

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} CNH e os seguintes apelidos:`)

for(let item of pessoa.apelido){
    console.log(`- ${item}`)
}
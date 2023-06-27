let cartao = {
    nome:"wylliam",
    idade: 19,
    produtosConsumidos:[
        {
            nomeProduto: "Batata",
            precoUnit: 500,
            qtdComprada: 20
        },
        {
            nomeProduto: "Salmão",
            precoUnit: 7000,
            qtdComprada: 2
        },
        {
            nomeProduto: "Coca-cola",
            precoUnit: 800,
            qtdComprada: 2
        }
    ]
}

console.log("nome: " + cartao.nome)
console.log("idade: "+ cartao.idade)

cartao.idade = 25
console.log("nova idade: " + cartao.idade)
console.log("primeiro produto consumido: " + cartao.produtosConsumidos[0].nomeProduto )
console.log("ultimo produto consumido: " + cartao.produtosConsumidos[2].precoUnit)



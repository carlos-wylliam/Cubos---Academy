const produtosConsumidos = [
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
const cartao = {
    nome:"wylliam",
    idade: 19,
    produtosConsumidos
}
//-----------------------------------
console.log("nome: " + cartao.nome)
console.log("idade: "+ cartao.idade)

cartao.idade = 25
console.log("nova idade: " + cartao.idade)
console.log("primeiro produto consumido: " + cartao.produtosConsumidos[0].nomeProduto )
console.log("ultimo produto consumido: " + cartao.produtosConsumidos[2].precoUnit)
//-----------------------------------
let valorTotal = 0
for(let item of produtosConsumidos){
    valorTotal += item.precoUnit * item.qtdComprada
}
let valorTotalFormatado = (valorTotal/100).toFixed(2)
console.log(`Sr(a) ${cartao.nome}, o total a pagar é R$${valorTotalFormatado}`)








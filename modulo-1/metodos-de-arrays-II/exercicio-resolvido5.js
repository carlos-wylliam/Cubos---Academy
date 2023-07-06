const produtos = [
    {
        nome: "arroz",
        preco: 500
    },
    {
        nome: "carne",
        preco: 3200
    },
    {
        nome: "biscoito",
        preco: 450
    },
    {
        nome: "banana",
        preco: 320
    }
]


const arrayProdutos = () =>{
    const desconto = 10/100
    const novoArray = produtos.map((produto)=>{
    return {
        nome: produto.nome,
        preco:produto.preco,
        desconto: desconto * produto.preco
    }})
    
    console.log(novoArray)
}

arrayProdutos(produtos)



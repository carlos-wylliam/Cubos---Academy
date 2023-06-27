let somaDosProdutos = 0
let produtoMaisBarato = Math.min(...precos)

for(let produtos of precos){
    somaDosProdutos += produtos
}

if(precos.length >= 5){
    let promocao = somaDosProdutos - produtoMaisBarato
    console.log(promocao)
}else{
    console.log(somaDosProdutos)
}
//80% dos seus clientes compravam 2 itens
//se o cliente comprasse pelo menos 3 itens teria um desconto no item mais barato
//banana 1 real, pao 4 real, carne 10 real, bana teria um desconto de 50% entao pagaria 50 centavos
//tenho que imprimir o valor a ser pago pelo o cliente

const precos = [100, 100, 100]
let valor = 0
let menorProduto = Math.min(...precos)
let promocao = (50 * menorProduto) /100

for(let item of precos){
    valor += item
}

if(precos.length >= 3){
   let resultado = valor - promocao
   console.log(resultado)
}else{
    console.log(valor)
}


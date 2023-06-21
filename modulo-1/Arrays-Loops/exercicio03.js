//Faça um programa que calcula e imprime na tela a soma dos itens de um array.
var soma = 0
const numeros = [10,7,9,17,13]
for(i = 0;i < numeros.length;i++){
    console.log(numeros[i])
    soma = soma + numeros[i]
}
console.log(soma)


//Crie um array com 5 nomes de paises -
//Adicione um país ao fim da lista - 
//Imprima a lista na tela -
//Remova um país do fim da lista -
//Imprima a lista na tela -
//Adicione um país ao inicio da lista -
//Imprima a lista na tela -
//Remova um país do inicio da lista -
//Imprima a lista na tela -
//Imprima o último país da lista na tela -
//Imprima o segundo país da lista na tela -
//Imprima o país do índice 2 na tela

const paises = ['Brasil', 'Inglaterra', 'Canada', 'Australia', 'Senegal']
paises.push('Argentina')
console.log(paises)

paises.pop()
console.log(paises)

paises.unshift('Mexico')
console.log(paises)

paises.shift()
console.log(paises)

const ultimo = paises[paises.length-1]
console.log(ultimo)

console.log(paises[1])

console.log(paises[2])

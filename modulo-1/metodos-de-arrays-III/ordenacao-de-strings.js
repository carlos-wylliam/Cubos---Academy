const nomes = ['Monica', 'Bia', 'Joyce', 'Kellyane']

//Ordem crescente
nomes.sort((a,b)=>{
    return a.localeCompare(b)
})

console.log(nomes)

//Ordem decrescente
nomes.sort((a,b)=>{
    return b.localeCompare(a)
})
console.log(nomes)
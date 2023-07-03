//transforme "jose messias junior"
//em Jose messias junior

const nome = "jose messias junior"

let arrayDeNomes = nome.split(" ")
//console.log(arrayDeNomes)
let nomeFormatado = ''
for(let item of arrayDeNomes){
    //console.log(item)
    let primeiraLetra = item.slice(0,1)
    let restanteDoNome = item.slice(1)
  nomeFormatado +=  primeiraLetra.toLocaleUpperCase() + restanteDoNome+ " " 
 
}
console.log(nomeFormatado.trim())

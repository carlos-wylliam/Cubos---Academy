//exemplo 1º
const nomes = ['carlos', 'ecio', 'gabriel', 'mia']

const resultado = nomes.some((nome) => {
    return nome === "carlos"
})

console.log(resultado)


//exemplo 2º
const frutas = ['abacaxi', 'melancia', 'morango', 'pera']

const minhaFuncaoCallback = (fruta) =>{
    return fruta === "abacaxi"
}

const resultado2 = frutas.some(minhaFuncaoCallback)

console.log(resultado2)
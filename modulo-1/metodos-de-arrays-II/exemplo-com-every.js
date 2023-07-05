const frutas = ['abacaxi', 'manga', 'melancia']
const numeros = [1,2,3,4]

//usando arrow-function
const resultado = frutas.every((elementoAtual) =>{
     console.log(elementoAtual !== 'banana')   
})

//usando function normal
const resultado2 = numeros.every(function(numero){
    console.log(numero < 5)
})


//Faça um programa que conta quantas letras "a" existem numa determinada palavra. imprima o resultado na tela

const palavra = "abelhaaa"

let qtdLetras = 0

for(let letra of palavra){
    if(letra == "a"){
        qtdLetras += 1
    }
}

console.log(qtdLetras)
let qtdAcerto = 0

for(let letra of palavra){
    if(letra === palpite){
        qtdAcerto += 1
    }
    
}

console.log(qtdAcerto)
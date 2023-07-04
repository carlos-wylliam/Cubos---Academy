const dados = [0,1,5,7,10,33,55,60,57,85,45,68,49,57,89,69,57,33,24,11,5,3,1,0,0]

function filtrar80(dados){
    //10% primeiros
    let indexStart = Math.round(dados.length * 10/100)
    let indexEnd = Math.round(dados.length * 90/100)
    let fatia = dados.slice(indexStart, indexEnd)
    console.log(fatia)
}

filtrar80(dados)
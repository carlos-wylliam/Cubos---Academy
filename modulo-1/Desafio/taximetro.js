let min = 18
let km = 9

function taximetro (min,km){
    let primeirosVinteMin = 20 * 50 
    let primeirosDezKm = 10 * 70 
    
    if(min < 20){
        primeirosVinteMin = min * 50
    }
    if(km < 10){
        primeirosDezKm = km * 70
    }
    
    
    let depoisVinteMin = 0
    let acimaVinteMin = 0
    let somaMinutos = 0
    
    if(min > 20){
        depoisVinteMin = min - 20
        acimaVinteMin = depoisVinteMin * 30
        somaMinutos = primeirosVinteMin + acimaVinteMin
    }
    
    let depoisDezKm = 0
    let acimaDezKm = 0
    let somaKm = 0
    if(km > 10){
        depoisDezKm = km - 10
        acimaDezKm = depoisDezKm * 50
        somaKm = primeirosDezKm + acimaDezKm
    }

    if(min > 20 && km > 10){
        let valor = somaMinutos + somaKm
        console.log(Math.floor(valor))
    }else if( min <= 20 && km <= 10){
        let valor = primeirosDezKm + primeirosVinteMin
        console.log(Math.floor(valor))
    }else if(min > 20){
        let valor = somaMinutos + primeirosDezKm
        console.log(Math.floor(valor))
    }else if(km > 10){
        let valor = somaKm + primeirosVinteMin
        console.log(Math.floor(valor))
    }

}
taximetro(min,km)



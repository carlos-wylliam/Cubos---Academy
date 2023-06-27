let pontuacao = 0
for(let item of resultados){
    //console.log(item)
    if(item === "V"){
        pontuacao += 3
    }else if(item === "E"){
        pontuacao += 1
    }
}

console.log(pontuacao)
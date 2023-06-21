const temIngresso = false
const censura = 16
const idade = 15

if (temIngresso === true){
    if(idade >= censura){
        console.log("Pode entrar")
    }else{
        console.log("Não pode entrar por causa da censura")
    }
}else{
    console.log("Barrada por falta  de ingresso")
}
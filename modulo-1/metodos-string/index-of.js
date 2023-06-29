//saber se um email é válido
//tem que ter pelo menos um @
//tem que ter pelo menos um ponto depois do @

const possivelEmail = "carloswylliam023@gmail.com"

const indexArroba = possivelEmail.indexOf("@")

const indexPontoAposArroba = possivelEmail.indexOf(".", indexArroba)

if(indexPontoAposArroba > indexArroba){
    console.log("Atende aos requesitos")
}else{
    console.log("Não atende aos requesitos")
}
let qtdAcertos = 0
for(let tiros of disparos){
    //console.log(tiros)
    if(tiros >70){
        qtdAcertos += 1
    }
}
if(qtdAcertos < 3){
    console.log('ELIMINADO')
}else{
    console.log(qtdAcertos)
}
function faixaEtaria(idade){
if(idade <= 21){
    return "jovem"
}else if ( idade <= 66){
    return "adulto"
}else{
    return "idoso"
}
}

const retornoFaixaEtaria = faixaEtaria(78)
console.log(retornoFaixaEtaria)
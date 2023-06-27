let palavraPurificada = ''
    
for(let caractere of stringCorrompida){
if(caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '%' ||caractere === '&' || caractere === '*' || caractere === '(' || caractere === ')'){
}else{
    palavraPurificada = palavraPurificada + caractere
           }    
}
console.log(palavraPurificada)
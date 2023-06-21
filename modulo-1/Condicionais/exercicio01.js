//dados de entrada
valorDaCompra = 850;
numeroDeParcelas = 12;

//se for pagar a vista recebe 10% de desconto
if (numeroDeParcelas === 1) {
  const desconto = valorDaCompra * 10 / 100;
  const valorAPagar = valorDaCompra - desconto
  console.log(`Você deve pagar R$ ${valorAPagar}, pois à vista tem 10$ de desconto`);
}else if(numeroDeParcelas >= 2 && numeroDeParcelas <= 6){
    //parcelando sem juros
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2)
    console.log(`Você deve pagar em  ${numeroDeParcelas}x sem juros de R$ ${valorDaParcela}`)
}else if ( numeroDeParcelas >= 7 && numeroDeParcelas <= 12){
    //parcelando com juros
    const valorAPagarComJuros = (valorDaCompra * (1 + 1/100)** numeroDeParcelas).toFixed(2)
    const valorDaParcela =( valorAPagarComJuros / numeroDeParcelas).toFixed(2)
    console.log(`Você deve pagar em ${numeroDeParcelas}x de R$ ${valorDaParcela} totalizando R$${valorAPagarComJuros}, devido a incidência de juros`)
}else{
    //números de parcelas invalidos
    console.log("Números de parcelas invalidas")
}






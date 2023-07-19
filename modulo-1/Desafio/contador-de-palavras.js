const texto = "Carlos " 

    const vetorPalavras = texto.split(' ')
    const palavras = vetorPalavras.filter((elementoAtual)=>{
        return elementoAtual !== ''
    })
   
    let resultado = palavras.join(' ')
    
    let arrayResultado = resultado.split(' ')
    let tamanho = arrayResultado.length

    if (texto === "") {
       console.log(0)
    } else {
        console.log(tamanho)
    }

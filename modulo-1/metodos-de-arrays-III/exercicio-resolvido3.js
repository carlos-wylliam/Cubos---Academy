const usuarios = [
    {
        id: 11,
        nome: 'joao',
        idade: 23
    },
    {
        id: 2,
        nome: 'maria',
        idade: 18
    },
    {
        id: 4,
        nome: 'ana',
        idade: 30
    },
    {
        id: 1,
        nome: 'rodrigo',
        idade: 17
    },
    {
        id: 123,
        nome: 'rodrigo',
        idade: 17
    },
    
]

const maiorIdade = (array) => {
    const resultado = array.reduce((acumulador,valorAtual)=>{
        //acumulador inicia com 0 
        let maior = acumulador
        //valorAtual é indice 0 do array
        if(valorAtual.idade > maior.idade){
            maior = valorAtual
        }
        return maior
    })

    console.log(resultado)
}

maiorIdade(usuarios)

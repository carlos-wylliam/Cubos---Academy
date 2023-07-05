const carros = [
    {
        nome:'corola',
        marca:'toyota',
        ano: 2020,
        cor: 'prata'
    },
    {
        nome: 'argo',
        marca: 'fiat',
        ano: 2018,
        cor: 'branco'
    }
]

const dadosCarro = (marca,arrayCarros) =>{
    const resultado = arrayCarros.find((carro)=>{
        return carro.marca === marca
    })

    console.log(resultado)
}

dadosCarro("toyota",carros)
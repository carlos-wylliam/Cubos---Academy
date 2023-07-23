const carros = require('../banco-de-dados')

//console.log(carros)
const listagemGeralCarros = (req,res)=>{
    //req.query = parametros de consulta
    const { marca, cor } = req.query
    let resultado = carros
    
    if(marca){
        resultado = resultado.filter((carro)=>{
            return carro.marca === marca
        })
    }

    if(cor){
        resultado = resultado.filter((carro)=>{
            return carro.cor === cor
        })
    }
    res.send(resultado)
}

const controladorFiltrarCarroId = (req, res)=>{
    const filtrarCarroId = carros.find((carro)=>{
        return carro.id === Number(req.params.id)
    })
    res.send(filtrarCarroId)
}


module.exports = {
    listagemGeralCarros,
    controladorFiltrarCarroId,
}

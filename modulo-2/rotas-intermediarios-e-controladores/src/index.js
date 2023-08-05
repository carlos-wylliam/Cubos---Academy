const express = require('express')
const app = express()
const {filtrarProfessores, encontrarUmProfessor} = require('./controladores/professores')

//intermediario independente
const primeiroIntermediario = (req,res,next)=>{
    console.log("primeiro intermediario")
    next()
}

const segundoIntermediario = (req,res,next)=>{
    console.log("segundo intermediario")
    next()
}

//intermediario de uma rota especifica
const intermediarioDaRota = (req, res, next)=>{
    console.log('passei no intermediario da rota')
    next()
}

// app.use(primeiroIntermediario)
// app.use(segundoIntermediario)

//http://localhost:3000/professores

        //rota           intermediario      funcao
app.get('/professores',intermediarioDaRota,filtrarProfessores)


//http://localhost:3000/professores/:id
app.get('/professores/:id', encontrarUmProfessor)


app.listen(3000)
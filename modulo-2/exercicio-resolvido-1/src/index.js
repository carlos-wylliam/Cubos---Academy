const express = require('express')
const app = express()
const carros = require('./banco-de-dados')
const {listagemGeralCarros, controladorFiltrarCarroId, rotaIntermediariaIndependente} = require('../src/controladores/carros')
const rotaIntermediaria = require('../src/controladores/intermediarios')

app.use(rotaIntermediaria)
app.get('/carros', listagemGeralCarros) 
app.get('/carros/:id', controladorFiltrarCarroId)

app.listen(3000)
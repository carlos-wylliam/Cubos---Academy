const express = require('express')
const rotas = express()
const controladores = require('../src/controladores/produtos')

rotas.get('/produtos', controladores.listagemProdutos)
rotas.post('/produtos', controladores.registrarVenda)

module.exports = rotas
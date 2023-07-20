//importando o express
const express = require('express')

const app = express()

//criando uma rota
// - rota principal
app.get('/', (requisicao,resposta) => {
    resposta.send('Essa é minha rota principal.')
})

app.get('/home', (requisicao,resposta) => {
    resposta.send('Olá...... esse é meu primeiro servidor com express')
})

//escutando a porta 3000
app.listen(3000)
const express = require('express')
const { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground')
const app = express()

// app.get('/', async (req, res)=>{
//     const cidade = getCityFromZipcode('58360000')
//     const cidade2 = getCityFromZipcode('41256250')
//     const promises =  await Promise.all([cidade, cidade2])
//     // res.send(`A cidade encontrada foi: ${promises}`)

//     //desestruturando um vetor
//     const [resposta1, resposta2] = promises
//     res.send(`A cidade encontrada foi ${resposta1}, ${resposta2}`)
// })

app.get('/pacote/:nomePacote', async (req,res)=>{
    //parametro na url
    const { nomePacote } = req.params
    
    const descricaoPacote = await getPackageDescriptionNpm(nomePacote)
    
    return res.send(descricaoPacote)
})
app.listen(3000)
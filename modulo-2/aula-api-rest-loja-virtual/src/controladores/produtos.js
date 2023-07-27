const produtos = require('../banco-de-dados')
const fs = require('fs/promises')

const listagemProdutos = (req,res)=>{
    return res.json(produtos)
}

const registrarVenda = async (req,res)=>{
    const { produto_id, quantidade } = req.body

    const produtoEncontrado = produtos.find((produto)=>{
        return produto.id === Number(produto_id)
    })

    if(!produtoEncontrado){
        return res.status(404).json('O produto não foi encontrado')
    }

    try {
        //ler - parsear para objeto
        const vendas = await fs.readFile('./src/vendas.json')
        const vendasParse = JSON.parse(vendas)

        vendasParse.vendas.push({
            produto: produtoEncontrado,
            quantidade
        })

        await fs.writeFile('./src/vendas.json', JSON.stringify(vendasParse))
        return res.status(201).json('Vendas registrada com sucesso')
    } catch (erro) {
        return res.status(404).json('O produto não foi encontrado')
    }
}

module.exports ={
    listagemProdutos,
    registrarVenda
}
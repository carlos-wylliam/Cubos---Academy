const fs = require('fs/promises')
const handlebars = require('handlebars')

const compiladorHtml = async (arquivo, contexto)=>{
    const html = await fs.readFile(arquivo)
    
    const compilador = handlebars.compile(html.toString())

    const htmlstring = compilador(contexto)

    return htmlstring
}

module.exports = compiladorHtml

// 

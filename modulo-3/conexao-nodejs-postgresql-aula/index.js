// const express = require('express')

// // Biblioteca responsavel por fazer a conexão com meu banco de dados
// const { Client } = require('pg')

// const app = express()

// app.use(express.json())

// app.get('/', async (req,res)=>{
//     //Fazendo conexão com meu banco de dados
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         user: 'postgres',
//         password: '1823',
//         database: 'aula_conexao_node_pg'
//     })

//     try {
//         await client.connect()

//         const resultado = await client.query('select * from empresas')

//         await client.end()
//         return res.json(resultado.rows)
//     } catch (error) {
//         console.log(error.message)
//     }
// })

// app.listen(3000)

// CONECTANDO COM O METODO POOL

const express = require('express')

const pool = require('./conexao')

const app = express()

app.get('/', async (req,res)=>{
    try {
        const resultado = await pool.query('select * from empresas')
        res.json(resultado)

    } catch (error) {
        console.log(error.message)
    }
})

app.use(express.json())

app.listen(3000)


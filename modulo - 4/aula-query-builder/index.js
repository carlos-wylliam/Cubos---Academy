const express = require('express')
const knex = require('./conexao')

const app = express()

app.use(express.json())

app.get ('/', async (req,res)=>{
    const guido = {
        nome: 'Guido 2',
        email: 'guido2@email.com',
        telefone: '(80)9999-9999'
    }

    const maria = {
        nome: 'maria',
        email: 'maria@email.com',
        telefone: '(80)9999-9999'
    }

    const joao = {
        nome: 'joao',
        email: 'joao@email.com',
        telefone: '(80)9999-9999'
    }

    // const agenda = await knex('agenda').insert(guido).returning(['id', 'nome'])
    const agenda = await knex('agenda').insert([maria,joao]).returning('*')

    return res.json(agenda)
})

app.put('/:id', async (req,res)=>{
    const { nome, email, telefone } = req.body
    const { id } = req.params

    const agendaAtualizada = await knex('agenda').update({nome, email, telefone}).where('id', id)

    return res.json(agendaAtualizada)
})

app.delete('/:id', async (req,res)=>{
    const { id } = req.params

    const agendaExcluida = await knex('agenda').del().where('id', id).returning('*')

    return res.json(agendaExcluida)
})

app.listen(3002)
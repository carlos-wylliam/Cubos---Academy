const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1823',
    database: 'aula_conexao_node_pg'
})

module.exports = pool
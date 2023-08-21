// npm install pg

const {Client} = require('pg')

const client = new Client()

await.client.conect()

const res = await client.query('SELECT NOW()')

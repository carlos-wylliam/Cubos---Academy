require('dotenv').config()
const express = require('express')
const { login } = require('./controladores/login')

const app = express()

app.use(express.json())

app.post('/login', login)

app.listen(process.env.PORT) 

// require('dotenv').config()
// const express = require('express')
// const routes = require('../route')

// const server = express()

// server.use(express.json())

// server.use(routes)

// server.listen(process.env.PORT)
const express = require('express')
const { sendMail } = require('./mail')

const routes = express()

routes.post('/send', sendMail)

module.exports = routes
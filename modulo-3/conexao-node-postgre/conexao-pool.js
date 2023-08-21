// Conexao pool clients
const { Pool } = require('pg')

const pool = new Pool()

const selectTimestamp = async (req, res) =>{
    const timestamp = await pool.query('SELECT NOW()')
    return res.json(timestamp)
}

const selectDate = async (req, res)=>{
    const date = await pool.query('SELECT CAST(NOW() AS DATE)')
    return res.json(date)
}
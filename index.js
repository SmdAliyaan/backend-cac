//server code in express
require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.get('/twitter',(req,res) => {
    res.send('hello twitter')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
const dotenv = require('dotenv')
dotenv.config({path: "./config/dev.env"})

const express = require('express')
const app = express()

const port = process.env.PORT

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')    
})

app.listen(port, () => {
    console.log('Wakey Wakey kk, Server is running on '+ port)
})
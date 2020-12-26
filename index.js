const express = require('express')
require('./db/mongoose')
const connectDB = require('./db/mongoose')
const dotenv = require('dotenv')

dotenv.config({path: "./config/dev.env"})

const app = express()
connectDB()
const port = process.env.PORT



app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')    
})

app.post('/shortUrl', (req, res) => {

} )

app.listen(port, () => {
    console.log('Wakey Wakey kk, Server is running on '+ port)
})
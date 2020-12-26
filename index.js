const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path: "./config/dev.env"})

const connectDB = require('./db/mongoose')
const shortURL = require('./src/models/shortURL')



const app = express()
connectDB()
const port = process.env.PORT



app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const shortURLs = await shortURL.find()
    res.render('../src/views/index', { shortURLs })    
})

app.post('/shortUrls', async (req, res) => {
    await shortURL.create({ full: req.body.fullURL })

    res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
    const ShortUrl = await shortURL.findOne({ short: req.params.shortUrl })
    try{
        if(ShortUrl == null) {
            return res.status(404)
        }
        ShortUrl.clicks++;
        ShortUrl.save()
        res.redirect(ShortUrl.full)
    }catch(e){
        console.log(e)
    }
})

app.listen(port, () => {
    console.log('Wakey Wakey kk, Server is running on '+ port)
})
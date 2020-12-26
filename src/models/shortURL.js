const mongoose = require('mongoose')
const short = require('shortid')


const shortURLSchema = new mongoose.Schema ({
    full:{
        type: String,
        required: true
    },
    short:{
        type: String,
        required: true,
        default: short.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('shortURL', shortURLSchema)
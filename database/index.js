const mongoose = require('mongoose')
const colors = require('colors')

const MONGO_URI= `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.mml2l.mongodb.net/ttt`

mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true},(error) =>{
    error ? console.log(error) : console.log(colors.yellow('Base de Datos conectada 🤯'))
})

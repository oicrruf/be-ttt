
const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const dotenv = require('dotenv');

dotenv.config();

const database = require('./database')

app.use(express.urlencoded({ extended: false })); 
app.use(express.json());

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World! 🤘')
})

app.listen(port, () => {
  console.log(`Server en http://localhost:${port}`)
})
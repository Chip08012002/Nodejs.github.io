import express from 'express'
import configViewEngine from './config/viewengine'

const dotenv = require('dotenv')
const app = express()
const port = process.env.PORT || 5000


configViewEngine(app);

app.get('/', (req, res) => {
  res.render('test/index.ejs')
})

app.get('/about', (req, res) => {
  res.send(`I'm Chip Hui!`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
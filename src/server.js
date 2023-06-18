import express from 'express'
import configViewEngine from './configs/viewengine.js'
import initWebRoute from './routes/web.js'
import connection from './configs/connectDB.js'

import dotenv from 'dotenv'
const app = express()
const port = process.env.PORT || 8080

// Set up Viewengine
configViewEngine(app);
//Init Web route
initWebRoute(app)




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
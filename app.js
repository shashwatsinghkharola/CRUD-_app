require('dotenv').config()
const express = require('express')
const app = express()
const connectToDb = require('./config/db.js')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectToDb()

app.use('/', userRoutes )


module.exports = app 
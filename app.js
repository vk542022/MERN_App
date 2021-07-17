const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const path = require('path')

dotenv.config({path:'./config.env'})

require('./db/conn')
// const User = require('./model/userSchema')

app.use(cookieParser())

app.use(express.json())
// router
app.use(require('./router/auth'))

const PORT = process.env.PORT || 4000;

app.listen(PORT,(req,res)=>{
    console.log(`connected ${PORT}`)
})
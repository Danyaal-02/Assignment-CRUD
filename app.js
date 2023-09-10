require('dotenv').config()
const express=require('express')
const cors=require('cors')

//DB connection(localhost connection used)
const connectToDb=require('./config/db.js')
connectToDb()

const app=express()

//express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const userRoutes=require('./routes/userRoutes.js')

app.use('/',userRoutes)
module.exports=app
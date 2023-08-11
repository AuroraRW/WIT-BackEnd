const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const cardRouter = require('./routes/cardRoutes')
app.use('/', cardRouter)

app.listen(4000, ()=>{
    console.log('server is runing........')
})
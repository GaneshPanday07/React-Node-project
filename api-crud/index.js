const express = require('express')
const cors = require('cors')
const connect = require('./connection')
const book = require('./routes/book')
const mobile = require('./routes/mobile')
const app = express()
app.use(cors())
app.use(book)
app.use(mobile)
connect()



app.listen(3000, (err)=> {
    if(err){
        console.log(err)
    }else{
        console.log("Server is runing on 3000.... port NO.")
    }
});
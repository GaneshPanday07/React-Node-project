require('dotenv').config
const express = require("express")
const connect = require('./config/db')
const app = express()
connect()


const port = 3000 || process.env.PORT

app.listen(port, (err)=> {
    if(err){
        console.log("ERROR...")
    } else {
        console.log("Server is Running on 3000 port....")
    }
})
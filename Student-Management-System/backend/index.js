const express = require('express')
const connect = require('./connection')
const Student = require('./Routes/StudentRoutes')
const app = express()
connect()
app.use(Student)


app.listen(3000, (err)=> {
    if(err){
        console.log(err)
    }else{
        console.log("server is runing on 3000.... port no.")
    }
});
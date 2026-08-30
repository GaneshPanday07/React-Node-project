const mongoose = require('mongoose')

async function connect() {
    try{
        await mongoose.connect("mongodb://localhost:27017/Student2026");
        console.log("Db connect.....")
    } catch(err) {
        console.log(err)
    }
}

module.exports = connect
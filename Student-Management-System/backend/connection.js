const mongoose = require('mongoose')

async function connect() {
    try{
        await mongoose.connect("")
    } catch(err) {
        console.log(err)
    }
}
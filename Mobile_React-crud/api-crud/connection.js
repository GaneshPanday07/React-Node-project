const mongoose = require('mongoose')

async function connect() {
    try{
        await mongoose.connect("mongodb://localhost:27017/Mobile_reactcrud");
        console.log("Db connected Sucessfully..")
    } catch(err){
        console.log(err)
    }
}

module.exports = connect



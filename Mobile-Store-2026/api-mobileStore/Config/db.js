const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connect Successfully....")
    } catch(err) {
        console.log("DB Not Connected")
    }
}
module.exports = connectDB
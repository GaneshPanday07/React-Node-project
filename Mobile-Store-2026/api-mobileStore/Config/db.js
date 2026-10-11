const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.Mongo_URL);
        console.log("DB connect Successfully....");
    } catch(err) {
        console.log("DB Not Connect..");
    }
};

module.exports = connectDB
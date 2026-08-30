const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    rollNo: {type: Number},
    studentName: {type: String},
    course: {type: String},
    mobileNo: {type: Number}

})

module.exports = mongoose.model('Student', studentSchema)
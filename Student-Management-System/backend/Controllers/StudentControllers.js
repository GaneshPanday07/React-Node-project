const Student = require('../modules/Student')

const addStudents = async(req, res) => {
    try{
        let student = new Student(req.body)
        student.save()
        console.log("Data Save Sucessfully....");
        console.log(student)
    }catch(err) {
        console.log(err)
    }
}


module.exports = {
    addStudents,
}
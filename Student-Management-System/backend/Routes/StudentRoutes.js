const express = require('express')
const studentController = require('../Controllers/StudentControllers')
const route = express.Router();

route.get('/add/student', (req, res)=> {
    studentController.addStudents(res, req)
})

module.exports = route
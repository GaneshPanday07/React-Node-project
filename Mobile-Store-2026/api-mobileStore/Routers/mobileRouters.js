const express = require('express')
const router = express.Router()
const mobileController = require('../controllers/MobileControllers')

router.post("/add/mobile", (req, res)=> {
    mobileController.addMobile(req, res)
})

module.exports = router
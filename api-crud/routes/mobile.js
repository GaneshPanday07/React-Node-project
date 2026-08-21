const express = require('express')
const bodyparser = require('body-parser')
const MobileController = require('../controllers/MobileController')
const route = express.Router();
route.use(bodyparser.json());
route.use(bodyparser.urlencoded({
    extended: false
}));
route.post('/add/mobile', (req, res)=> {
    MobileController.addMobile(req, res);
})

module.exports = route

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

route.get('/mobiles', (req, res)=> {
  MobileController.getMobiles(req, res)
})

route.delete('/delete/mobile/:id', (req, res)=> {
    MobileController.deleteMobile(req, res)
})

route.get('/edit/for/mobile/:id', (req, res)=> {
    MobileController.editForMobile(req, res)
})

module.exports = route





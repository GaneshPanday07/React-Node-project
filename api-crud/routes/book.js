const express = require('express')
const bodyparser = require('body-parser')
const BookController = require('../controllers/BookController')
const route = express.Router();
route.use(bodyparser.json());
route.use(bodyparser.urlencoded({
    extended: false
}));
route.post('/add/book', (req, res)=> {
    BookController.addBook(req, res);
})

module.exports = route

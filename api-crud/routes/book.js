const express = require('express')
const bodyparser = require('body-parser')
const BookController = require('../controllers/BookController')
const route = express.Router();
route.use(bodyparser.json());
route.use(bodyparser.urlencoded({
    extended: false
}));

route.get('/books', (req, res) => {
  BookController.getBooks(req, res);
});

route.post('/add/book', (req, res)=> {
    BookController.addBook(req, res);
})

route.delete('/delete/book/:id', (req, res)=> {
    BookController.deleteBook(req, res);
})

route.get('/book/for/edit/:id', (req, res) => {
    BookController.getBookForEdit(req, res);
})

route.put('/edit/book/:id', (req, res)=> {
    BookController.editBook(req, res)
})

module.exports = route

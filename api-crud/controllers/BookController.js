const Book = require('../models/Book')
const cloudinary = require('cloudinary').v2

const addBook = async(req, res) => {
    try{
      cloudinary.config({
        cloud_name: "roi9vwn2",
        api_key: "539176683459959",
        api_secret: "JuStPibbD3qYB9GO_9ml1Qwb1gU",
      });
        const upload = await cloudinary.uploader.upload(req.file.path);
        console.log(upload);
        req.body.bookImage = upload.secure_url;
        //console.log(req.body)
        //console.log(req.file)
        let book = new Book(req.body)
        await book.save()
        console.log("Data Save Successfully.....")
        res.status(200).send({message: 'data has been saved Successfully'})
    } catch(err){
        res.status(400).send({message: 'something went wrong.. '})
    }
}

const getBooks = async (req, res) => {
  try {
    //let books = await Book.find({});
    //console.log(books)
    let totalBooks = await Book.countDocuments({})
    let books = await Book.find({bookTitle: new RegExp(req.query.searchBook, "i") }).skip((req.query.pageNo - 1)*(req.query.booksPerPage)).limit(req.query.booksPerPage);
    res.status(200).send({ data: books, totalBooks: totalBooks });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
}

const deleteBook = async(req, res) => {
  try{
    id = req.params.id
    await Book.deleteOne({_id: id});
    res.status(200).send({success: true})
  } catch(err) {
    console.log(err)
    res.status(400).send({success: false})
  }
}

const getBookForEdit = async(req, res) => {
  try{
    let id = req.params.id;
    let book = await Book.findOne({_id: id});
    console.log(book)
    res.status(200).send({data: book})
  } catch(err) {
    console.log(err)
    res.status(400).send({data: err})
  }
}

const editBook = async(req, res) => {
  try{
    let id = req.params.id;
    console.log(id);
    let book = req.body;
    console.log(book);
    await Book.updateOne({ _id: id}, req.body)
    console.log("Book updated Sucessfully....")
    res.status(200).send({success: true})
  } catch(err) {
    console.log(err)
    res.status(400).send({success: false})
  }
}
module.exports = {
  addBook,
  getBooks,
  deleteBook,
  getBookForEdit,
  editBook,
};
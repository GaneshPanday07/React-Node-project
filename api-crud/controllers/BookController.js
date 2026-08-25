const Book = require('../models/Book')

const addBook = async(req, res) => {
    try{
        console.log(req.body)
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
    let books = await Book.find({});
    res.status(200).send({ data: books });
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
module.exports = {
  addBook,
  getBooks,
  deleteBook,
};
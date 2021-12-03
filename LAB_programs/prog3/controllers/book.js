const Book = require('../models/book');

const createBook = async (req, res, next) => {
  const book = req.body;

  const newBook = new Book({
    ID: book.ID,
    name: book.name,
    publisher: book.publisher,
    author: book.author
  });

  try {
    await newBook.save();
  } catch(err) {
    console.log(err);
    return res.send('Error occurred while saving the book');
  }

  res.json({ book: newBook });
};

const getListBooks = async (req, res, next) => {
  let books;

  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
    return res.send('Error occurred while fetching the books');
  }

  res.json({ books: books });
};

const getBookByID = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.send('Please pass id');
  }

  let book;

  try {
    book = await Book.find({ ID: id });
  } catch (err) {
    console.log(err);
    return res.send('Error occurred while fetching the book');
  }

  res.json({ book: book });
};


module.exports = { createBook, getListBooks, getBookByID };

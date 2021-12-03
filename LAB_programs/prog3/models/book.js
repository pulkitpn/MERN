const mongoose = require('mongoose');

const Book = mongoose.Schema({
  ID: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  publisher: { type: String, required: true },
  author: {type: String, required: true},
});

module.exports = mongoose.model('Book', Book);

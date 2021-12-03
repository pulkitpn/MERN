const express = require('express');

const { createBook, getListBooks, getBookByID} = require('../controllers/book');

const router = express.Router();

router.post('/', createBook);
router.get('/', getListBooks);
router.get('/:id', getBookByID);

module.exports = router;

const express = require('express');

const router = express.Router();

const { getSongs,addSong } = require('../controllers/music');

router.get('/', getSongs);
router.post('/add', addSong)

module.exports = router;

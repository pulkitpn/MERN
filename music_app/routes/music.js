const express = require('express');

const router = express.Router();

const { getSongs,addSong, getSongById , uploadSong, updateSong, deleteSong} = require('../controllers/music');
const { upload } = require('../utils/upload');

router.get('/', getSongs);
router.get('/:id', getSongById)
router.post('/upload/song', upload.single('song'), uploadSong);
router.post('/add', addSong)

router.put('/:id', updateSong)
router.delete('/:id', deleteSong)

module.exports = router;

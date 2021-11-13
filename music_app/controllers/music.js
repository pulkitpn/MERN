const Music = require('../models/music');


const getSongs = async(req, res, next) => {
  // res.send("This is the list of songs");

  let songs = [];

  try{
    songs = await Music.find({});
  }catch (err){
    console.log(err);
    return res.send(err);
  }

  res.send({songs});
};

const getSongById = async(req, res, next) => {
  // res.send("This is the list of songs");

  const {id} = req.params;

  if (!id){
    return res.send("Please enter the valid id")
  }

  let song;

  try{
    song = await Music.find({});
  }catch (err){
    console.log(err);
    return res.send(err);
  }

  res.send({song});
};

const addSong = async(req,res,next) => {
  const body = req.body;

  let newSong = new Music({
    name:body.name,
    song:body.song,
    date:body.date,
    album:body.album,
    singers:body.singers,
  });

  try{
    await newSong.save();

  }catch (err){
    console.log(err);
    return res.send(err);
  }

  res.send({song: newSong})

}

const uploadSong = (req,res,next) =>{
  const filePath = req.file.path;

  res.send({
    path:filePath,
  })

}

const updateSong = async(req, res, next) => {

  const {id} = req.params;
  const body = req.body;

  if (!id){
    return res.send("Please enter the valid id")
  }

  const updatedSong = {
    name: body.name,
    song: body.song,
    singers: body.singers,
    date: body.date,
    album: body.album,
  }

  let newSong;

  try {
    newSong = await Music.findByIdAndUpdate(id, updatedSong, { new: true });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }

  res.send({ song: newSong });
};

const deleteSong = async (req, res, next ) => {
  const { id } = req.params;

  if (!id){
    return res.send("Please enter the valid id")
  }

  try {
    await Music.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }

  res.send({ message: 'Deleted successfully!' });
}

module.exports = { getSongs,addSong,getSongById , uploadSong, updateSong, deleteSong};

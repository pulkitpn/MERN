const Music = require('../models/music');


const getSongs = (req, res, next) => {
  res.send("This is the list of songs");
};

const addSong = async(req,res,next) => {
  const body = req.body;

  let newSong = new Music({
    name:nody.name,
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

module.exports = { getSongs,addSong };

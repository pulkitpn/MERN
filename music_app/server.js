const express = require('express');
const cors = require('cors');
const app = express();
// const multer = require('multer');
// const form = multer();
const musicRoutes = require('./routes/music');
const  mongoose  = require('mongoose');

const port = 8000;

app.get('/' , (req,res) => {
  res.send('Hello World')
});

const MongoDbUrl = 'mongodb+srv://admin:pulkit773@cluster0.isu8j.mongodb.net/musicnew?retryWrites=true&w=majority'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(form.array());
app.use(cors());

app.use('/api/music', musicRoutes);

mongoose.connect(MongoDbUrl,() => {
  app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
  });

}, {useNewUrlParser: true});



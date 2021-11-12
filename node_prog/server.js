const express = require('express')
app = express();
 const port = 5000

 app.get('/' , (req,res) => {
     res.send('Hello World')
 });

 app.listen(port , () => {
     console.log(`server is running on the http://localhost:${port}`)
 })
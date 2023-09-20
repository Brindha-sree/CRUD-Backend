const env = require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const booksRoute = require('./routes/books');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/books', booksRoute);

const port= process.env.PORT || 5000;
app.listen(port,() =>{
  console.log("server start")
});

mongoose.connect(process.env.db)
.then(()=>{
  console.log('DB connected')
}).catch((error) =>{
  console.log(error)
})
  




app.get('/', (req, res) => {
    res.send(" Get Method"); 
})





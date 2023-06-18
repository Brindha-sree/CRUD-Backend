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

mongoose.connect('mongodb+srv://Brindha:5YJ9GX3Rdkj5cFjv@brindhab46.25wsigk.mongodb.net/?retryWrites=true&w=majority');
const con = mongoose.connection; 

try {
    con.on("open", () => {
      console.log("MongoDB connected!!!!");
    });
  } catch (error) {
    console.log("Error: " + error);
  }


app.get('/', (req, res) => {
    res.send("Hello GUVIB46!!! - from get method!!"); 
})

app.listen(4000);

const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const productData = require('./data/product');
const Product = require('./models/Product');
const productRoutes = require('./routes/productRoutes');
const cors = require("cors");
const corsOptions = {  origin: '*',};
const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/", (req, res) => {
    return res.status(200).send("Hello Welcome to  API");
  });







const importData = async () => {
    try{
        await Product.deleteMany({});

        await Product.insertMany(productData);

        console.log("Data Import Successfully");

        process.exit();
    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }
   };

importData();








const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
});


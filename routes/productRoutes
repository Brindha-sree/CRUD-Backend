// const express = require('express');
// const router = express.Router();

// const {
//     getAllProducts, 
//     getProductById,
// } = require('../controller/productControllers');

// router.get('/', getAllProducts);


// router.get('/:id', getProductById);


// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
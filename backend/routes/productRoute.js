// routes/api.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/get', productController.getAllProducts);

module.exports = router;

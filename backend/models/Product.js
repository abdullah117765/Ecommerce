// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  category: String,
  name: String,
  description: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

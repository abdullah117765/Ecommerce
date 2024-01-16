// models/Order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    name: String,
    address: String,
    city: String,
    postalCode: String,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: Number,
      price: Number,
      rating: Number,
      comment: String,
    },
  ],
  totalPrice: Number,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

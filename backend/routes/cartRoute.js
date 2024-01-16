// routes/cart.js

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add', cartController.addToCart);
router.get('/get', cartController.getCartItems);
router.delete('/remove/:id', cartController.removeFromCart);


module.exports = router;

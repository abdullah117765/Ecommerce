// routes/order.js

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/placeorder', orderController.placeOrder);
router.get('/purchasehistory', orderController.getPurchaseHistory);
router.post('/addratingcomment', orderController.addRatingAndComment);
module.exports = router;

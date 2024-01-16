// controllers/orderController.js

const Order = require('../models/Order');
const CartItem = require('../models/CartItem');

exports.placeOrder = async (req, res) => {
  const { shippingInfo, items, totalPrice } = req.body;

  try {
    // Create a new order
    const order = new Order({
      shippingInfo,
      items,
      totalPrice,
    });

    // Save the order to the database
    await order.save();

    // Clear the cart (remove cart items)
    await CartItem.deleteMany({});

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



exports.addRatingAndComment = async (req, res) => {
    const { orderId, productId, rating, comment } = req.body;
  
    try {
        console.log(req.body);
      const order = await Order.findById(orderId);
  
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      const itemIndex = order.items.findIndex((item) => item._id.equals(productId));
  
      if (itemIndex === -1) {
        return res.status(404).json({ error: 'Product not found in the order' });
      }
  
      order.items[itemIndex].rating = rating;
      order.items[itemIndex].comment = comment;
  
      await order.save();
  
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  exports.getPurchaseHistory = async (req, res) => {
    try {
      const purchaseHistory = await Order.find();
      res.json(purchaseHistory);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


 
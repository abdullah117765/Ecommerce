// controllers/cartController.js

// controllers/cartController.js

const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate('productId');
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Check if the item is already in the cart
    let cartItem = await CartItem.findOne({ productId });

    if (cartItem) {
      // Update the quantity if the item is already in the cart
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // Add a new item to the cart
      cartItem = new CartItem({ productId, quantity });
      await cartItem.save();
    }

    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Controller to remove a cart item by ID
exports.removeFromCart = async (req, res) => {
   
    try {
      // Find and remove the cart item by ID
      await CartItem.findByIdAndDelete(req.params.id);
  
      res.json({ success: true, message: 'Cart item removed successfully.' });
    } catch (error) {
      console.error('Error removing cart item:', error);
      res.status(500).json({ success: false, message: 'Internal server error.' });
    }
  };
  
  
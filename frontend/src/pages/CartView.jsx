// CartView.js

import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import L1 from '../resources/L1.jpeg';
import M1 from '../resources/M1.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CartView = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cart/get');
       
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.productId.price * item.quantity, 0);
  };

 

  const handleRemoveItem = async (productId) => {
    try {
      // Send request to remove the cart item by ID
      await axios.delete(`http://localhost:3001/cart/remove/${productId}`);
      
      // Update the comparison to use the correct property (_id)
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId));
      alert('Item removed from cart');
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  
  const gotohome = () => {
     
    navigate('/')
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-8">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Browse products</Link></p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.productId.id} className="flex items-center border p-4 mb-4 rounded shadow">
              <img src={item.image} alt={item.productId.name} className="mr-4 rounded-md w-16 h-16 object-cover" />

              <div>
                <h3 className="text-lg font-semibold">{item.productId.name}</h3>
                <p className="text-gray-600">{item.productId.description}</p>
                <p className="text-gray-800 font-semibold">${item.productId.price}</p>

                <div className="mt-4 flex items-center">
                  <label className="text-gray-800 font-semibold mr-2">Quantity:</label>
                  <div className="border rounded-md p-2 w-16"> {item.quantity}</div>
                    
              
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-red-500 ml-4 hover:text-red-700"
                  >
                    Remove
                  </button>
                 
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Total Price:</h3>
            <p className="text-2xl font-semibold">${calculateTotalPrice()}</p>
          </div>

          <div className="mt-8">
            <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2">
              Proceed to Checkout
            </Link>
            <button className="bg-blue-500 text-white px-4 py-2 ml-4" onClick={gotohome}>Cancel</button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default CartView;

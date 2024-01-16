// CartView.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import L1 from '../resources/L1.jpeg';
import M1 from '../resources/M1.jpg';
import {  useNavigate } from 'react-router-dom';
const CartView = () => {

    const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Laptop A',
      description: 'Powerful laptop with high-performance features.',
      price: 1200,
      image: L1,
      quantity: 2,
    },
    {
      id: 4,
      name: 'Mobile X',
      description: 'Feature-rich smartphone with a stunning display.',
      price: 600,
      image: M1,
      quantity: 1,
    },
  ]);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
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
            <div key={item.id} className="flex items-center border p-4 mb-4 rounded shadow">
              <img src={item.image} alt={item.name} className="mr-4 rounded-md w-16 h-16 object-cover" />

              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-800 font-semibold">${item.price}</p>

                <div className="mt-4 flex items-center">
                  <label className="text-gray-800 font-semibold mr-2">Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                    className="border rounded-md p-2 w-16"
                  />
                  <button
                    onClick={() => handleRemoveItem(item.id)}
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

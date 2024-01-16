// Checkout.js

import React, { useState } from 'react';
import L1 from '../resources/L1.jpeg';
import M1 from '../resources/M1.jpg';
import {  useNavigate } from 'react-router-dom';
const Checkout = () => {
    const navigate = useNavigate();
    const [shippingInfo, setShippingInfo] = useState({
      name: '',
      address: '',
      city: '',
      postalCode: '',
    });
  
    const [cartItems] = useState([
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
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };
  
    const handlePlaceOrder = () => {
     
      console.log('Order placed:', { shippingInfo, cartItems });
      navigate('/thankyou')
    };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-8">Checkout</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-800 font-semibold block mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={shippingInfo.name}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block mb-2">Address:</label>
            <input
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block mb-2">City:</label>
            <input
              type="text"
              name="city"
              value={shippingInfo.city}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block mb-2">Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              value={shippingInfo.postalCode}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>
        </form>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-md w-8 h-8 object-cover mr-2"
                />
                <span>{item.name}</span>
              </div>
              <span className="text-gray-800">{item.quantity} x ${item.price}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <h4 className="text-lg font-semibold">Total Price:</h4>
          <p className="text-xl font-semibold">${calculateTotalPrice()}</p>
        </div>
      </div>

      <div className="mt-8">
        <button onClick={handlePlaceOrder} className="bg-blue-500 text-white px-4 py-2">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;

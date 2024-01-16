// components/OrderDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/order/purchasehistory');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const openRatingModal = (productId) => {
    setSelectedProduct(productId);
  };

  const closeRatingModal = () => {
    setSelectedProduct(null);
    setRating(0);
    setComment('');
  };

  const submitRatingAndComment = async () => {
    try {
      // Assuming you have the orderId available in the order object
      const orderId = selectedProduct._id;

      await axios.post('http://localhost:3001/order/addratingcomment', {
        orderId :selectedProduct.orderId,
        productId: selectedProduct.productId,
        rating,
        comment,
      });

      // Fetch updated orders after submitting the rating and comment
      const response = await axios.get('http://localhost:3001/order/purchasehistory');
      setOrders(response.data);

      closeRatingModal();
    } catch (error) {
      console.error('Error submitting rating and comment:', error);
    }
  };

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-4xl font-bold mb-8">Order Details</h2>

      {orders.map((order) => (
        <div key={order._id} className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h3 className="text-2xl font-semibold mb-2">Order #{order._id}</h3>
          <ul className="space-y-2">
            {order.items.map((item) => (
              <li key={item._id} className="border-b pb-4">
                <div className="flex justify-between items-center">
                <h1 className="text-gray-600 font-semibold">Product Id: {item._id}</h1>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => openRatingModal({ orderId: order._id, productId: item._id })}
                  >
                    Add Rating
                  </button>
                </div>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Rating: {item.rating}</p>
                <p className="text-gray-600">Comment: {item.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Rating Modal */}
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-md w-96">
            <h2 className="text-2xl font-bold mb-4">Add Rating</h2>
            <label className="block mb-4">
              Rating:
              <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={handleRatingChange}
                className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block mb-4">
              Comment:
              <textarea
                value={comment}
                onChange={handleCommentChange}
                className="border p-3 w-full h-24 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={submitRatingAndComment}
              >
                Submit
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={closeRatingModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
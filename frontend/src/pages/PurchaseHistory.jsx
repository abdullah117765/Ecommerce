// PurchaseHistory.js

import React, { useState } from 'react';
import L1 from '../resources/L1.jpeg';
import M1 from '../resources/M1.jpg';
const PurchaseHistory = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([
    {
      id: 1,
      name: 'Laptop A',
      price: 1200,
      image: L1,
      rating: null,
      comment: '',
    },
    {
      id: 2,
      name: 'Mobile X',
      price: 600,
      image: M1,
      rating: null,
      comment: '',
    },
    
  ]);

  const handleRatingChange = (productId, newRating) => {
    setPurchaseHistory((prevHistory) =>
      prevHistory.map((item) =>
        item.id === productId ? { ...item, rating: newRating } : item
      )
    );
  };

  const handleCommentChange = (productId, newComment) => {
    setPurchaseHistory((prevHistory) =>
      prevHistory.map((item) =>
        item.id === productId ? { ...item, comment: newComment } : item
      )
    );
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-8">Purchase History</h2>

      {purchaseHistory.length === 0 ? (
        <p>You haven't made any purchases yet.</p>
      ) : (
        <div>
          {purchaseHistory.map((item) => (
            <div key={item.id} className="flex items-center border p-4 mb-4 rounded shadow">
              <img src={item.image} alt={item.name} className="mr-4 rounded-md w-24 h-24 object-cover" />

              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-800">${item.price}</p>

                <div className="mt-4 flex items-center">
                  <div className="flex items-center mr-4">
                    <label className="text-gray-800 font-semibold mr-2">Rating:</label>
                    <select
                      value={item.rating || ''}
                      onChange={(e) => handleRatingChange(item.id, e.target.value)}
                      className="border rounded-md p-2"
                    >
                      <option value="">Select Rating</option>
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <label className="text-gray-800 font-semibold mr-2">Comment:</label>
                    <textarea
                      value={item.comment}
                      onChange={(e) => handleCommentChange(item.id, e.target.value)}
                      className="border rounded-md p-2 w-48"
                      placeholder="Add your comment..."
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PurchaseHistory;

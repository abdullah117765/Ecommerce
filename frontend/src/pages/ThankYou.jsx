// ThankYou.js

import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="container mx-auto my-8 text-center">
      <h2 className="text-3xl font-semibold mb-4">Thank You for Your Order!</h2>
      <p className="text-gray-800 mb-4">
        Your order has been successfully placed. We appreciate your business!
      </p>
      <p className="text-gray-600">
        You will receive an email confirmation shortly. If you have any questions, please
        contact our customer support.
      </p>

      <div className="mt-8">
        <Link to="/" className="bg-blue-500 text-white px-4 py-2">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;

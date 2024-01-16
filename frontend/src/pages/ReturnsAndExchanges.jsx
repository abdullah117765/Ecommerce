// ReturnsAndExchanges.js

import React from 'react';

const ReturnsAndExchanges = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-8">Returns and Exchanges</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Our Policy</h3>
        <p className="text-gray-800">
          At XYZ Store, we want you to be satisfied with your purchase. If you are not completely
          satisfied, you may return or exchange your item(s) within 30 days of delivery.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Steps to Follow</h3>
        <ol className="list-decimal list-inside text-gray-800">
          <li>1. Contact our customer support team to initiate the return or exchange process.</li>
          <li>2. Package the item securely, including the original packaging.</li>
          <li>3. Ship the item to our designated return address.</li>
          <li>4. Once we receive the item, we will process the return or exchange accordingly.</li>
        </ol>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-800">
          If you have any questions or concerns about our returns and exchanges policy, please
          contact our customer support team at support@example.com or call us at 1-800-123-4567.
        </p>
      </div>
    </div>
  );
};

export default ReturnsAndExchanges;

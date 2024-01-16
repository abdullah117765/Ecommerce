// ProductDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Loading...</div>;
  }

  const gotocart = () => {
     
    navigate('/cart')
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="mb-4 rounded-md w-full" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-800 font-semibold">${product.price}</p>
          {/* Additional details */}
          <p className="text-gray-600 mt-4">Date Added: {product.dateAdded}</p>
          <p className="text-gray-600">Seller: {product.sellerName}</p>
          <p className="text-gray-600">Phone: {product.sellerPhone}</p>
          {/* Add to cart section */}
          <div className="mt-4 flex items-center">
            <label className="text-gray-800 font-semibold mr-2">Quantity:</label>
            <input
              type="number"
              min="1"
              max="10"
              defaultValue="1"
              className="border rounded-md p-2 w-16"
            />
            <button className="bg-blue-500 text-white px-4 py-2 ml-4">Add to Cart</button>
            <button className="bg-blue-500 text-white px-4 py-2 ml-4" onClick={gotocart}>View Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

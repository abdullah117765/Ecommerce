// ProductCard.js

import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="border p-4 rounded shadow transition-transform transform hover:scale-105 cursor-pointer" onClick={onClick}>
      <img src={product.image} alt={product.name} className="mb-4 rounded-md w-full h-48 object-cover" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-800 font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductCard;

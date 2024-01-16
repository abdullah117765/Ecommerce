
// ProductList.js

import React from 'react';
import ProductCard from './ProductCard';
import {  useNavigate } from 'react-router-dom';
import L1 from '../resources/L1.jpeg';
import L2 from '../resources/L2.jpeg';
import L3 from '../resources/L3.jpeg';
import M3 from '../resources/M3.jpeg';
import M2 from '../resources/M2.jpeg';
import M1 from '../resources/M1.jpg';
const products = [
    {
      id: 1,
      category: 'Laptops',
      name: 'Laptop A',
      description: 'Powerful laptop with high-performance features.',
      price: 1200,
      image: L1,
    },
    {
      id: 2,
      category: 'Laptops',
      name: 'Laptop B',
      description: 'Slim and lightweight laptop for on-the-go usage.',
      price: 900,
      image: L2,
    },
    {
        id: 3,
        category: 'Laptops',
        name: 'Laptop B',
        description: 'Slim and lightweight laptop for on-the-go usage.',
        price: 900,
        image: L3,
      },
    {
      id: 4,
      category: 'Mobiles',
      name: 'Mobile X',
      description: 'Feature-rich smartphone with a stunning display.',
      price: 600,
      image: M1,
    },
    {
      id: 5,
      category: 'Mobiles',
      name: 'Mobile Y',
      description: 'Budget-friendly mobile phone with essential features.',
      price: 300,
      image: M2,
    },
    {
        id: 6,
        category: 'Mobiles',
        name: 'Mobile Y4',
        description: 'Budget-friendly mobile phone with essential features.',
        price: 3100,
        image: M3,
      },
      
  ];

  const ProductList = () => {
    const navigate = useNavigate();
  
    const handleProductClick = (product) => {
      navigate(`/products/${product.id}`, { state: { product } });
    };
  
    return (
      <div className="container mx-auto my-8">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Laptops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products
              .filter((product) => product.category === 'Laptops')
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product)}
                />
              ))}
          </div>
        </section>
  
        <section>
          <h2 className="text-3xl font-semibold mb-8">Mobiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products
              .filter((product) => product.category === 'Mobiles')
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product)}
                />
              ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default ProductList;
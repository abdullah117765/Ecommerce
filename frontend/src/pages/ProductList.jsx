
// ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import {  useNavigate } from 'react-router-dom';

import L1 from '../resources/L1.jpeg';
import L2 from '../resources/L2.jpeg';
import L3 from '../resources/L3.jpeg';
import M3 from '../resources/M3.jpeg';
import M2 from '../resources/M2.jpeg';
import M1 from '../resources/M1.jpg';


  const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3001/products/get');
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products/get');
      // Assuming the backend sends an "image" field for each product
      const productsWithImages = response.data.map(product => {
        switch (product.id.toString()[0]) {
          case '1':
            return { ...product, image: L1 };
          case '2':
            return { ...product, image: L2 };
          case '3':
            return { ...product, image: L3 };
          case '4':
            return { ...product, image: M1 };
          case '5':
            return { ...product, image: M2 };
          case '6':
            return { ...product, image: M3 };
          // Add more cases if needed
          default:
            return product;
        }
      });
      setProducts(productsWithImages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
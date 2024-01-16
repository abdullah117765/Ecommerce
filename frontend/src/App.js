// App.js

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,  
  //npm install react-router-dom
} from "react-router-dom";
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import CartView from './pages/CartView';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import PurchaseHistory from './pages/PurchaseHistory';
import ReturnsAndExchanges from './pages/ReturnsAndExchanges';
import Navbar from './components/Navbar';
import OrderTrack from './pages/OrderTrack';


function App() {

  return (
    <BrowserRouter>
     <Navbar/>
        
        <Routes>
       
        <Route path="/" element={<ProductList />} />
  <Route path="/products/:id" element={<ProductDetails />} />
  <Route path="/cart" element={<CartView/>} />
  <Route path="/checkout" element={<Checkout/>} />
  <Route path="/thankyou" element={<ThankYou/>} />
  <Route path="/history" element={<PurchaseHistory/>} />
  <Route path="/return" element={<ReturnsAndExchanges/>} />
  <Route path="/track" element={<OrderTrack/>} />
        </Routes>
  

    </BrowserRouter>
  );
}

export default App;



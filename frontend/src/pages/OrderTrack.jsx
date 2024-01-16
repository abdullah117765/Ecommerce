// OrderTrack.js

import React from 'react';
import OrderTracking from './OrderTracking';

const OrderTrack = () => {
  
  const orders = [
    { id: 1, orderNumber: '12345', productName: 'Product A' },
    { id: 2, orderNumber: '67890', productName: 'Product B' },
    
  ];

  return (
    <div className="container mx-auto my-8">
     
      <OrderTracking orders={orders} />
     
    </div>
  );
};

export default OrderTrack;

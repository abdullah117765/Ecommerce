// OrderTracking.js

import React, { useState } from 'react';

const OrderTracking = ({ orders }) => {
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleOrderSelect = (orderId) => {
    setSelectedOrderId(orderId);
  };

  const orderTrackingStages = [
    { id: 1, title: 'Order Placed', completed: true },
    { id: 2, title: 'Processing', completed: true },
    { id: 3, title: 'Shipped', completed: false },
    { id: 4, title: 'Out for Delivery', completed: false },
    { id: 5, title: 'Delivered', completed: false },
  ];

  const selectedOrder = selectedOrderId ? orders.find((order) => order.id === selectedOrderId) : null;

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-8">Order Tracking</h2>

      <div className="mb-8">
        <label className="text-gray-800 font-semibold mb-2">Select Order:</label>
        <select
          value={selectedOrderId || ''}
          onChange={(e) => handleOrderSelect(parseInt(e.target.value))}
          className="border rounded-md p-2 w-full"
        >
          <option value="" disabled>
            Select an Order
          </option>
          {orders.map((order) => (
            <option key={order.id} value={order.id}>
              {order.orderNumber} - {order.productName}
            </option>
          ))}
        </select>
      </div>

      {selectedOrderId && (
        <div className="flex items-center justify-center">
          <div className="w-10/12 max-w-4xl">
            {orderTrackingStages.map((stage) => (
              <div key={stage.id} className="flex items-center mb-8">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full ${
                    stage.completed ? 'bg-green-500' : 'bg-gray-300'
                  } flex items-center justify-center`}
                >
                  {stage.completed ? (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    stage.id
                  )}
                </div>
                <div className="ml-4">
                  <p
                    className={`text-lg font-semibold ${
                      stage.completed ? 'text-green-500' : 'text-gray-800'
                    }`}
                  >
                    {stage.title}
                  </p>
                  {stage.completed && <p className="text-sm text-gray-500">Completed</p>}
                </div>
                {stage.id !== orderTrackingStages.length && (
                  <div className="flex-1 h-px bg-gray-300 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {!selectedOrderId && <p>Please select an order to track.</p>}
    </div>
  );
};

// Set a default prop value for orders (empty array)
OrderTracking.defaultProps = {
  orders: [],
};

export default OrderTracking;

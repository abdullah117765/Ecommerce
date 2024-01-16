// Navbar.js

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-semibold">
          Shandar Mobile 
        </Link>

        <div className="flex items-center space-x-4">
          <NavLink
            to="/"
            activeClassName="border-b-2 border-white"
            className="text-white hover:text-gray-300"
          >
            Home
          </NavLink>
          
          <NavLink
            to="/cart"
            activeClassName="border-b-2 border-white"
            className="text-white hover:text-gray-300"
          >
            Cart
          </NavLink>
          
          <NavLink
            to="/track"
            activeClassName="border-b-2 border-white"
            className="text-white hover:text-gray-300"
          >
            Order Tracking
          </NavLink>
          <NavLink
            to="/history"
            activeClassName="border-b-2 border-white"
            className="text-white hover:text-gray-300"
          >
            Purchase History
          </NavLink>
          <NavLink
            to="/return"
            activeClassName="border-b-2 border-white"
            className="text-white hover:text-gray-300"
          >
            Returns & Exchanges
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({username}) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <NavLink to="/" exact className={(e) => e.isActive ? "text-white bg-green-500 rounded-3xl px-3" : "flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"}>
                <svg className="h-6 w-6 mr-1 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6a1 1 0 001 1h3m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold">MyApp</span>
              </NavLink>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/"
                exact
                className={(e) => e.isActive ? "text-white bg-green-500 rounded-3xl px-3" : "flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"}
              >
                Home
              </NavLink>

              <NavLink
                to={`/profile/username`}
                className={(e) => e.isActive ? "text-white bg-green-500 rounded-3xl px-3" : "flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"}
              >
                Profile
              </NavLink>

              <NavLink
                to="/contact"
                className={(e) => e.isActive ? "text-white bg-green-500 rounded-3xl px-3" : "flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"}
              >
                Contact
              </NavLink>

              <NavLink
                to="/service"
                className={(e) => e.isActive ? "text-white bg-green-500 rounded-3xl px-3" : "flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"}
              >
                Services
              </NavLink>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg className="w-6 h-6 text-gray-700 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-menu hidden md:hidden">
        <NavLink
          to="/"
          exact
          className={(e) => e.isActive ? "text-white bg-green-500 rounded-3xl px-3" : "flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"}
        >
          Home
        </NavLink>
        <NavLink
          to={`/profile/${username}`}
          className={(e) => e.isActive ? "text-white bg-green-500 rounded-3xl px-3" : "flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"}
        >
          Profile
        </NavLink>
        <NavLink
          to="/contact"
          className={(e) => e.isActive ? "text-white bg-green-500 rounded-3xl px-3" : "flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;

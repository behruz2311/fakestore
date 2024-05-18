import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '@/context/useMainContext';

const Header = ({ title }) => {
  const { cartItems } = useContext(MainContext);

  return (
    <header className="bg-lime-500 py-5 mb-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={'/'}>{title}</Link>
          <nav className="flex items-center gap-10 justify-between">
            <Link
              to={'/'}
              className="text-lg font-medium ">
              Home
            </Link>
            <Link
              to={'/about'}
              className="text-lg font-medium ">
              About
            </Link>
            <Link
              to={'/cart'}
              className="text-lg font-medium relative ">
              Cart {
                cartItems.length ? <span className='w-4 h-4 text-center block text-xs rounded-full  bg-red-500 text-white absolute top-0 -right-4'>{cartItems.length}</span> : ""
              }
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto lg:flex justify-between items-center">
        <div className="text-white font-bold text-lg">
            <a href='/list-produk'>
                Daftar Produk
            </a>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none items-center"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Navigation Menu */}
        <div
          className={`lg:flex flex-grow items-center ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="/add-produk" className="text-white px-4 py-2">Add Produk</a>
          <button type='button' onClick={handleLogout} className="text-white px-4 py-2">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

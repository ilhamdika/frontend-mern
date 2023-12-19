import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto lg:flex justify-between items-center">
        <div className="text-white font-bold text-lg">Daftar Produk</div>

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
          <a href="#" className="text-white px-4 py-2">Home</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

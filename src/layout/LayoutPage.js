import React from 'react';
import Navbar from './Navbar';

const LayoutPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default LayoutPage;

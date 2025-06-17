import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        {/* Main content area */}
      <main className="pt-16">
        {children}
      </main> 
      <Footer />
    </div>
  );
};

export default Layout;
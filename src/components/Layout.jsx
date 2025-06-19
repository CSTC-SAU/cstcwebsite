import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import HomeFeaturedProjects from './HomeFeaturedProjects';
import HomeUpcomingEvents from './HomeUpcomingEvents';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        {/* Main content area */}
      <main className="pt-16">
        {children}
      </main> 
     
      
      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default Layout;
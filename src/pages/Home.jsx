import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Lightbulb, Trophy, Calendar, Github, FolderHeart } from 'lucide-react';
import HomeFeaturedProjects from '../components/HomeFeaturedProjects';
import HomeUpcomingEvents from '../components/HomeUpcomingEvents';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* logo */}
          <div className="mb-8">
            <img src="/cstclogo1.png" alt="CSTC Logo" className="h-36 mx-auto animate-bounce-slow" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-pulse">
            Connect. Solve. Think. Create.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          The Computer Science Technology Club at SAU is where tech enthusiasts come together to innovate, collaborate, and create.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link target='_blank'
              to="https://forms.gle/9oRDW1BzAVKFRBRWA"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg shadow-blue-600/25"
            >
              Collabrate with us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              View Projects
              <FolderHeart className="ml-2 h-5 w-5" />
            </Link>

          </div>
        </div>
      </section>

      {/* < HomeFeaturedProjects/> */}
      < HomeUpcomingEvents/>

      

      


      
    </div>
  );
};

export default Home;
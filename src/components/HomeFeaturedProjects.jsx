import React from 'react';
import { ArrowRight } from 'lucide-react';
import projects from '../data/ProjectsData'; // all projects
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const HomeFeaturedProjects = () => {
  const featured = projects.slice(0, 6); // First 6 projects

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white">Featured Projects</h2>
        <p className="text-gray-300 text-lg">Explore what our club is building!</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {featured.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/projects" className="flex justify-center">
             <button className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                  View All Projects
                 <ArrowRight className="ml-2 h-5 w-5" />
             </button>
        </Link>

      </div>
    </section>
  );
};

export default HomeFeaturedProjects;

import React from 'react';
import { Github, ExternalLink, Star, Users, Calendar } from 'lucide-react';
import projects from "../data/ProjectsData";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};


export default Projects;
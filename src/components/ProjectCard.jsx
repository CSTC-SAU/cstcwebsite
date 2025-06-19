// src/components/ProjectCard.jsx
import { Github, ExternalLink, Users } from "lucide-react";

const ProjectCard = ({ title, description, image, tech, github, demo, team }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-600 text-white text-xs rounded"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Team Info */}
        <div className="flex items-center mb-4 text-sm text-gray-400">
          <Users className="h-4 w-4 mr-2" />
          <span>{team.join(", ")}</span>
        </div>

        {/* Links */}
        <div className="flex space-x-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

  
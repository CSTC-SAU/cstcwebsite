import { Linkedin, Github } from "lucide-react";

const ExecutivesCrad = ({ member }) => {
  return (
    
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
          <div className="flex items-center space-x-6">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={`/images/${member.image}`}
                alt={member.name}
                className="w-28 h-28 rounded-2xl object-cover shadow-xl group-hover:shadow-2xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gray-800/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
    
            {/* Text Details */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-gray-300 font-medium mb-1">
                {member.position}
              </p>
              <p className="text-gray-400 text-sm mb-3">
                {member.course} ({member.batch})
              </p>
    
              {/* Links */}
              <div className="flex space-x-4 mt-2">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-white hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    className="text-white hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
  );
};

export default ExecutivesCrad;

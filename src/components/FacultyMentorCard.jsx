import { Mail, Linkedin, HandHelping, } from "lucide-react";

const FacultyMentorCrad = ({ mentor }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-gray-800 rounded-3xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="relative">
            <img
              src={`/images/${mentor.image}`}
              alt={mentor.name}
              className="w-48 h-48 rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-gray-700 p-4 rounded-2xl">
              <HandHelping className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">{mentor.name}</h2>
            <h3 className="text-xl text-gray-300 mb-2">{mentor.role}</h3>
            <p className="text-gray-400 mb-1">{mentor.department}</p>
            <p className="text-gray-300 mb-6">{mentor.bio}</p>

            {/* Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              {mentor.linkedin && (
                <a
                  href={mentor.linkedin}
                  className="text-white hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
              <a
                href={`mailto:${mentor.email}`}
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyMentorCrad;

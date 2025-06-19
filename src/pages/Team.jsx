import React from 'react';
import { Github, ExternalLink, Star, Users, Calendar } from 'lucide-react';
import FacultyMentorCard from '../components/FacultyMentorCard';
import ExecutivesData from '../data/ExecutivesData';
import ExecutivesCard from '../components/ExecutivesCard';
import FacultyMentorData from '../data/FacultyMentorData';

const Team = () => {
  return (
   <div className="bg-alabaster min-h-screen">
    <h2 className="text-3xl font-bold text-federal-blue mb-12 text-center mt-4">
        Faculty Mentor
      </h2>
      
      <FacultyMentorCard mentor={FacultyMentorData} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-federal-blue mb-12 text-center">
        Executive Team
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {ExecutivesData.map((member, index) => (
          <ExecutivesCard key={index} member={member} />
        ))}
      </div>

      </section>
      
    </div>
  
   
  );
};

export default Team;
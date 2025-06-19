import React from 'react';
import { ArrowRight } from 'lucide-react';
import upcomingEvents from '../data/UpcomingEvents';
import EventCard from './EventCard';
import { Link } from 'react-router-dom';

const HomeUpcomingEvents = () => {
  const featuredEvents = upcomingEvents.slice(0, 3); // First 3 upcoming

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-federal-blue">Upcoming Events</h2>
        <p className="text-gray-200 text-lg">Don’t miss out on what’s coming next!</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {featuredEvents.map(event => (
          <EventCard key={event.id} event={event} isUpcoming={true} />
        ))}
      </div>
      <div className="mt-8 text-center">
       <Link to="/events" className="flex justify-center">
                    <button className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                         View All Events
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
         </Link>
      </div>
    </section>
  );
};

export default HomeUpcomingEvents;

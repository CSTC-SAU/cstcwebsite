import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import upcomingEvents from '../data/UpcomingEvents';
import pastEvents from '../data/PastEvents';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;
  const isUpcoming = activeTab === 'upcoming';

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray mb-4">Events</h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Join our exciting workshops, hackathons, and tech talks to enhance your skills and network with fellow tech enthusiasts
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-xl p-1 flex">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isUpcoming
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'text-blue-600 hover:bg-blue-100'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                !isUpcoming
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'text-blue-600 hover:bg-blue-100'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {currentEvents.map(event => (
            <EventCard key={event.id} event={event} isUpcoming={isUpcoming} />
          ))}
        </div>

        {/* No Events */}
        {currentEvents.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">No Events Available</h3>
            <p className="text-gray-200">Check back soon for exciting upcoming events!</p>
          </div>
        )}
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Organize an Event?</h2>
          <p className="text-xl mb-8 opacity-90">
            Have an idea for a workshop or tech talk? We'd love to hear from you!
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            <a href="#">Propose an Event</a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;

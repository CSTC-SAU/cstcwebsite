import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

const EventCard = ({ event, isUpcoming }) => {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {event.tags[0]}
          </div>
        </div>
        {isUpcoming && event.registrationOpen && (
          <div className="absolute top-4 left-4">
            <div className="bg-green-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Registration Open
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>

        <div className="space-y-2 mb-4 text-gray-200">
          <div className="flex items-center text-sm"><Calendar className="h-4 w-4 mr-2" />{event.date}</div>
          <div className="flex items-center text-sm"><Clock className="h-4 w-4 mr-2" />{event.time}</div>
          <div className="flex items-center text-sm"><MapPin className="h-4 w-4 mr-2" />{event.location}</div>
          <div className="flex items-center text-sm"><Users className="h-4 w-4 mr-2" />{event.maxAttendees} seats</div>
        </div>

        <p className="text-sm text-gray-200 mb-4 leading-relaxed">{event.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-300">
            {isUpcoming ? 'Spots available' : 'Event completed'}
          </div>
          {isUpcoming && event.registrationOpen ? (
  <a 
    href={event.registrationLink} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 bg-blue-900 text-white hover:bg-blue-800"
  >
    <span>Register Now</span>
    <ArrowRight className="h-4 w-4" />
  </a>
) : (
  <button 
    className="flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold bg-gray-300 text-white cursor-not-allowed"
    disabled
  >
    <span>View Details</span>
    <ArrowRight className="h-4 w-4" />
  </button>
)}

        </div>
      </div>
    </div>
  );
};

export default EventCard;
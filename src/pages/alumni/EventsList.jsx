import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Filter,
  ArrowRight,
  CheckCircle,
  CircleDot
} from 'lucide-react';

const EventsList = () => {
  const navigate = useNavigate();

  // Dummy events data
  const eventsData = [
    {
      id: 1,
      title: "Alumni Gala 2025",
      date: "2025-10-15",
      time: "19:00",
      venue: "Grand Hotel Ballroom",
      address: "123 Main Street, Downtown",
      shortDescription: "Join us for our annual networking dinner and awards ceremony.",
      fullDescription: "Our most prestigious annual event brings together alumni from all generations. Enjoy dinner, networking, and celebrate outstanding achievements in our community.",
      speakers: [
        { name: "Dr. Sarah Johnson", title: "CEO, TechCorp", bio: "Leading innovator in AI technology" },
        { name: "Michael Chen", title: "Entrepreneur", bio: "Founder of three successful startups" }
      ],
      attendees: 250,
      maxAttendees: 300,
      category: "Networking",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Tech Innovation Workshop",
      date: "2025-11-08",
      time: "14:00",
      venue: "Innovation Hub",
      address: "456 Tech Avenue, Silicon Valley",
      shortDescription: "Learn about the latest trends in AI and machine learning.",
      fullDescription: "A hands-on workshop covering cutting-edge technologies in artificial intelligence, machine learning, and their practical applications in various industries.",
      speakers: [
        { name: "Dr. Emily Davis", title: "AI Research Director", bio: "Leading researcher in machine learning" },
        { name: "James Wilson", title: "Senior Data Scientist", bio: "Expert in ML implementation" }
      ],
      attendees: 45,
      maxAttendees: 50,
      category: "Education",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Career Mentorship Panel",
      date: "2025-09-25", // Past event
      time: "18:00",
      venue: "University Auditorium",
      address: "789 Campus Drive, University City",
      shortDescription: "Connect with successful alumni mentors across various industries.",
      fullDescription: "An interactive panel discussion featuring alumni who have achieved success in diverse fields, sharing insights and offering mentorship opportunities.",
      speakers: [
        { name: "Lisa Wang", title: "Investment Banker", bio: "VP at Goldman Sachs" },
        { name: "Robert Taylor", title: "Healthcare Executive", bio: "Hospital Administrator" }
      ],
      attendees: 120,
      maxAttendees: 150,
      category: "Career",
      image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Startup Pitch Competition",
      date: "2025-12-03",
      time: "10:00",
      venue: "Entrepreneurship Center",
      address: "321 Business Boulevard, StartupCity",
      shortDescription: "Watch alumni entrepreneurs pitch their innovative business ideas.",
      fullDescription: "Alumni entrepreneurs present their startup ideas to a panel of investors and industry experts. Network with founders and learn about emerging business opportunities.",
      speakers: [
        { name: "Maria Garcia", title: "Venture Capitalist", bio: "Partner at Innovation Ventures" },
        { name: "David Rodriguez", title: "Serial Entrepreneur", bio: "Founded 5 successful companies" }
      ],
      attendees: 80,
      maxAttendees: 100,
      category: "Business",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Alumni Sports Day",
      date: "2025-09-10", // Past event
      time: "09:00",
      venue: "University Sports Complex",
      address: "555 Athletic Drive, Campus",
      shortDescription: "Fun-filled day of sports activities and team building.",
      fullDescription: "A day of friendly competition and recreation featuring various sports activities, BBQ lunch, and opportunities to reconnect with classmates in a relaxed environment.",
      speakers: [
        { name: "Coach Thompson", title: "Athletic Director", bio: "30 years of coaching excellence" }
      ],
      attendees: 95,
      maxAttendees: 100,
      category: "Social",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      title: "Global Alumni Meetup",
      date: "2025-11-20",
      time: "15:00",
      venue: "Virtual Event",
      address: "Online Platform",
      shortDescription: "Connect with alumni worldwide in our virtual networking event.",
      fullDescription: "Join alumni from around the globe in this virtual networking event featuring breakout rooms by industry, geographic region, and graduation year.",
      speakers: [
        { name: "Jennifer Lee", title: "Global Alumni Director", bio: "Connecting alumni worldwide" },
        { name: "International Panel", title: "Various", bio: "Alumni from 6 continents" }
      ],
      attendees: 180,
      maxAttendees: 500,
      category: "Virtual",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=200&fit=crop"
    }
  ];

  const [filterType, setFilterType] = useState('all'); // 'all', 'upcoming', 'past'
  const [rsvpEvents, setRsvpEvents] = useState(new Set());

  // Filter events based on date and filter type
  const filteredEvents = useMemo(() => {
    const now = new Date();
    const today = now.toISOString().split('T')[0];

    return eventsData.filter(event => {
      const eventDate = event.date;
      
      switch (filterType) {
        case 'upcoming':
          return eventDate >= today;
        case 'past':
          return eventDate < today;
        default:
          return true;
      }
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [filterType]);

  const handleRSVP = (eventId, eventTitle) => {
    const newRsvpEvents = new Set(rsvpEvents);
    
    if (rsvpEvents.has(eventId)) {
      newRsvpEvents.delete(eventId);
      console.log(`RSVP Cancelled for: ${eventTitle} (ID: ${eventId})`);
    } else {
      newRsvpEvents.add(eventId);
      console.log(`RSVP Confirmed for: ${eventTitle} (ID: ${eventId})`);
    }
    
    setRsvpEvents(newRsvpEvents);
  };

  const handleViewDetails = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  const formatDate = (dateString) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const isUpcoming = (dateString) => {
    const today = new Date().toISOString().split('T')[0];
    return dateString >= today;
  };

  const EventCard = ({ event }) => (
    <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            isUpcoming(event.date) 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {isUpcoming(event.date) ? 'Upcoming' : 'Past Event'}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {event.category}
          </span>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-slate-800 line-clamp-2">
          {event.title}
        </CardTitle>
        <CardDescription className="text-slate-600">
          {event.shortDescription}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Calendar className="h-4 w-4 text-blue-600" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Clock className="h-4 w-4 text-green-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4 text-red-600" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Users className="h-4 w-4 text-purple-600" />
            <span>{event.attendees}/{event.maxAttendees} attendees</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 pt-4">
          <Button 
            onClick={() => handleViewDetails(event.id)}
            variant="default"
            className="flex-1"
          >
            View Details
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
          
          {isUpcoming(event.date) && (
            <Button 
              onClick={() => handleRSVP(event.id, event.title)}
              variant={rsvpEvents.has(event.id) ? "default" : "outline"}
              className="flex-1"
            >
              {rsvpEvents.has(event.id) ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  RSVP'd
                </>
              ) : (
                <>
                  <CircleDot className="h-4 w-4 mr-2" />
                  RSVP
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Alumni Events</h1>
          <p className="text-slate-600">Discover and join upcoming alumni events and activities</p>
        </div>

        {/* Filter Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-blue-600" />
              <span>Filter Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button
                variant={filterType === 'all' ? 'default' : 'outline'}
                onClick={() => setFilterType('all')}
              >
                All Events ({eventsData.length})
              </Button>
              <Button
                variant={filterType === 'upcoming' ? 'default' : 'outline'}
                onClick={() => setFilterType('upcoming')}
              >
                Upcoming ({eventsData.filter(e => isUpcoming(e.date)).length})
              </Button>
              <Button
                variant={filterType === 'past' ? 'default' : 'outline'}
                onClick={() => setFilterType('past')}
              >
                Past Events ({eventsData.filter(e => !isUpcoming(e.date)).length})
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Calendar className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-800 mb-2">No Events Found</h3>
              <p className="text-slate-600">
                {filterType === 'upcoming' 
                  ? "No upcoming events at the moment. Check back soon!" 
                  : filterType === 'past'
                  ? "No past events to display."
                  : "No events available."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-800">
                  {filterType === 'all' ? 'All Events' : 
                   filterType === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
                </h2>
                <span className="text-slate-600">
                  {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default EventsList;
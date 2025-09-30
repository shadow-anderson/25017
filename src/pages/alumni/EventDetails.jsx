import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowLeft,
  CheckCircle,
  CircleDot,
  User,
  Share2,
  Download
} from 'lucide-react';

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [isRSVPed, setIsRSVPed] = useState(false);

  // Same dummy data as EventsList (in real app, this would come from API/state management)
  const eventsData = [
    {
      id: 1,
      title: "Alumni Gala 2025",
      date: "2025-10-15",
      time: "19:00",
      venue: "Grand Hotel Ballroom",
      address: "123 Main Street, Downtown",
      shortDescription: "Join us for our annual networking dinner and awards ceremony.",
      fullDescription: "Our most prestigious annual event brings together alumni from all generations. Enjoy dinner, networking, and celebrate outstanding achievements in our community. This elegant evening will feature a three-course dinner, cocktail reception, awards ceremony, and dancing. Dress code is formal attire. Parking is available on-site with valet service.",
      speakers: [
        { 
          name: "Dr. Sarah Johnson", 
          title: "CEO, TechCorp", 
          bio: "Leading innovator in AI technology with over 15 years of experience in the tech industry. Dr. Johnson has been featured in Forbes and has spoken at major conferences worldwide.",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612d7c6?w=150&h=150&fit=crop&crop=face"
        },
        { 
          name: "Michael Chen", 
          title: "Entrepreneur", 
          bio: "Founder of three successful startups with a combined valuation of over $500M. Michael is passionate about mentoring young entrepreneurs and supporting innovation.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        }
      ],
      attendees: 250,
      maxAttendees: 300,
      category: "Networking",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop",
      agenda: [
        { time: "18:00", activity: "Registration & Cocktail Reception" },
        { time: "19:30", activity: "Welcome Dinner" },
        { time: "20:30", activity: "Keynote Presentations" },
        { time: "21:30", activity: "Awards Ceremony" },
        { time: "22:00", activity: "Networking & Dancing" }
      ]
    },
    {
      id: 2,
      title: "Tech Innovation Workshop",
      date: "2025-11-08",
      time: "14:00",
      venue: "Innovation Hub",
      address: "456 Tech Avenue, Silicon Valley",
      shortDescription: "Learn about the latest trends in AI and machine learning.",
      fullDescription: "A hands-on workshop covering cutting-edge technologies in artificial intelligence, machine learning, and their practical applications in various industries. Participants will engage in interactive sessions, live demonstrations, and networking opportunities with industry experts. All skill levels welcome.",
      speakers: [
        { 
          name: "Dr. Emily Davis", 
          title: "AI Research Director", 
          bio: "Leading researcher in machine learning with PhD from MIT. Author of 50+ research papers and holds 12 patents in AI technology.",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        },
        { 
          name: "James Wilson", 
          title: "Senior Data Scientist", 
          bio: "Expert in ML implementation at Fortune 500 companies. Specialized in deploying large-scale machine learning systems.",
          image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
        }
      ],
      attendees: 45,
      maxAttendees: 50,
      category: "Education",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      agenda: [
        { time: "14:00", activity: "Welcome & Introduction to AI" },
        { time: "14:30", activity: "Machine Learning Fundamentals" },
        { time: "15:30", activity: "Hands-on Workshop Session" },
        { time: "16:30", activity: "Break & Networking" },
        { time: "17:00", activity: "Advanced Applications & Q&A" }
      ]
    },
    {
      id: 3,
      title: "Career Mentorship Panel",
      date: "2025-09-25",
      time: "18:00",
      venue: "University Auditorium",
      address: "789 Campus Drive, University City",
      shortDescription: "Connect with successful alumni mentors across various industries.",
      fullDescription: "An interactive panel discussion featuring alumni who have achieved success in diverse fields, sharing insights and offering mentorship opportunities. This event is perfect for recent graduates and career changers looking for guidance and networking opportunities.",
      speakers: [
        { 
          name: "Lisa Wang", 
          title: "Investment Banker", 
          bio: "VP at Goldman Sachs with expertise in mergers and acquisitions. Graduated summa cum laude and has 10 years of Wall Street experience.",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
        },
        { 
          name: "Robert Taylor", 
          title: "Healthcare Executive", 
          bio: "Hospital Administrator with 20 years of experience in healthcare management. Led digital transformation initiatives at multiple healthcare systems.",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
        }
      ],
      attendees: 120,
      maxAttendees: 150,
      category: "Career",
      image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=800&h=400&fit=crop",
      agenda: [
        { time: "18:00", activity: "Welcome & Registration" },
        { time: "18:15", activity: "Panel Discussion" },
        { time: "19:00", activity: "Breakout Mentoring Sessions" },
        { time: "19:45", activity: "Networking Reception" }
      ]
    },
    {
      id: 4,
      title: "Startup Pitch Competition",
      date: "2025-12-03",
      time: "10:00",
      venue: "Entrepreneurship Center",
      address: "321 Business Boulevard, StartupCity",
      shortDescription: "Watch alumni entrepreneurs pitch their innovative business ideas.",
      fullDescription: "Alumni entrepreneurs present their startup ideas to a panel of investors and industry experts. Network with founders and learn about emerging business opportunities. Cash prizes and investment opportunities available for winners.",
      speakers: [
        { 
          name: "Maria Garcia", 
          title: "Venture Capitalist", 
          bio: "Partner at Innovation Ventures with $500M under management. Has invested in 100+ startups with 15 successful exits.",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
        },
        { 
          name: "David Rodriguez", 
          title: "Serial Entrepreneur", 
          bio: "Founded 5 successful companies with 3 exits totaling $200M. Currently CEO of tech startup with 200+ employees.",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        }
      ],
      attendees: 80,
      maxAttendees: 100,
      category: "Business",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
      agenda: [
        { time: "10:00", activity: "Registration & Coffee" },
        { time: "10:30", activity: "Opening Remarks" },
        { time: "11:00", activity: "Startup Pitch Presentations" },
        { time: "13:00", activity: "Lunch & Networking" },
        { time: "14:00", activity: "Judging & Awards Ceremony" }
      ]
    },
    {
      id: 5,
      title: "Alumni Sports Day",
      date: "2025-09-10",
      time: "09:00",
      venue: "University Sports Complex",
      address: "555 Athletic Drive, Campus",
      shortDescription: "Fun-filled day of sports activities and team building.",
      fullDescription: "A day of friendly competition and recreation featuring various sports activities, BBQ lunch, and opportunities to reconnect with classmates in a relaxed environment. Activities include tennis, basketball, swimming, and team-building games.",
      speakers: [
        { 
          name: "Coach Thompson", 
          title: "Athletic Director", 
          bio: "30 years of coaching excellence with multiple championship titles. Dedicated to promoting fitness and team spirit among alumni.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        }
      ],
      attendees: 95,
      maxAttendees: 100,
      category: "Social",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop",
      agenda: [
        { time: "09:00", activity: "Registration & Team Formation" },
        { time: "09:30", activity: "Opening Ceremony" },
        { time: "10:00", activity: "Sports Competitions Begin" },
        { time: "12:00", activity: "BBQ Lunch Break" },
        { time: "13:30", activity: "Afternoon Activities & Awards" }
      ]
    },
    {
      id: 6,
      title: "Global Alumni Meetup",
      date: "2025-11-20",
      time: "15:00",
      venue: "Virtual Event",
      address: "Online Platform",
      shortDescription: "Connect with alumni worldwide in our virtual networking event.",
      fullDescription: "Join alumni from around the globe in this virtual networking event featuring breakout rooms by industry, geographic region, and graduation year. Special presentations on global opportunities and international career paths.",
      speakers: [
        { 
          name: "Jennifer Lee", 
          title: "Global Alumni Director", 
          bio: "Connecting alumni worldwide for over 10 years. Expert in virtual event management and international networking.",
          image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face"
        }
      ],
      attendees: 180,
      maxAttendees: 500,
      category: "Virtual",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=400&fit=crop",
      agenda: [
        { time: "15:00", activity: "Welcome & Platform Tutorial" },
        { time: "15:15", activity: "Global Alumni Presentation" },
        { time: "15:45", activity: "Breakout Room Networking" },
        { time: "16:30", activity: "Regional Spotlights" },
        { time: "17:00", activity: "Closing & Next Steps" }
      ]
    }
  ];

  const event = eventsData.find(e => e.id === parseInt(eventId));

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="text-center py-12">
            <CardContent>
              <h3 className="text-lg font-medium text-slate-800 mb-2">Event Not Found</h3>
              <p className="text-slate-600 mb-4">The event you're looking for doesn't exist.</p>
              <Button onClick={() => navigate('/events')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  const handleRSVP = () => {
    setIsRSVPed(!isRSVPed);
    const action = isRSVPed ? 'Cancelled RSVP' : 'RSVP Confirmed';
    console.log(`${action} for: ${event.title} (ID: ${event.id})`);
  };

  const handleBack = () => {
    navigate('/events');
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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.shortDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Event link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button 
            onClick={handleBack}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Events</span>
          </Button>
        </div>

        {/* Hero Section */}
        <Card className="mb-8 shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-6 text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600">
                    {event.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isUpcoming(event.date) 
                      ? 'bg-green-600' 
                      : 'bg-gray-600'
                  }`}>
                    {isUpcoming(event.date) ? 'Upcoming' : 'Past Event'}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
                <p className="text-lg opacity-90">{event.shortDescription}</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 leading-relaxed">{event.fullDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-slate-800">{formatDate(event.date)}</p>
                        <p className="text-sm text-slate-600">Event Date</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-slate-800">{event.time}</p>
                        <p className="text-sm text-slate-600">Start Time</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="font-medium text-slate-800">{event.venue}</p>
                        <p className="text-sm text-slate-600">{event.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-slate-800">{event.attendees}/{event.maxAttendees}</p>
                        <p className="text-sm text-slate-600">Attendees</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agenda */}
            {event.agenda && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Event Agenda</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {event.agenda.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 pb-4 border-b border-slate-100 last:border-b-0">
                        <div className="flex-shrink-0 w-16 text-sm font-medium text-blue-600">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-800">{item.activity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Speakers */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Featured Speakers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <img
                        src={speaker.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&size=80`}
                        alt={speaker.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800">{speaker.name}</h4>
                        <p className="text-sm text-blue-600 mb-2">{speaker.title}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{speaker.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* RSVP Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Event Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isUpcoming(event.date) ? (
                  <>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-800">{event.maxAttendees - event.attendees}</p>
                      <p className="text-sm text-slate-600">spots remaining</p>
                    </div>
                    <Button 
                      onClick={handleRSVP}
                      className="w-full"
                      variant={isRSVPed ? "default" : "outline"}
                      size="lg"
                    >
                      {isRSVPed ? (
                        <>
                          <CheckCircle className="h-5 w-5 mr-2" />
                          You're Registered!
                        </>
                      ) : (
                        <>
                          <CircleDot className="h-5 w-5 mr-2" />
                          Register for Event
                        </>
                      )}
                    </Button>
                    {isRSVPed && (
                      <p className="text-sm text-center text-slate-600">
                        You'll receive a confirmation email shortly.
                      </p>
                    )}
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-slate-600">This event has already taken place.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={handleShare}
                  variant="outline" 
                  className="w-full"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Event
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.print()}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Save Details
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-3">
                  Have questions about this event? Contact our events team.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-700">
                    <strong>Email:</strong> events@alumniconnect.edu
                  </p>
                  <p className="text-slate-700">
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
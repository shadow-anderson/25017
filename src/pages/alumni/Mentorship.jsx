import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { SelectTrigger } from '../../components/ui/select';
import { 
  Search, 
  Filter, 
  Users, 
  Star, 
  Calendar,
  MapPin,
  Building,
  MessageCircle,
  Clock,
  Award,
  Send,
  CheckCircle,
  UserCheck
} from 'lucide-react';

const Mentorship = () => {
  // Dummy mentorship data
  const mentorsData = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Senior Vice President of Engineering",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      batch: "2010",
      department: "Computer Science",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612d7c6?w=150&h=150&fit=crop&crop=face",
      expertise: ["Software Engineering", "Leadership", "Career Transition", "Startup Advice"],
      availability: "Available",
      mentoringStyle: "Structured 1-on-1 sessions",
      experience: "15+ years",
      rating: 4.9,
      sessionsCompleted: 45,
      responseTime: "Within 24 hours",
      preferredTopics: ["Technical Leadership", "Engineering Management", "Career Growth", "Work-Life Balance"],
      bio: "Passionate about helping early-career engineers navigate the tech industry. I've led teams of 50+ engineers and have experience in both startups and large corporations.",
      languages: ["English", "Spanish"],
      timeZone: "PST",
      mentoringFormat: ["Video Call", "In-Person", "Phone"]
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Investment Director",
      company: "Venture Capital Partners",
      location: "New York, NY",
      batch: "2008",
      department: "Business Administration",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      expertise: ["Finance", "Investment Banking", "Venture Capital", "Entrepreneurship"],
      availability: "Limited",
      mentoringStyle: "Flexible consultations",
      experience: "12+ years",
      rating: 4.8,
      sessionsCompleted: 32,
      responseTime: "Within 48 hours",
      preferredTopics: ["Investment Strategy", "Financial Planning", "Startup Funding", "Business Development"],
      bio: "Help entrepreneurs and finance professionals understand venture capital and investment strategies. Previously worked at Goldman Sachs before transitioning to VC.",
      languages: ["English", "Mandarin"],
      timeZone: "EST",
      mentoringFormat: ["Video Call", "Phone"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Head of Product Design",
      company: "Design Systems Co.",
      location: "Austin, TX",
      batch: "2014",
      department: "Design",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      expertise: ["UX/UI Design", "Product Strategy", "Design Systems", "Team Leadership"],
      availability: "Available",
      mentoringStyle: "Portfolio reviews & strategy sessions",
      experience: "8+ years",
      rating: 4.9,
      sessionsCompleted: 67,
      responseTime: "Within 12 hours",
      preferredTopics: ["Design Career Path", "Portfolio Building", "Design Thinking", "User Research"],
      bio: "Love helping aspiring designers build strong portfolios and develop their design thinking skills. I've worked with companies from early-stage startups to Fortune 500.",
      languages: ["English"],
      timeZone: "CST",
      mentoringFormat: ["Video Call", "In-Person", "Portfolio Review"]
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      title: "Chief Data Scientist",
      company: "AI Research Labs",
      location: "Boston, MA",
      batch: "2009",
      department: "Computer Science",
      photo: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
      expertise: ["Data Science", "Machine Learning", "AI Research", "PhD Guidance"],
      availability: "Available",
      mentoringStyle: "Technical deep-dives & research guidance",
      experience: "14+ years",
      rating: 4.7,
      sessionsCompleted: 28,
      responseTime: "Within 48 hours",
      preferredTopics: ["ML Engineering", "Research Methodology", "PhD Applications", "Technical Writing"],
      bio: "Research scientist turned industry practitioner. I help data scientists transition between academia and industry, and guide PhD students through their research journey.",
      languages: ["English"],
      timeZone: "EST",
      mentoringFormat: ["Video Call", "Research Review"]
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Marketing Director",
      company: "Growth Marketing Agency",
      location: "Seattle, WA",
      batch: "2012",
      department: "Marketing",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      expertise: ["Digital Marketing", "Growth Strategy", "Brand Management", "Content Strategy"],
      availability: "Available",
      mentoringStyle: "Practical workshops & campaign reviews",
      experience: "10+ years",
      rating: 4.8,
      sessionsCompleted: 41,
      responseTime: "Within 24 hours",
      preferredTopics: ["Marketing Strategy", "Career Transition", "Personal Branding", "Growth Hacking"],
      bio: "Passionate about helping marketers develop comprehensive growth strategies. I've helped companies achieve 10x growth through data-driven marketing approaches.",
      languages: ["English", "Korean"],
      timeZone: "PST",
      mentoringFormat: ["Video Call", "Workshop", "Campaign Review"]
    },
    {
      id: 6,
      name: "Robert Taylor",
      title: "Healthcare Administrator",
      company: "Metropolitan Hospital System",
      location: "Chicago, IL",
      batch: "2006",
      department: "Healthcare Management",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      expertise: ["Healthcare Management", "Operations", "Leadership", "Policy Development"],
      availability: "Limited",
      mentoringStyle: "Industry insights & leadership coaching",
      experience: "18+ years",
      rating: 4.9,
      sessionsCompleted: 23,
      responseTime: "Within 72 hours",
      preferredTopics: ["Healthcare Leadership", "Operations Management", "Industry Transitions", "Policy Analysis"],
      bio: "Healthcare executive with extensive experience in hospital administration and healthcare policy. I guide professionals entering or advancing in healthcare management.",
      languages: ["English"],
      timeZone: "CST",
      mentoringFormat: ["Video Call", "Phone"]
    },
    {
      id: 7,
      name: "Maria Garcia",
      title: "Senior Consultant",
      company: "McKinsey & Company",
      location: "Los Angeles, CA",
      batch: "2013",
      department: "Business Administration",
      photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      expertise: ["Management Consulting", "Strategy", "Case Interview Prep", "MBA Guidance"],
      availability: "Available",
      mentoringStyle: "Case practice & career coaching",
      experience: "9+ years",
      rating: 4.8,
      sessionsCompleted: 56,
      responseTime: "Within 24 hours",
      preferredTopics: ["Consulting Career", "Case Interviews", "MBA Applications", "Strategy Development"],
      bio: "Management consultant specializing in strategy and operations. I help students and professionals break into top-tier consulting firms through comprehensive interview preparation.",
      languages: ["English", "Spanish"],
      timeZone: "PST",
      mentoringFormat: ["Video Call", "Case Practice", "Mock Interviews"]
    },
    {
      id: 8,
      name: "David Kim",
      title: "Startup Founder & CEO",
      company: "TechStartup Solutions",
      location: "Remote",
      batch: "2011",
      department: "Entrepreneurship",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      expertise: ["Entrepreneurship", "Startup Strategy", "Fundraising", "Product Development"],
      availability: "Available",
      mentoringStyle: "Hands-on startup guidance",
      experience: "11+ years",
      rating: 4.7,
      sessionsCompleted: 38,
      responseTime: "Within 24 hours",
      preferredTopics: ["Startup Ideation", "Fundraising Strategy", "Product-Market Fit", "Scaling Teams"],
      bio: "Serial entrepreneur with 3 successful exits. I mentor aspiring entrepreneurs through the entire startup journey from ideation to exit strategies.",
      languages: ["English", "Korean"],
      timeZone: "Flexible",
      mentoringFormat: ["Video Call", "In-Person", "Startup Review"]
    },
    {
      id: 9,
      name: "Jennifer Lee",
      title: "Software Engineering Manager",
      company: "Apple Inc.",
      location: "Cupertino, CA",
      batch: "2015",
      department: "Computer Science",
      photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face",
      expertise: ["Software Engineering", "iOS Development", "Engineering Management", "Technical Interviews"],
      availability: "Available",
      mentoringStyle: "Technical mentoring & interview prep",
      experience: "7+ years",
      rating: 4.9,
      sessionsCompleted: 52,
      responseTime: "Within 12 hours",
      preferredTopics: ["iOS Development", "Technical Leadership", "FAANG Interviews", "Career Growth"],
      bio: "Software engineering manager at Apple with expertise in iOS development. I help engineers land jobs at top tech companies and grow into leadership roles.",
      languages: ["English"],
      timeZone: "PST",
      mentoringFormat: ["Video Call", "Code Review", "Mock Interviews"]
    },
    {
      id: 10,
      name: "Dr. Amanda Foster",
      title: "Research Director",
      company: "Pharmaceutical Research Institute",
      location: "Philadelphia, PA",
      batch: "2007",
      department: "Biomedical Engineering",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      expertise: ["Biomedical Research", "Drug Development", "Academic Transition", "Scientific Writing"],
      availability: "Limited",
      mentoringStyle: "Research methodology & career guidance",
      experience: "16+ years",
      rating: 4.8,
      sessionsCompleted: 19,
      responseTime: "Within 48 hours",
      preferredTopics: ["Research Career", "Industry Transition", "Grant Writing", "Scientific Publications"],
      bio: "Biomedical researcher with extensive experience in both academia and pharmaceutical industry. I guide scientists through career transitions and research methodologies.",
      languages: ["English"],
      timeZone: "EST",
      mentoringFormat: ["Video Call", "Research Review"]
    }
  ];

  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [expertiseFilter, setExpertiseFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');
  const [requestedMentors, setRequestedMentors] = useState(new Set());

  // Get unique values for filters
  const uniqueExpertise = [...new Set(mentorsData.flatMap(mentor => mentor.expertise))].sort();
  const uniqueDepartments = [...new Set(mentorsData.map(mentor => mentor.department))].sort();
  const uniqueAvailability = [...new Set(mentorsData.map(mentor => mentor.availability))].sort();

  // Filter and search logic
  const filteredMentors = useMemo(() => {
    return mentorsData.filter(mentor => {
      const matchesSearch = searchQuery === '' || 
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
        mentor.preferredTopics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesExpertise = expertiseFilter === '' || 
        mentor.expertise.includes(expertiseFilter);
      const matchesDepartment = departmentFilter === '' || 
        mentor.department === departmentFilter;
      const matchesAvailability = availabilityFilter === '' || 
        mentor.availability === availabilityFilter;

      return matchesSearch && matchesExpertise && matchesDepartment && matchesAvailability;
    });
  }, [searchQuery, expertiseFilter, departmentFilter, availabilityFilter]);

  const handleMentorshipRequest = (mentorId, mentorName) => {
    const newRequestedMentors = new Set(requestedMentors);
    
    if (requestedMentors.has(mentorId)) {
      newRequestedMentors.delete(mentorId);
      console.log(`Mentorship request cancelled for: ${mentorName} (ID: ${mentorId})`);
    } else {
      newRequestedMentors.add(mentorId);
      console.log(`Mentorship request sent to: ${mentorName} (ID: ${mentorId})`);
    }
    
    setRequestedMentors(newRequestedMentors);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setExpertiseFilter('');
    setDepartmentFilter('');
    setAvailabilityFilter('');
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Limited':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const MentorCard = ({ mentor }) => (
    <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={mentor.photo}
              alt={mentor.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div>
              <CardTitle className="text-lg font-bold text-slate-800">
                {mentor.name}
              </CardTitle>
              <CardDescription className="text-slate-600 font-medium">
                {mentor.title}
              </CardDescription>
              <p className="text-sm text-slate-500">{mentor.company}</p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(mentor.availability)}`}>
              {mentor.availability}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-slate-700">{mentor.rating}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Building className="h-4 w-4 text-blue-500" />
            <span className="text-slate-600">{mentor.department}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-red-500" />
            <span className="text-slate-600">{mentor.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-purple-500" />
            <span className="text-slate-600">{mentor.experience}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-green-500" />
            <span className="text-slate-600">Class of {mentor.batch}</span>
          </div>
        </div>

        {/* Expertise Tags */}
        <div>
          <h4 className="text-sm font-medium text-slate-700 mb-2">Expertise Areas</h4>
          <div className="flex flex-wrap gap-2">
            {mentor.expertise.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
              >
                {skill}
              </span>
            ))}
            {mentor.expertise.length > 3 && (
              <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md">
                +{mentor.expertise.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Mentoring Info */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Sessions completed:</span>
            <span className="font-medium text-slate-800">{mentor.sessionsCompleted}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Response time:</span>
            <span className="font-medium text-slate-800">{mentor.responseTime}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Mentoring style:</span>
            <span className="font-medium text-slate-800 text-right text-xs">{mentor.mentoringStyle}</span>
          </div>
        </div>

        {/* Bio */}
        <div>
          <p className="text-sm text-slate-700 line-clamp-3">{mentor.bio}</p>
        </div>

        {/* Request Button */}
        <Button 
          onClick={() => handleMentorshipRequest(mentor.id, mentor.name)}
          className="w-full mt-4"
          variant={requestedMentors.has(mentor.id) ? "default" : "outline"}
        >
          {requestedMentors.has(mentor.id) ? (
            <>
              <CheckCircle className="h-4 w-4 mr-2" />
              Request Sent
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Request Mentorship
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Find a Mentor / Mentee</h1>
          <p className="text-slate-600">Connect with experienced alumni who can guide your career journey</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-blue-600" />
              <span>Search & Filter Mentors</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search by name, expertise, company, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Expertise Area</label>
                <SelectTrigger>
                  <select
                    value={expertiseFilter}
                    onChange={(e) => setExpertiseFilter(e.target.value)}
                    className="w-full bg-transparent border-none outline-none"
                  >
                    <option value="">All Expertise</option>
                    {uniqueExpertise.map(expertise => (
                      <option key={expertise} value={expertise}>{expertise}</option>
                    ))}
                  </select>
                </SelectTrigger>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Department</label>
                <SelectTrigger>
                  <select
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                    className="w-full bg-transparent border-none outline-none"
                  >
                    <option value="">All Departments</option>
                    {uniqueDepartments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </SelectTrigger>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Availability</label>
                <SelectTrigger>
                  <select
                    value={availabilityFilter}
                    onChange={(e) => setAvailabilityFilter(e.target.value)}
                    className="w-full bg-transparent border-none outline-none"
                  >
                    <option value="">All Availability</option>
                    {uniqueAvailability.map(avail => (
                      <option key={avail} value={avail}>{avail}</option>
                    ))}
                  </select>
                </SelectTrigger>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Actions</label>
                <Button onClick={clearFilters} variant="outline" className="w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Users className="h-5 w-5 text-slate-600" />
            <span className="text-slate-700 font-medium">
              {filteredMentors.length} Mentor{filteredMentors.length !== 1 ? 's' : ''} Available
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <UserCheck className="h-4 w-4 text-green-600" />
            <span className="text-sm text-slate-600">
              {requestedMentors.size} Request{requestedMentors.size !== 1 ? 's' : ''} Sent
            </span>
          </div>
        </div>

        {/* Mentors Grid */}
        {filteredMentors.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Users className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-800 mb-2">No Mentors Found</h3>
              <p className="text-slate-600">Try adjusting your search criteria or clearing filters.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map(mentor => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        )}

        {/* Info Section */}
        <Card className="mt-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              <span>How Mentorship Works</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">1. Find Your Mentor</h3>
                <p className="text-sm text-slate-600">Browse our directory of experienced alumni and find mentors who match your career goals and interests.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Send className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">2. Send Request</h3>
                <p className="text-sm text-slate-600">Click "Request Mentorship" to send a personalized message introducing yourself and your mentoring goals.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">3. Start Mentoring</h3>
                <p className="text-sm text-slate-600">Once your request is accepted, schedule your first session and begin your mentoring journey.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Mentorship;
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { 
  Calendar, 
  Users, 
  Briefcase, 
  Clock, 
  MapPin, 
  MessageSquare,
  TrendingUp 
} from 'lucide-react';

const Dashboard = () => {
  // Dummy data for the alumni
  const alumniData = {
    name: "John Smith",
    stats: {
      eventsJoined: 12,
      mentorshipSessions: 8,
      jobsPosted: 3,
      jobsApplied: 15
    },
    recentActivity: [
      {
        id: 1,
        action: "Joined networking event",
        description: "Tech Professionals Meetup 2025",
        timestamp: "2 hours ago",
        type: "event",
        icon: Calendar
      },
      {
        id: 2,
        action: "Posted a new job",
        description: "Senior Software Engineer at TechCorp",
        timestamp: "1 day ago",
        type: "job",
        icon: Briefcase
      },
      {
        id: 3,
        action: "Completed mentorship session",
        description: "Career guidance for recent graduate",
        timestamp: "3 days ago",
        type: "mentorship",
        icon: Users
      }
    ]
  };

  const StatCard = ({ title, value, description, icon: Icon, trend }) => (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-slate-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-800">{value}</div>
        <p className="text-xs text-slate-500 mt-1">
          {description}
        </p>
        {trend && (
          <div className="flex items-center mt-2 text-xs text-green-600">
            <TrendingUp className="h-3 w-3 mr-1" />
            {trend}
          </div>
        )}
      </CardContent>
    </Card>
  );

  const ActivityItem = ({ activity }) => {
    const Icon = activity.icon;
    
    return (
      <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-150">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Icon className="h-4 w-4 text-blue-600" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-800">
            {activity.action}
          </p>
          <p className="text-sm text-slate-600">
            {activity.description}
          </p>
          <div className="flex items-center mt-1 text-xs text-slate-500">
            <Clock className="h-3 w-3 mr-1" />
            {activity.timestamp}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Welcome back, {alumniData.name}!
          </h1>
          <p className="text-slate-600">
            Here's what's happening in your AlumniConnect portal today.
          </p>
        </div>

        {/* Quick Stats Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Events Joined"
              value={alumniData.stats.eventsJoined}
              description="This year"
              icon={Calendar}
              trend="+2 this month"
            />
            <StatCard
              title="Mentorship Sessions"
              value={alumniData.stats.mentorshipSessions}
              description="Sessions offered"
              icon={Users}
              trend="+1 this week"
            />
            <StatCard
              title="Jobs Posted"
              value={alumniData.stats.jobsPosted}
              description="Opportunities shared"
              icon={Briefcase}
            />
            <StatCard
              title="Jobs Applied"
              value={alumniData.stats.jobsApplied}
              description="Applications sent"
              icon={MessageSquare}
              trend="+3 this month"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800">
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Your latest actions and engagements
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {alumniData.recentActivity.map((activity) => (
                    <ActivityItem key={activity.id} activity={activity} />
                  ))}
                </div>
                <div className="p-4 border-t">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View all activity →
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions / Upcoming Events */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800">
                  Upcoming Events
                </CardTitle>
                <CardDescription>
                  Don't miss these networking opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-800">Alumni Gala 2025</h4>
                    <p className="text-sm text-slate-600 mb-1">Annual networking dinner</p>
                    <div className="flex items-center text-xs text-slate-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      Grand Hotel Ballroom
                    </div>
                    <div className="flex items-center text-xs text-slate-500 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      Oct 15, 2025 - 7:00 PM
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-800">Mentorship Workshop</h4>
                    <p className="text-sm text-slate-600 mb-1">Learn effective mentoring techniques</p>
                    <div className="flex items-center text-xs text-slate-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      Virtual Event
                    </div>
                    <div className="flex items-center text-xs text-slate-500 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      Oct 22, 2025 - 2:00 PM
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View all events →
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
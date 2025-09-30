import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import { Users, Heart, Calendar, DollarSign, ArrowRight } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Stay Connected,
              <span className="text-blue-600 block">Stay Engaged</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of alumni building meaningful connections, mentoring the next generation, 
              and making a lasting impact on your university community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg rounded-lg border-2 hover:bg-slate-50 transition-all">
                  Login to Your Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Powerful Features for Alumni Engagement
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to stay connected with your alma mater and fellow graduates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Users}
              title="Networking"
              description="Connect with alumni across industries, locations, and graduation years. Build meaningful professional relationships."
              iconColor="text-blue-600"
              bgColor="bg-blue-100"
            />
            <FeatureCard
              icon={Heart}
              title="Mentorship"
              description="Give back by mentoring current students or find guidance from experienced professionals in your field."
              iconColor="text-green-600"
              bgColor="bg-green-100"
            />
            <FeatureCard
              icon={Calendar}
              title="Events"
              description="Stay updated on reunions, networking events, and exclusive alumni gatherings in your area."
              iconColor="text-purple-600"
              bgColor="bg-purple-100"
            />
            <FeatureCard
              icon={DollarSign}
              title="Donations"
              description="Support your alma mater through secure donation platforms and track your impact on student success."
              iconColor="text-orange-600"
              bgColor="bg-orange-100"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
            About AlumniConnect
          </h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              AlumniConnect is a comprehensive platform designed to strengthen the bonds between universities and their graduates. 
              We believe that the relationships formed during university years should continue to flourish long after graduation.
            </p>
            <p>
              Our platform facilitates meaningful connections, enables knowledge sharing, and creates opportunities for alumni 
              to contribute to their alma mater's continued success while advancing their own professional and personal growth.
            </p>
            <p>
              Join thousands of alumni who are already leveraging the power of our community to build careers, 
              mentor students, and make a lasting impact on the next generation of leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection />
    </div>
  );
};

export default Landing;
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Users, Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            About <span className="text-blue-600">AlumniConnect</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
            Empowering universities and alumni to build lasting connections that drive success, 
            innovation, and positive impact in communities worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To create a comprehensive platform that strengthens the bonds between universities and their graduates, 
                fostering meaningful connections that benefit both alumni and current students.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that the relationships formed during university years should continue to flourish long after graduation, 
                creating a network of support, mentorship, and opportunity that spans generations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">50K+</h3>
                <p className="text-slate-600">Active Alumni</p>
              </Card>
              <Card className="text-center p-6">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">200+</h3>
                <p className="text-slate-600">Universities</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 rounded-xl">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900">Connection</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-slate-600 leading-relaxed">
                  Building meaningful relationships that transcend geographical boundaries and career stages.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 rounded-xl">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900">Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-slate-600 leading-relaxed">
                  Fostering a supportive environment where alumni can give back and current students can thrive.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 rounded-xl">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900">Innovation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-slate-600 leading-relaxed">
                  Continuously evolving our platform to meet the changing needs of modern alumni networks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Story
            </h2>
          </div>
          <div className="prose prose-lg mx-auto text-slate-600">
            <p className="text-lg leading-relaxed mb-6">
              AlumniConnect was born from a simple observation: universities and their graduates often lose touch after graduation, 
              missing countless opportunities for mutual benefit. Founded in 2020 by a team of passionate educators and technologists, 
              we set out to bridge this gap.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              What started as a small project to connect alumni from a single university has grown into a comprehensive platform 
              serving hundreds of institutions worldwide. Our success stems from our deep understanding of both the challenges 
              universities face in maintaining alumni relationships and the desire graduates have to stay connected with their alma mater.
            </p>
            <p className="text-lg leading-relaxed">
              Today, AlumniConnect facilitates thousands of meaningful connections every day, from mentorship relationships 
              that launch careers to generous donations that fund scholarships. We're proud to be part of the story that 
              connects past, present, and future generations of learners.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
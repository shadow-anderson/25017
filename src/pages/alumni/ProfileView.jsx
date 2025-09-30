import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Building, 
  GraduationCap,
  Edit3,
  User,
  Briefcase
} from 'lucide-react';

const ProfileView = () => {
  const navigate = useNavigate();

  // Dummy alumni profile data
  const profileData = {
    id: 1,
    fullName: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    batch: "2018",
    department: "Computer Science",
    location: "San Francisco, CA",
    profilePhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    education: [
      {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Technology",
        year: "2014-2018",
        gpa: "3.8/4.0"
      },
      {
        id: 2,
        degree: "Master of Science in Software Engineering",
        institution: "Tech Institute",
        year: "2019-2021",
        gpa: "3.9/4.0"
      }
    ],
    workExperience: [
      {
        id: 1,
        position: "Senior Software Engineer",
        company: "TechCorp Inc.",
        duration: "2021 - Present",
        description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Managing a team of 5 developers."
      },
      {
        id: 2,
        position: "Software Developer",
        company: "StartupXYZ",
        duration: "2018 - 2021",
        description: "Developed full-stack applications and implemented CI/CD pipelines. Worked with agile methodologies and cross-functional teams."
      }
    ],
    bio: "Passionate software engineer with 7+ years of experience in building scalable web applications. Alumni mentor and tech community advocate."
  };

  const handleEditProfile = () => {
    navigate('/profile/edit');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Alumni Profile</h1>
          <p className="text-slate-600">View and manage your profile information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Summary Card */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4">
                  <img
                    src={profileData.profilePhoto}
                    alt={profileData.fullName}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  {profileData.fullName}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {profileData.department} • Class of {profileData.batch}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 text-center leading-relaxed">
                  {profileData.bio}
                </p>
                
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-700">{profileData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-700">{profileData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-700">{profileData.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Calendar className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-700">Batch {profileData.batch}</span>
                  </div>
                </div>

                <Button 
                  onClick={handleEditProfile}
                  className="w-full mt-6"
                  variant="default"
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span>Education</span>
                </CardTitle>
                <CardDescription>Academic background and qualifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {profileData.education.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-slate-800">{edu.degree}</h4>
                    <p className="text-slate-600 font-medium">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-slate-500">{edu.year}</span>
                      <span className="text-sm font-medium text-blue-600">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Work Experience Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  <span>Work Experience</span>
                </CardTitle>
                <CardDescription>Professional career and achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {profileData.workExperience.map((work) => (
                  <div key={work.id} className="border-l-4 border-green-200 pl-4">
                    <h4 className="font-semibold text-slate-800">{work.position}</h4>
                    <p className="text-slate-600 font-medium flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      {work.company}
                    </p>
                    <p className="text-sm text-slate-500 mb-2">{work.duration}</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{work.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Information Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-purple-600" />
                  <span>Contact Information</span>
                </CardTitle>
                <CardDescription>How to get in touch</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Email Address</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <Mail className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-800">{profileData.email}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Phone Number</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <Phone className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-800">{profileData.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Location</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-800">{profileData.location}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Department</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <GraduationCap className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-800">{profileData.department}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileView;
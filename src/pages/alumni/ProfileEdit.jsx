import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { 
  Save, 
  X, 
  Upload, 
  User, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Phone,
  MapPin,
  Camera
} from 'lucide-react';

const ProfileEdit = () => {
  const navigate = useNavigate();

  // Initialize form with dummy data
  const [formData, setFormData] = useState({
    fullName: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    batch: "2018",
    department: "Computer Science",
    location: "San Francisco, CA",
    bio: "Passionate software engineer with 7+ years of experience in building scalable web applications. Alumni mentor and tech community advocate.",
    profilePhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    education: {
      degree1: "Bachelor of Science in Computer Science",
      institution1: "University of Technology",
      year1: "2014-2018",
      gpa1: "3.8/4.0",
      degree2: "Master of Science in Software Engineering",
      institution2: "Tech Institute",
      year2: "2019-2021",
      gpa2: "3.9/4.0"
    },
    workExperience: {
      position1: "Senior Software Engineer",
      company1: "TechCorp Inc.",
      duration1: "2021 - Present",
      description1: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Managing a team of 5 developers.",
      position2: "Software Developer",
      company2: "StartupXYZ",
      duration2: "2018 - 2021",
      description2: "Developed full-stack applications and implemented CI/CD pipelines. Worked with agile methodologies and cross-functional teams."
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSave = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Updated Profile Data:', formData);
      alert('Profile updated successfully!');
      setIsSubmitting(false);
      navigate('/profile');
    }, 1000);
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleInputChange('profilePhoto', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Edit Profile</h1>
          <p className="text-slate-600">Update your profile information</p>
        </div>

        <div className="space-y-8">
          {/* Basic Information */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-blue-600" />
                <span>Basic Information</span>
              </CardTitle>
              <CardDescription>Your personal details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Photo */}
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img
                    src={formData.profilePhoto}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-slate-800">Profile Photo</h3>
                  <p className="text-sm text-slate-600">Click on the image to upload a new photo</p>
                  <p className="text-xs text-slate-500 mt-1">JPG, PNG or GIF (max. 5MB)</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <Input
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Batch Year</label>
                  <Input
                    value={formData.batch}
                    onChange={(e) => handleInputChange('batch', e.target.value)}
                    placeholder="e.g., 2018"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Department</label>
                  <Input
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    placeholder="Enter your department"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Location</label>
                  <Input
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Enter your location"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Bio</label>
                <Textarea
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  placeholder="Tell us about yourself..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-green-600" />
                <span>Education</span>
              </CardTitle>
              <CardDescription>Your academic background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Education 1 */}
              <div className="border-l-4 border-green-200 pl-6 space-y-4">
                <h4 className="font-medium text-slate-800">Primary Education</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Degree</label>
                    <Input
                      value={formData.education.degree1}
                      onChange={(e) => handleNestedInputChange('education', 'degree1', e.target.value)}
                      placeholder="e.g., Bachelor of Science"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Institution</label>
                    <Input
                      value={formData.education.institution1}
                      onChange={(e) => handleNestedInputChange('education', 'institution1', e.target.value)}
                      placeholder="Enter institution name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Year</label>
                    <Input
                      value={formData.education.year1}
                      onChange={(e) => handleNestedInputChange('education', 'year1', e.target.value)}
                      placeholder="e.g., 2014-2018"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">GPA</label>
                    <Input
                      value={formData.education.gpa1}
                      onChange={(e) => handleNestedInputChange('education', 'gpa1', e.target.value)}
                      placeholder="e.g., 3.8/4.0"
                    />
                  </div>
                </div>
              </div>

              {/* Education 2 */}
              <div className="border-l-4 border-green-200 pl-6 space-y-4">
                <h4 className="font-medium text-slate-800">Additional Education (Optional)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Degree</label>
                    <Input
                      value={formData.education.degree2}
                      onChange={(e) => handleNestedInputChange('education', 'degree2', e.target.value)}
                      placeholder="e.g., Master of Science"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Institution</label>
                    <Input
                      value={formData.education.institution2}
                      onChange={(e) => handleNestedInputChange('education', 'institution2', e.target.value)}
                      placeholder="Enter institution name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Year</label>
                    <Input
                      value={formData.education.year2}
                      onChange={(e) => handleNestedInputChange('education', 'year2', e.target.value)}
                      placeholder="e.g., 2019-2021"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">GPA</label>
                    <Input
                      value={formData.education.gpa2}
                      onChange={(e) => handleNestedInputChange('education', 'gpa2', e.target.value)}
                      placeholder="e.g., 3.9/4.0"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-purple-600" />
                <span>Work Experience</span>
              </CardTitle>
              <CardDescription>Your professional experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Experience 1 */}
              <div className="border-l-4 border-purple-200 pl-6 space-y-4">
                <h4 className="font-medium text-slate-800">Current/Recent Position</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Position</label>
                    <Input
                      value={formData.workExperience.position1}
                      onChange={(e) => handleNestedInputChange('workExperience', 'position1', e.target.value)}
                      placeholder="e.g., Senior Software Engineer"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Company</label>
                    <Input
                      value={formData.workExperience.company1}
                      onChange={(e) => handleNestedInputChange('workExperience', 'company1', e.target.value)}
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-slate-700">Duration</label>
                    <Input
                      value={formData.workExperience.duration1}
                      onChange={(e) => handleNestedInputChange('workExperience', 'duration1', e.target.value)}
                      placeholder="e.g., 2021 - Present"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Description</label>
                  <Textarea
                    value={formData.workExperience.description1}
                    onChange={(e) => handleNestedInputChange('workExperience', 'description1', e.target.value)}
                    placeholder="Describe your role and achievements..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Experience 2 */}
              <div className="border-l-4 border-purple-200 pl-6 space-y-4">
                <h4 className="font-medium text-slate-800">Previous Position (Optional)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Position</label>
                    <Input
                      value={formData.workExperience.position2}
                      onChange={(e) => handleNestedInputChange('workExperience', 'position2', e.target.value)}
                      placeholder="e.g., Software Developer"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Company</label>
                    <Input
                      value={formData.workExperience.company2}
                      onChange={(e) => handleNestedInputChange('workExperience', 'company2', e.target.value)}
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-slate-700">Duration</label>
                    <Input
                      value={formData.workExperience.duration2}
                      onChange={(e) => handleNestedInputChange('workExperience', 'duration2', e.target.value)}
                      placeholder="e.g., 2018 - 2021"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Description</label>
                  <Textarea
                    value={formData.workExperience.description2}
                    onChange={(e) => handleNestedInputChange('workExperience', 'description2', e.target.value)}
                    placeholder="Describe your role and achievements..."
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="outline" 
              onClick={handleCancel}
              className="w-full sm:w-auto"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              <Save className="h-4 w-4 mr-2" />
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileEdit;
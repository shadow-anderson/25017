import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { SelectTrigger } from '../../components/ui/select';
import { 
  Search, 
  Filter, 
  Mail, 
  MapPin, 
  Building, 
  GraduationCap, 
  Users,
  Grid3x3,
  List
} from 'lucide-react';

const AlumniDirectory = () => {
  // Dummy alumni data
  const alumniData = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      batch: "2018",
      department: "Computer Science",
      company: "TechCorp Inc.",
      position: "Senior Software Engineer",
      location: "San Francisco, CA",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      batch: "2019",
      department: "Business Administration",
      company: "Goldman Sachs",
      position: "Investment Analyst",
      location: "New York, NY",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612d7c6?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      batch: "2017",
      department: "Electrical Engineering",
      company: "Tesla",
      position: "Hardware Engineer",
      location: "Austin, TX",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      batch: "2020",
      department: "Marketing",
      company: "Meta",
      position: "Product Marketing Manager",
      location: "Seattle, WA",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "David Rodriguez",
      email: "david.rodriguez@email.com",
      batch: "2016",
      department: "Mechanical Engineering",
      company: "SpaceX",
      position: "Propulsion Engineer",
      location: "Los Angeles, CA",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Lisa Wang",
      email: "lisa.wang@email.com",
      batch: "2019",
      department: "Computer Science",
      company: "Google",
      position: "Software Engineer",
      location: "Mountain View, CA",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "James Wilson",
      email: "james.wilson@email.com",
      batch: "2018",
      department: "Finance",
      company: "JPMorgan Chase",
      position: "Vice President",
      location: "Chicago, IL",
      photo: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Maria Garcia",
      email: "maria.garcia@email.com",
      batch: "2021",
      department: "Biomedical Engineering",
      company: "Johnson & Johnson",
      position: "Research Scientist",
      location: "Boston, MA",
      photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "Robert Taylor",
      email: "robert.taylor@email.com",
      batch: "2017",
      department: "Business Administration",
      company: "McKinsey & Company",
      position: "Senior Consultant",
      location: "Denver, CO",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 10,
      name: "Jennifer Lee",
      email: "jennifer.lee@email.com",
      batch: "2020",
      department: "Computer Science",
      company: "Apple",
      position: "iOS Developer",
      location: "Cupertino, CA",
      photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [batchFilter, setBatchFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Get unique values for filters
  const uniqueBatches = [...new Set(alumniData.map(alumni => alumni.batch))].sort();
  const uniqueDepartments = [...new Set(alumniData.map(alumni => alumni.department))].sort();
  const uniqueLocations = [...new Set(alumniData.map(alumni => alumni.location))].sort();

  // Filter and search logic
  const filteredAlumni = useMemo(() => {
    return alumniData.filter(alumni => {
      const matchesSearch = searchQuery === '' || 
        alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumni.batch.includes(searchQuery) ||
        alumni.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumni.company.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesBatch = batchFilter === '' || alumni.batch === batchFilter;
      const matchesDepartment = departmentFilter === '' || alumni.department === departmentFilter;
      const matchesLocation = locationFilter === '' || alumni.location === locationFilter;

      return matchesSearch && matchesBatch && matchesDepartment && matchesLocation;
    });
  }, [searchQuery, batchFilter, departmentFilter, locationFilter]);

  const handleConnect = (email, name) => {
    const subject = encodeURIComponent(`Connect via AlumniConnect - ${name}`);
    const body = encodeURIComponent(`Hi ${name},\n\nI found your profile on AlumniConnect and would love to connect with you.\n\nBest regards`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setBatchFilter('');
    setDepartmentFilter('');
    setLocationFilter('');
  };

  const AlumniCard = ({ alumni }) => (
    <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4">
          <img
            src={alumni.photo}
            alt={alumni.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        <CardTitle className="text-lg font-bold text-slate-800">
          {alumni.name}
        </CardTitle>
        <CardDescription className="text-slate-600">
          {alumni.position}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-4 w-4 text-blue-600" />
            <span className="text-slate-700">{alumni.department} • Class of {alumni.batch}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Building className="h-4 w-4 text-green-600" />
            <span className="text-slate-700">{alumni.company}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-red-600" />
            <span className="text-slate-700">{alumni.location}</span>
          </div>
        </div>
        
        <Button 
          onClick={() => handleConnect(alumni.email, alumni.name)}
          className="w-full mt-4"
          variant="default"
        >
          <Mail className="h-4 w-4 mr-2" />
          Connect
        </Button>
      </CardContent>
    </Card>
  );

  const AlumniListItem = ({ alumni }) => (
    <Card className="hover:shadow-lg transition-all duration-200">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img
              src={alumni.photo}
              alt={alumni.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
            />
            <div>
              <h3 className="font-semibold text-slate-800">{alumni.name}</h3>
              <p className="text-sm text-slate-600">{alumni.position} at {alumni.company}</p>
              <div className="flex items-center space-x-4 mt-1 text-xs text-slate-500">
                <span>{alumni.department} • {alumni.batch}</span>
                <span>{alumni.location}</span>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => handleConnect(alumni.email, alumni.name)}
            variant="default"
            size="sm"
          >
            <Mail className="h-4 w-4 mr-2" />
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Alumni Directory</h1>
          <p className="text-slate-600">Connect with fellow alumni from your university</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-blue-600" />
              <span>Search & Filter Alumni</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search by name, batch, department, location, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Batch Year</label>
                <SelectTrigger>
                  <select
                    value={batchFilter}
                    onChange={(e) => setBatchFilter(e.target.value)}
                    className="w-full bg-transparent border-none outline-none"
                  >
                    <option value="">All Batches</option>
                    {uniqueBatches.map(batch => (
                      <option key={batch} value={batch}>{batch}</option>
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
                <label className="text-sm font-medium text-slate-700">Location</label>
                <SelectTrigger>
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full bg-transparent border-none outline-none"
                  >
                    <option value="">All Locations</option>
                    {uniqueLocations.map(location => (
                      <option key={location} value={location}>{location}</option>
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
              {filteredAlumni.length} Alumni Found
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-600">View:</span>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Alumni Grid/List */}
        {filteredAlumni.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Users className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-800 mb-2">No Alumni Found</h3>
              <p className="text-slate-600">Try adjusting your search criteria or clearing filters.</p>
            </CardContent>
          </Card>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }>
            {filteredAlumni.map(alumni => (
              viewMode === 'grid' 
                ? <AlumniCard key={alumni.id} alumni={alumni} />
                : <AlumniListItem key={alumni.id} alumni={alumni} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AlumniDirectory;
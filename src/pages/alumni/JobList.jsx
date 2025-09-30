import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { SelectTrigger } from '../../components/ui/select';
import { 
  Search, 
  Filter, 
  Briefcase, 
  MapPin, 
  Building, 
  Calendar,
  DollarSign,
  ArrowRight,
  Clock,
  Users,
  Grid3x3,
  List
} from 'lucide-react';

const JobList = () => {
  const navigate = useNavigate();

  // Dummy job listings data
  const jobsData = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      level: "Senior",
      salary: "$120,000 - $160,000",
      postedDate: "2025-09-28",
      description: "Join our innovative team to build cutting-edge web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of experience in software development",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong problem-solving and communication skills",
        "Bachelor's degree in Computer Science or related field"
      ],
      responsibilities: [
        "Develop and maintain scalable web applications",
        "Collaborate with cross-functional teams",
        "Mentor junior developers",
        "Participate in code reviews and architecture decisions",
        "Contribute to technical documentation and best practices"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health, dental, and vision insurance",
        "401(k) with company matching",
        "Flexible work arrangements",
        "Professional development budget"
      ],
      tags: ["React", "Node.js", "TypeScript", "AWS"],
      category: "Engineering",
      remote: false,
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      title: "Product Marketing Manager",
      company: "InnovateLabs",
      location: "New York, NY",
      type: "Full-time",
      level: "Mid-level",
      salary: "$90,000 - $120,000",
      postedDate: "2025-09-27",
      description: "Lead product marketing initiatives for our B2B SaaS platform, driving growth through strategic marketing campaigns.",
      requirements: [
        "3+ years of product marketing experience",
        "Experience with B2B SaaS products",
        "Strong analytical and data-driven mindset",
        "Excellent written and verbal communication skills",
        "MBA or relevant marketing degree preferred"
      ],
      responsibilities: [
        "Develop go-to-market strategies for new products",
        "Create compelling marketing content and materials",
        "Analyze market trends and competitive landscape",
        "Collaborate with sales and product teams",
        "Manage marketing campaigns and measure ROI"
      ],
      benefits: [
        "Competitive base salary plus bonus",
        "Stock options and equity participation",
        "Remote work flexibility",
        "Learning and development opportunities",
        "Team retreats and company events"
      ],
      tags: ["SaaS", "B2B", "Marketing", "Analytics"],
      category: "Marketing",
      remote: true,
      companyLogo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataDriven Analytics",
      location: "Austin, TX",
      type: "Full-time",
      level: "Mid-level",
      salary: "$100,000 - $130,000",
      postedDate: "2025-09-26",
      description: "Apply machine learning and statistical analysis to solve complex business problems and drive data-driven decisions.",
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "3+ years of experience in data science or analytics",
        "Proficiency in Python, R, and SQL",
        "Experience with machine learning frameworks",
        "Strong statistical and mathematical background"
      ],
      responsibilities: [
        "Build and deploy machine learning models",
        "Perform statistical analysis and A/B testing",
        "Create data visualizations and dashboards",
        "Collaborate with engineering and product teams",
        "Present findings to stakeholders and leadership"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Cutting-edge technology and tools",
        "Conference attendance and learning budget",
        "Flexible working hours",
        "Health and wellness programs"
      ],
      tags: ["Python", "Machine Learning", "SQL", "Analytics"],
      category: "Data Science",
      remote: false,
      companyLogo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      title: "UX/UI Designer",
      company: "DesignStudio Pro",
      location: "Los Angeles, CA",
      type: "Full-time",
      level: "Mid-level",
      salary: "$85,000 - $110,000",
      postedDate: "2025-09-25",
      description: "Create intuitive and beautiful user experiences for our digital products, working closely with product and engineering teams.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, and Adobe Creative Suite",
        "Strong portfolio demonstrating design thinking",
        "Experience with user research and usability testing",
        "Understanding of front-end development principles"
      ],
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and design systems",
        "Collaborate with product managers and developers",
        "Maintain and evolve design guidelines"
      ],
      benefits: [
        "Creative freedom and design ownership",
        "Latest design tools and software",
        "Professional development and conferences",
        "Collaborative and inspiring work environment",
        "Flexible PTO and work-life balance"
      ],
      tags: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
      category: "Design",
      remote: true,
      companyLogo: "https://images.unsplash.com/photo-1558655146-364adcd5b69e?w=100&h=100&fit=crop"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudOps Solutions",
      location: "Seattle, WA",
      type: "Full-time",
      level: "Senior",
      salary: "$110,000 - $140,000",
      postedDate: "2025-09-24",
      description: "Build and maintain scalable infrastructure and deployment pipelines for our cloud-native applications.",
      requirements: [
        "4+ years of DevOps or infrastructure experience",
        "Expertise in AWS/Azure and containerization (Docker, Kubernetes)",
        "Experience with Infrastructure as Code (Terraform, CloudFormation)",
        "Strong scripting skills (Python, Bash, or PowerShell)",
        "Knowledge of CI/CD pipelines and monitoring tools"
      ],
      responsibilities: [
        "Design and maintain cloud infrastructure",
        "Implement CI/CD pipelines and automation",
        "Monitor system performance and reliability",
        "Ensure security and compliance standards",
        "Collaborate with development teams on deployments"
      ],
      benefits: [
        "Competitive salary and stock options",
        "Work with cutting-edge cloud technologies",
        "Professional certification support",
        "Remote work flexibility",
        "Comprehensive benefits package"
      ],
      tags: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
      category: "DevOps",
      remote: false,
      companyLogo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop"
    },
    {
      id: 6,
      title: "Business Analyst",
      company: "FinTech Innovations",
      location: "Chicago, IL",
      type: "Full-time",
      level: "Entry-level",
      salary: "$65,000 - $85,000",
      postedDate: "2025-09-23",
      description: "Analyze business processes and requirements to drive improvements and support digital transformation initiatives.",
      requirements: [
        "Bachelor's degree in Business, Finance, or related field",
        "1-3 years of business analysis experience",
        "Strong analytical and problem-solving skills",
        "Proficiency in Excel, SQL, and data visualization tools",
        "Excellent communication and documentation skills"
      ],
      responsibilities: [
        "Gather and document business requirements",
        "Analyze business processes and identify improvements",
        "Create reports and dashboards for stakeholders",
        "Support project management and implementation",
        "Facilitate communication between business and technical teams"
      ],
      benefits: [
        "Growth opportunities in fintech industry",
        "Mentorship and training programs",
        "Competitive starting salary",
        "Health and retirement benefits",
        "Professional development support"
      ],
      tags: ["SQL", "Excel", "Business Analysis", "FinTech"],
      category: "Business",
      remote: true,
      companyLogo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=100&h=100&fit=crop"
    },
    {
      id: 7,
      title: "Machine Learning Engineer",
      company: "AI Research Labs",
      location: "Boston, MA",
      type: "Full-time",
      level: "Senior",
      salary: "$130,000 - $170,000",
      postedDate: "2025-09-22",
      description: "Develop and deploy machine learning models at scale, working on cutting-edge AI research and applications.",
      requirements: [
        "PhD or Master's in Computer Science, AI, or related field",
        "5+ years of machine learning engineering experience",
        "Expertise in PyTorch, TensorFlow, and MLOps",
        "Experience with distributed computing and cloud platforms",
        "Strong software engineering and algorithmic skills"
      ],
      responsibilities: [
        "Design and implement ML algorithms and systems",
        "Build scalable ML infrastructure and pipelines",
        "Conduct research and publish findings",
        "Collaborate with research and product teams",
        "Optimize model performance and deployment"
      ],
      benefits: [
        "Competitive compensation and equity",
        "Access to cutting-edge research resources",
        "Conference presentations and publications",
        "Collaborative research environment",
        "Flexible work arrangements"
      ],
      tags: ["PyTorch", "TensorFlow", "MLOps", "AI Research"],
      category: "AI/ML",
      remote: false,
      companyLogo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop"
    },
    {
      id: 8,
      title: "Sales Development Representative",
      company: "GrowthHackers Inc.",
      location: "Remote",
      type: "Full-time",
      level: "Entry-level",
      salary: "$50,000 - $70,000 + Commission",
      postedDate: "2025-09-21",
      description: "Generate new business opportunities and qualify leads for our rapidly growing SaaS platform.",
      requirements: [
        "Bachelor's degree or equivalent experience",
        "1-2 years of sales or customer-facing experience",
        "Strong communication and interpersonal skills",
        "Self-motivated and goal-oriented mindset",
        "Experience with CRM tools (Salesforce, HubSpot)"
      ],
      responsibilities: [
        "Prospect and qualify potential customers",
        "Conduct outbound sales activities",
        "Schedule meetings for senior sales team",
        "Maintain accurate records in CRM",
        "Collaborate with marketing on lead generation"
      ],
      benefits: [
        "Base salary plus uncapped commission",
        "Comprehensive sales training program",
        "Career advancement opportunities",
        "Remote work flexibility",
        "Health benefits and 401(k)"
      ],
      tags: ["Sales", "SaaS", "CRM", "Lead Generation"],
      category: "Sales",
      remote: true,
      companyLogo: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=100&h=100&fit=crop"
    }
  ];

  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  // Get unique values for filters
  const uniqueRoles = [...new Set(jobsData.map(job => job.category))].sort();
  const uniqueCompanies = [...new Set(jobsData.map(job => job.company))].sort();
  const uniqueLocations = [...new Set(jobsData.map(job => job.location))].sort();

  // Filter and search logic
  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const matchesSearch = searchQuery === '' || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRole = roleFilter === '' || job.category === roleFilter;
      const matchesCompany = companyFilter === '' || job.company === companyFilter;
      const matchesLocation = locationFilter === '' || job.location === locationFilter;

      return matchesSearch && matchesRole && matchesCompany && matchesLocation;
    });
  }, [searchQuery, roleFilter, companyFilter, locationFilter]);

  const handleViewDetails = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setRoleFilter('');
    setCompanyFilter('');
    setLocationFilter('');
  };

  const getTimeAgo = (dateString) => {
    const now = new Date();
    const posted = new Date(dateString);
    const diffTime = Math.abs(now - posted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    return `${diffDays} days ago`;
  };

  const JobCard = ({ job }) => (
    <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={job.companyLogo}
              alt={job.company}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <CardTitle className="text-lg font-bold text-slate-800 line-clamp-1">
                {job.title}
              </CardTitle>
              <CardDescription className="text-slate-600">
                {job.company}
              </CardDescription>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {job.type}
            </span>
            {job.remote && (
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Remote
              </span>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-slate-700 line-clamp-2">{job.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4 text-red-500" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <DollarSign className="h-4 w-4 text-green-500" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Calendar className="h-4 w-4 text-blue-500" />
            <span>Posted {getTimeAgo(job.postedDate)}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {job.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {job.tags.length > 3 && (
            <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md">
              +{job.tags.length - 3} more
            </span>
          )}
        </div>

        <Button 
          onClick={() => handleViewDetails(job.id)}
          className="w-full mt-4"
        >
          View Details
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );

  const JobListItem = ({ job }) => (
    <Card className="hover:shadow-md transition-all duration-200">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-start space-x-4">
            <img
              src={job.companyLogo}
              alt={job.company}
              className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-slate-800">{job.title}</h3>
              <p className="text-sm text-slate-600">{job.company}</p>
              <div className="flex items-center space-x-4 mt-1 text-xs text-slate-500">
                <span className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {job.location}
                </span>
                <span className="flex items-center">
                  <DollarSign className="h-3 w-3 mr-1" />
                  {job.salary}
                </span>
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {getTimeAgo(job.postedDate)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {job.type}
              </span>
              {job.remote && (
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Remote
                </span>
              )}
            </div>
            <Button 
              onClick={() => handleViewDetails(job.id)}
              size="sm"
            >
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Job Board</h1>
          <p className="text-slate-600">Discover career opportunities posted by fellow alumni</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-blue-600" />
              <span>Search & Filter Jobs</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search by job title, company, location, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Role Category</label>
                <SelectTrigger>
                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="w-full bg-transparent border-none outline-none"
                  >
                    <option value="">All Roles</option>
                    {uniqueRoles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </SelectTrigger>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Company</label>
                <SelectTrigger>
                  <select
                    value={companyFilter}
                    onChange={(e) => setCompanyFilter(e.target.value)}
                    className="w-full bg-transparent border-none outline-none"
                  >
                    <option value="">All Companies</option>
                    {uniqueCompanies.map(company => (
                      <option key={company} value={company}>{company}</option>
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
            <Briefcase className="h-5 w-5 text-slate-600" />
            <span className="text-slate-700 font-medium">
              {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Found
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

        {/* Jobs Grid/List */}
        {filteredJobs.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Briefcase className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-800 mb-2">No Jobs Found</h3>
              <p className="text-slate-600">Try adjusting your search criteria or clearing filters.</p>
            </CardContent>
          </Card>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }>
            {filteredJobs.map(job => (
              viewMode === 'grid' 
                ? <JobCard key={job.id} job={job} />
                : <JobListItem key={job.id} job={job} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default JobList;
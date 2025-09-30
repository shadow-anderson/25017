import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  ArrowLeft, 
  MapPin, 
  Building, 
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  Users,
  Share2,
  Bookmark,
  Send
} from 'lucide-react';

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [hasApplied, setHasApplied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Same dummy data as JobList (in real app, this would come from API/state management)
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
      description: "Join our innovative team to build cutting-edge web applications using React, Node.js, and cloud technologies. We're looking for a passionate senior engineer who can lead technical initiatives and mentor junior developers while contributing to our mission of democratizing technology access.",
      requirements: [
        "5+ years of experience in software development",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong problem-solving and communication skills",
        "Bachelor's degree in Computer Science or related field"
      ],
      responsibilities: [
        "Develop and maintain scalable web applications",
        "Collaborate with cross-functional teams to deliver high-quality products",
        "Mentor junior developers and participate in code reviews",
        "Participate in architecture decisions and technical planning",
        "Contribute to technical documentation and best practices"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health, dental, and vision insurance",
        "401(k) with company matching",
        "Flexible work arrangements and unlimited PTO",
        "Professional development budget of $3,000 annually"
      ],
      tags: ["React", "Node.js", "TypeScript", "AWS"],
      category: "Engineering",
      remote: false,
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      companySize: "500-1000 employees",
      companyIndustry: "Technology",
      experienceLevel: "Senior Level (5+ years)",
      applicationDeadline: "2025-10-31",
      contactEmail: "careers@techcorp.com"
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
      description: "Lead product marketing initiatives for our B2B SaaS platform, driving growth through strategic marketing campaigns and go-to-market strategies. You'll work closely with product, sales, and engineering teams to position our products effectively in the market.",
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
        "Competitive base salary plus performance bonus",
        "Stock options and equity participation",
        "Remote work flexibility with quarterly team meetups",
        "Learning and development opportunities",
        "Team retreats and company events"
      ],
      tags: ["SaaS", "B2B", "Marketing", "Analytics"],
      category: "Marketing",
      remote: true,
      companyLogo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop",
      companySize: "50-200 employees",
      companyIndustry: "Software",
      experienceLevel: "Mid Level (3-5 years)",
      applicationDeadline: "2025-10-30",
      contactEmail: "hr@innovatelabs.com"
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
      description: "Apply machine learning and statistical analysis to solve complex business problems and drive data-driven decisions. You'll work with large datasets, build predictive models, and collaborate with stakeholders to translate insights into actionable business strategies.",
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "3+ years of experience in data science or analytics",
        "Proficiency in Python, R, and SQL",
        "Experience with machine learning frameworks (scikit-learn, TensorFlow, PyTorch)",
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
        "Access to cutting-edge technology and tools",
        "Conference attendance and learning budget",
        "Flexible working hours and hybrid options",
        "Health and wellness programs"
      ],
      tags: ["Python", "Machine Learning", "SQL", "Analytics"],
      category: "Data Science",
      remote: false,
      companyLogo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop",
      companySize: "200-500 employees",
      companyIndustry: "Analytics",
      experienceLevel: "Mid Level (3-5 years)",
      applicationDeadline: "2025-11-15",
      contactEmail: "jobs@datadriven.com"
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
      description: "Create intuitive and beautiful user experiences for our digital products, working closely with product and engineering teams. You'll be responsible for the entire design process from user research to final implementation.",
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
        "Professional development and conference attendance",
        "Collaborative and inspiring work environment",
        "Flexible PTO and work-life balance"
      ],
      tags: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
      category: "Design",
      remote: true,
      companyLogo: "https://images.unsplash.com/photo-1558655146-364adcd5b69e?w=100&h=100&fit=crop",
      companySize: "20-50 employees",
      companyIndustry: "Design",
      experienceLevel: "Mid Level (3-5 years)",
      applicationDeadline: "2025-11-10",
      contactEmail: "talent@designstudiopro.com"
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
      description: "Build and maintain scalable infrastructure and deployment pipelines for our cloud-native applications. You'll work with cutting-edge technologies to ensure our systems are reliable, secure, and performant.",
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
      companyLogo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
      companySize: "100-500 employees",
      companyIndustry: "Cloud Services",
      experienceLevel: "Senior Level (4+ years)",
      applicationDeadline: "2025-11-20",
      contactEmail: "careers@cloudops.com"
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
      description: "Analyze business processes and requirements to drive improvements and support digital transformation initiatives in the fast-paced fintech industry.",
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
        "Competitive starting salary with growth potential",
        "Health and retirement benefits",
        "Professional development support"
      ],
      tags: ["SQL", "Excel", "Business Analysis", "FinTech"],
      category: "Business",
      remote: true,
      companyLogo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=100&h=100&fit=crop",
      companySize: "500+ employees",
      companyIndustry: "Financial Technology",
      experienceLevel: "Entry Level (1-3 years)",
      applicationDeadline: "2025-11-05",
      contactEmail: "jobs@fintechinnovations.com"
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
      description: "Develop and deploy machine learning models at scale, working on cutting-edge AI research and applications that push the boundaries of what's possible with artificial intelligence.",
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
        "Highly competitive compensation and equity",
        "Access to cutting-edge research resources",
        "Conference presentations and publication opportunities",
        "Collaborative research environment",
        "Flexible work arrangements"
      ],
      tags: ["PyTorch", "TensorFlow", "MLOps", "AI Research"],
      category: "AI/ML",
      remote: false,
      companyLogo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop",
      companySize: "50-200 employees",
      companyIndustry: "AI Research",
      experienceLevel: "Senior Level (5+ years)",
      applicationDeadline: "2025-12-01",
      contactEmail: "careers@airesearchlabs.com"
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
      description: "Generate new business opportunities and qualify leads for our rapidly growing SaaS platform. This is an excellent opportunity to start your career in tech sales with unlimited earning potential.",
      requirements: [
        "Bachelor's degree or equivalent experience",
        "1-2 years of sales or customer-facing experience",
        "Strong communication and interpersonal skills",
        "Self-motivated and goal-oriented mindset",
        "Experience with CRM tools (Salesforce, HubSpot)"
      ],
      responsibilities: [
        "Prospect and qualify potential customers",
        "Conduct outbound sales activities (calls, emails, social)",
        "Schedule meetings for senior sales team",
        "Maintain accurate records in CRM",
        "Collaborate with marketing on lead generation"
      ],
      benefits: [
        "Base salary plus uncapped commission",
        "Comprehensive sales training program",
        "Clear career advancement opportunities",
        "100% remote work flexibility",
        "Health benefits and 401(k) matching"
      ],
      tags: ["Sales", "SaaS", "CRM", "Lead Generation"],
      category: "Sales",
      remote: true,
      companyLogo: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=100&h=100&fit=crop",
      companySize: "100-500 employees",
      companyIndustry: "SaaS",
      experienceLevel: "Entry Level (1-2 years)",
      applicationDeadline: "2025-10-25",
      contactEmail: "recruiting@growthhackers.com"
    }
  ];

  const job = jobsData.find(j => j.id === parseInt(jobId));

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="text-center py-12">
            <CardContent>
              <h3 className="text-lg font-medium text-slate-800 mb-2">Job Not Found</h3>
              <p className="text-slate-600 mb-4">The job you're looking for doesn't exist.</p>
              <Button onClick={() => navigate('/jobs')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Jobs
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  const handleApply = () => {
    if (!hasApplied) {
      setHasApplied(true);
      console.log(`Applied to Job ID: ${job.id} - ${job.title} at ${job.company}`);
    }
  };

  const handleBack = () => {
    navigate('/jobs');
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    console.log(`${isBookmarked ? 'Removed bookmark for' : 'Bookmarked'}: ${job.title}`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at ${job.company}`,
        text: job.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Job link copied to clipboard!');
    }
  };

  const getTimeAgo = (dateString) => {
    const now = new Date();
    const posted = new Date(dateString);
    const diffTime = Math.abs(now - posted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    return `${diffDays} days ago`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
            <span>Back to Jobs</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={job.companyLogo}
                      alt={job.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-800 mb-1">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-slate-600">
                        {job.company}
                      </CardDescription>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {job.type}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                          {job.level}
                        </span>
                        {job.remote && (
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                            Remote
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-red-500" />
                      <div>
                        <p className="font-medium text-slate-800">{job.location}</p>
                        <p className="text-sm text-slate-600">Location</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium text-slate-800">{job.salary}</p>
                        <p className="text-sm text-slate-600">Salary Range</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-slate-800">Posted {getTimeAgo(job.postedDate)}</p>
                        <p className="text-sm text-slate-600">Posted Date</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="font-medium text-slate-800">{job.companySize}</p>
                        <p className="text-sm text-slate-600">Company Size</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">{job.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-slate-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Apply for this Position</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {hasApplied ? (
                  <div className="text-center py-4">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                    <h3 className="font-medium text-slate-800 mb-1">Application Submitted!</h3>
                    <p className="text-sm text-slate-600">
                      Thank you for applying. We'll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="text-center">
                      <p className="text-sm text-slate-600 mb-4">
                        Ready to take the next step in your career?
                      </p>
                    </div>
                    <Button 
                      onClick={handleApply}
                      className="w-full"
                      size="lg"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Apply Now
                    </Button>
                    <p className="text-xs text-center text-slate-500">
                      Application deadline: {formatDate(job.applicationDeadline)}
                    </p>
                  </>
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
                  onClick={handleBookmark}
                  variant="outline" 
                  className="w-full"
                >
                  <Bookmark className={`h-4 w-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                  {isBookmarked ? 'Bookmarked' : 'Bookmark Job'}
                </Button>
                <Button 
                  onClick={handleShare}
                  variant="outline" 
                  className="w-full"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Job
                </Button>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>About {job.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Industry:</span>
                    <span className="font-medium text-slate-800">{job.companyIndustry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Company Size:</span>
                    <span className="font-medium text-slate-800">{job.companySize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Experience Level:</span>
                    <span className="font-medium text-slate-800">{job.experienceLevel}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Have Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-3">
                  Contact the hiring team for more information about this position.
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-slate-700">
                    <strong>Email:</strong> {job.contactEmail}
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

export default JobDetails;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { CollaborationHub } from "../components/CollaborationHub";
import { FunZone } from "../components/FunZone";
import { ThemeLanguageSwitcher } from "../components/ThemeLanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  Search, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Briefcase, 
  Building2,
  ArrowRight,
  Heart,
  Share2,
  Calendar,
  TrendingUp,
  Award,
  Target,
  DollarSign,
  BookOpen,
  MessageCircle,
  Eye,
  Bell,
  Settings,
  User,
  BarChart3,
  Bookmark,
  Send,
  FileText,
  CheckCircle,
  Gamepad2,
  Cog
} from "lucide-react";

export function GraduateDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState(new Set());
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("jobs");
  const { t } = useLanguage();

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const categories = [
    { id: "all", name: "All Jobs", count: 89 },
    { id: "technology", name: "Technology", count: 25 },
    { id: "engineering", name: "Engineering", count: 18 },
    { id: "healthcare", name: "Healthcare", count: 15 },
    { id: "business", name: "Business", count: 12 },
    { id: "agriculture", name: "Agriculture", count: 8 },
    { id: "construction", name: "Construction", count: 11 }
  ];

  const jobOpportunities = [
    {
      id: 1,
      title: "Software Developer",
      company: "Tech Solutions Rwanda",
      location: "Kigali",
      type: "Full-time",
      experience: "1-3 years",
      salary: "RWF 600,000 - 900,000",
      category: "technology",
      description: "We're looking for a passionate software developer to join our growing team",
      requirements: ["JavaScript", "React", "Node.js", "2+ years experience"],
      postedDate: "2 days ago",
      applications: 12,
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      benefits: ["Health Insurance", "Flexible Hours", "Remote Work", "Learning Budget"],
      featured: true
    },
    {
      id: 2,
      title: "Automotive Technician",
      company: "Rwanda Motors Ltd",
      location: "Kigali",
      type: "Full-time",
      experience: "2-5 years",
      salary: "RWF 450,000 - 650,000",
      category: "engineering",
      description: "Join our team of skilled technicians working on modern vehicles",
      requirements: ["AutoCAD", "Engine Repair", "Diagnostics", "3+ years experience"],
      postedDate: "1 day ago",
      applications: 8,
      companyLogo: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=100&h=100&fit=crop",
      benefits: ["Overtime Pay", "Tool Allowance", "Career Growth", "Training"],
      featured: false
    },
    {
      id: 3,
      title: "Nursing Assistant",
      company: "Kigali Health Center",
      location: "Kigali",
      type: "Full-time",
      experience: "1-2 years",
      salary: "RWF 400,000 - 550,000",
      category: "healthcare",
      description: "Provide compassionate care to patients in our modern healthcare facility",
      requirements: ["Nursing Certificate", "Patient Care", "First Aid", "Communication"],
      postedDate: "3 days ago",
      applications: 15,
      companyLogo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop",
      benefits: ["Health Insurance", "Shift Allowance", "Professional Development", "Pension"],
      featured: true
    },
    {
      id: 4,
      title: "Agricultural Specialist",
      company: "Green Fields Rwanda",
      location: "Huye",
      type: "Full-time",
      experience: "2-4 years",
      salary: "RWF 350,000 - 500,000",
      category: "agriculture",
      description: "Help farmers implement modern agricultural techniques and technologies",
      requirements: ["Agricultural Degree", "Crop Management", "Soil Analysis", "Field Experience"],
      postedDate: "4 days ago",
      applications: 6,
      companyLogo: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=100&h=100&fit=crop",
      benefits: ["Transport Allowance", "Field Equipment", "Training", "Performance Bonus"],
      featured: false
    }
  ];

  const filteredJobs = jobOpportunities.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    
    // If user has skills, prioritize jobs that match their skills
    if (userData && userData.skills && userData.skills.length > 0) {
      const matchesSkills = userData.skills.some(skill => 
        job.title.toLowerCase().includes(skill.toLowerCase()) ||
        job.requirements.some(req => req.toLowerCase().includes(skill.toLowerCase()))
      );
      return matchesSearch && matchesCategory && matchesSkills;
    }
    
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (jobId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(jobId)) {
        newFavorites.delete(jobId);
      } else {
        newFavorites.add(jobId);
      }
      return newFavorites;
    });
  };

  const tabs = [
    { id: "jobs", name: t('jobOpportunities'), icon: Briefcase },
    { id: "collaboration", name: t('collaborationHub'), icon: MessageCircle },
    { id: "matching", name: "Smart Matching", icon: Target },
    { id: "skills", name: "Skills Tracking", icon: TrendingUp },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "resources", name: "Resource Library", icon: Lightbulb },
    { id: "fun", name: "Fun Zone", icon: Gamepad2 },
    { id: "applications", name: "My Applications", icon: FileText },
    { id: "saved", name: "Saved Jobs", icon: Bookmark }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rust-50 via-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-rust-100/90 to-amber-100/90 backdrop-blur-md shadow-lg border-b border-rust-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-rust-500 to-rust-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-rust-800 to-amber-800 bg-clip-text text-transparent drop-shadow-sm">ProLink</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative text-rust-700 hover:bg-rust-200/50">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-rust-700 hover:bg-rust-200/50">
                <Cog className="h-4 w-4" />
              </Button>
              <ThemeLanguageSwitcher />
              <div className="flex items-center space-x-3 bg-gradient-to-r from-rust-50 to-orange-50 px-4 py-2 rounded-full border border-rust-200">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rust-200 to-amber-200 flex items-center justify-center border-2 border-rust-300 shadow-md text-2xl">
                    {userData?.emoji || "🎓"}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-rust-800">
                    {userData ? `${userData.firstName} ${userData.lastName}` : 'Graduate'}
                  </span>
                  <span className="text-xs text-rust-600 font-medium">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userData ? `${userData.firstName} ${userData.lastName}` : 'Graduate'}!
          </h1>
          <p className="text-gray-600">
            {userData && userData.skills && userData.skills.length > 0 
              ? `Based on your skills in ${userData.skills.join(', ')}, here are some job opportunities that match your profile`
              : 'Discover exciting career opportunities that match your skills and interests'
            }
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Briefcase className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">89</p>
                  <p className="text-sm text-gray-600">Available Jobs</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">45</p>
                  <p className="text-sm text-gray-600">Partner Companies</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-sm text-gray-600">Active Graduates</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">78%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "jobs" && (
          <>
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search jobs by title, company, or skills..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="whitespace-nowrap"
                    >
                      {category.name} ({category.count})
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={job.companyLogo}
                          alt={job.company}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-sm text-gray-600">{job.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {job.featured && (
                          <Badge className="bg-yellow-500 text-white text-xs">Featured</Badge>
                        )}
                        <button
                          onClick={() => toggleFavorite(job.id)}
                          className="p-2 hover:bg-gray-100 rounded-full"
                        >
                          <Heart 
                            className={`h-4 w-4 ${
                              favorites.has(job.id) ? 'text-red-500 fill-current' : 'text-gray-400'
                            }`} 
                          />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {job.type} • {job.experience}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <DollarSign className="h-4 w-4 mr-2" />
                        {job.salary}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        Posted {job.postedDate}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-700 mb-2">{job.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {job.requirements.slice(0, 3).map((req) => (
                          <Badge key={req} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                        {job.requirements.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{job.requirements.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900 mb-1">Benefits:</p>
                        <p className="text-gray-600">{job.benefits.join(" • ")}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 group">
                        <Send className="h-4 w-4 mr-2" />
                        Apply Now
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Jobs
              </Button>
            </div>
          </>
        )}

        {activeTab === "collaboration" && (
          <div className="h-96">
            <CollaborationHub userData={userData} />
          </div>
        )}

        {activeTab === "fun" && (
          <FunZone />
        )}

        {activeTab === "applications" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No applications yet</p>
                  <p className="text-sm text-gray-400">Start applying to jobs to track your applications here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "matching" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Smart Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">AI-powered job matching coming soon</p>
                  <p className="text-sm text-gray-400">Get personalized job recommendations based on your skills and preferences</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Skills Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Track your skill development progress</p>
                  <p className="text-sm text-gray-400">Monitor your learning journey and see industry demand for your skills</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Career analytics coming soon</p>
                  <p className="text-sm text-gray-400">View insights about job market trends and your career opportunities</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "resources" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resource Library</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Lightbulb className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Professional resources coming soon</p>
                  <p className="text-sm text-gray-400">Access learning materials, industry reports, and career development resources</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "saved" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Saved Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No saved jobs yet</p>
                  <p className="text-sm text-gray-400">Save jobs you're interested in to view them here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
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
  BookOpen, 
  Building2,
  ArrowRight,
  Heart,
  Share2,
  Calendar,
  TrendingUp,
  Award,
  Target,
  GraduationCap,
  CheckCircle,
  MessageCircle,
  Bell,
  Settings,
  User,
  BarChart3,
  Lightbulb,
  Bookmark,
  Gamepad2,
  Cog,
  Briefcase
} from "lucide-react";

export function StudentDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState(new Set());
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("programs");
  const { t } = useLanguage();

  useEffect(() => {
    // Load user data from localStorage
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
  }, []);

  const programs = [
    {
      id: 1,
      title: "Automotive Technology",
      institution: "IPRC Kicukiro",
      description: "Learn modern automotive repair and maintenance techniques",
      category: "Engineering",
      duration: "2 years",
      fee: "RWF 150,000/year",
      startDate: "September 2024",
      requirements: "O-Level certificate, interest in mechanics",
      featured: true
    },
    {
      id: 2,
      title: "Construction Technology",
      institution: "IPRC Tumba",
      description: "Master construction techniques and project management",
      category: "Construction",
      duration: "2 years",
      fee: "RWF 120,000/year",
      startDate: "September 2024",
      requirements: "O-Level certificate, physical fitness",
      featured: false
    },
    {
      id: 3,
      title: "Hospitality Management",
      institution: "IPRC Musanze",
      description: "Develop skills in hotel and restaurant management",
      category: "Hospitality",
      duration: "1 year",
      fee: "RWF 100,000/year",
      startDate: "January 2025",
      requirements: "O-Level certificate, customer service skills",
      featured: true
    },
    {
      id: 4,
      title: "Information Technology",
      institution: "IPRC Kigali",
      description: "Learn programming, networking, and system administration",
      category: "Technology",
      duration: "2 years",
      fee: "RWF 180,000/year",
      startDate: "September 2024",
      requirements: "O-Level certificate, basic computer skills",
      featured: false
    }
  ];

  const categories = [
    { id: "all", name: "All Programs" },
    { id: "Engineering", name: "Engineering" },
    { id: "Construction", name: "Construction" },
    { id: "Hospitality", name: "Hospitality" },
    { id: "Technology", name: "Technology" }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (programId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(programId)) {
        newFavorites.delete(programId);
      } else {
        newFavorites.add(programId);
      }
      return newFavorites;
    });
  };

  const tabs = [
    { id: "programs", name: t('explorePrograms'), icon: BookOpen },
    { id: "collaboration", name: t('collaborationHub'), icon: MessageCircle },
    { id: "matching", name: "Smart Matching", icon: Target },
    { id: "skills", name: "Skills Tracking", icon: TrendingUp },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "resources", name: "Resource Library", icon: Lightbulb },
    { id: "jobs", name: "Job Board", icon: Briefcase },
    { id: "fun", name: "Fun Zone", icon: Gamepad2 },
    { id: "saved", name: t('saved'), icon: Bookmark }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-lg font-bold text-gray-900">ProLink</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                {userData?.firstName?.charAt(0) || 'S'}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                  {userData ? `${userData.firstName} ${userData.lastName}` : 'Student'}
                </span>
                <span className="text-xs text-gray-500">Student Dashboard</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <ThemeLanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome back, {userData ? `${userData.firstName} ${userData.lastName}` : 'Student'}!
                </h1>
                <p className="text-gray-600">
                  {userData && userData.interests && userData.interests.length > 0 
                    ? `Based on your interests in ${userData.interests.join(', ')}, here are some TVET programs that might interest you`
                    : 'Discover the perfect technical and vocational program for your future career'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">24</p>
                    <p className="text-sm text-gray-600">Available Programs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15</p>
                    <p className="text-sm text-gray-600">Partner Institutions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2,500+</p>
                    <p className="text-sm text-gray-600">Active Students</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">85%</p>
                    <p className="text-sm text-gray-600">Job Placement Rate</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-2">
            <nav className="flex space-x-2 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-3 px-4 rounded-lg font-medium text-sm transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
        {activeTab === "programs" && (
          <>
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        type="text"
                        placeholder="Search programs or institutions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program) => (
                <Card key={program.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={program.featured ? "default" : "secondary"}>
                            {program.category}
                          </Badge>
                          {program.featured && (
                            <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                              ⭐ Featured
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 flex items-center">
                          <Building2 className="h-4 w-4 mr-1" />
                          {program.institution}
                        </p>
                        <p className="text-gray-700 text-sm mb-4">{program.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(program.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Heart className={`h-4 w-4 ${favorites.has(program.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Starts {program.startDate}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{program.fee}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1">
                        <span>View Details</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {activeTab === "collaboration" && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <CollaborationHub />
          </div>
        )}

        {activeTab === "fun" && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <FunZone />
          </div>
        )}

        {activeTab === "matching" && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center py-12">
              <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Matching Coming Soon</h3>
              <p className="text-gray-600">AI-powered program recommendations based on your interests and skills</p>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center py-12">
              <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skills Tracking Coming Soon</h3>
              <p className="text-gray-600">Track your skill development and see industry demand</p>
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center py-12">
              <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Coming Soon</h3>
              <p className="text-gray-600">View insights about your learning progress and career opportunities</p>
            </div>
          </div>
        )}

        {activeTab === "resources" && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center py-12">
              <Lightbulb className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resource Library Coming Soon</h3>
              <p className="text-gray-600">Access learning materials, industry reports, and best practices</p>
            </div>
          </div>
        )}

        {activeTab === "jobs" && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center py-12">
              <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Board Coming Soon</h3>
              <p className="text-gray-600">Browse internship and job opportunities for students</p>
            </div>
          </div>
        )}

        {activeTab === "saved" && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center py-12">
              <Bookmark className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Saved Programs</h3>
              <p className="text-gray-600">Programs you save will appear here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
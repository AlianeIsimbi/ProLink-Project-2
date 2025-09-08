import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { CollaborationHub } from "../components/CollaborationHub";
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
  Bookmark
} from "lucide-react";

export function StudentDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState(new Set());
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("programs");

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const categories = [
    { id: "all", name: "All Programs", count: 24 },
    { id: "technology", name: "Technology & IT", count: 8 },
    { id: "engineering", name: "Engineering", count: 6 },
    { id: "healthcare", name: "Healthcare", count: 4 },
    { id: "business", name: "Business", count: 3 },
    { id: "agriculture", name: "Agriculture", count: 3 }
  ];

  const tvetPrograms = [
    {
      id: 1,
      title: "Computer Programming & Software Development",
      institution: "Kigali Institute of Science and Technology",
      location: "Kigali",
      duration: "2 years",
      students: 45,
      rating: 4.8,
      category: "technology",
      description: "Learn modern programming languages and software development practices",
      requirements: "O-Level with Mathematics and English",
      startDate: "September 2024",
      fee: "RWF 150,000/year",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85b504dc?w=400&h=200&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Automotive Engineering Technology",
      institution: "Rwanda TVET Board - Nyagatare Campus",
      location: "Nyagatare",
      duration: "3 years",
      students: 32,
      rating: 4.6,
      category: "engineering",
      description: "Comprehensive automotive repair and maintenance training",
      requirements: "O-Level with Physics and Mathematics",
      startDate: "September 2024",
      fee: "RWF 120,000/year",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=200&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Nursing Assistant",
      institution: "Kigali Health Institute",
      location: "Kigali",
      duration: "2 years",
      students: 28,
      rating: 4.9,
      category: "healthcare",
      description: "Professional nursing care and patient assistance training",
      requirements: "O-Level with Biology and Chemistry",
      startDate: "September 2024",
      fee: "RWF 100,000/year",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "Agricultural Technology",
      institution: "Rwanda Agriculture Development Authority",
      location: "Huye",
      duration: "2 years",
      students: 38,
      rating: 4.7,
      category: "agriculture",
      description: "Modern farming techniques and agricultural technology",
      requirements: "O-Level with Biology and Mathematics",
      startDate: "September 2024",
      fee: "RWF 80,000/year",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=200&fit=crop",
      featured: false
    }
  ];

  const filteredPrograms = tvetPrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || program.category === selectedCategory;
    
    // If user has interests, prioritize programs that match their interests
    if (userData && userData.interests && userData.interests.length > 0) {
      const matchesInterest = userData.interests.some(interest => 
        program.title.toLowerCase().includes(interest.toLowerCase()) ||
        program.description.toLowerCase().includes(interest.toLowerCase())
      );
      return matchesSearch && matchesCategory && matchesInterest;
    }
    
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
    { id: "programs", name: "TVET Programs", icon: BookOpen },
    { id: "collaboration", name: "Collaboration Hub", icon: MessageCircle },
    { id: "progress", name: "My Progress", icon: BarChart3 },
    { id: "saved", name: "Saved", icon: Bookmark }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-rust-500 to-rust-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">ProLink</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {userData ? `${userData.firstName} ${userData.lastName}` : 'Student'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userData ? `${userData.firstName} ${userData.lastName}` : 'Student'}!
          </h1>
          <p className="text-gray-600">
            {userData && userData.interests && userData.interests.length > 0 
              ? `Based on your interests in ${userData.interests.join(', ')}, here are some TVET programs that might interest you`
              : 'Discover the perfect technical and vocational program for your future career'
            }
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                  <p className="text-sm text-gray-600">Available Programs</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">15</p>
                  <p className="text-sm text-gray-600">Partner Institutions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">2,500+</p>
                  <p className="text-sm text-gray-600">Active Students</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">85%</p>
                  <p className="text-sm text-gray-600">Job Placement Rate</p>
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
        {activeTab === "programs" && (
          <>
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search programs or institutions..."
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

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program) => (
                <Card key={program.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <button
                      onClick={() => toggleFavorite(program.id)}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                    >
                      <Heart 
                        className={`h-4 w-4 ${
                          favorites.has(program.id) ? 'text-red-500 fill-current' : 'text-gray-400'
                        }`} 
                      />
                    </button>
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge className="bg-primary text-white">
                        {program.category}
                      </Badge>
                      {program.featured && (
                        <Badge className="bg-yellow-500 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{program.institution}</p>
                      <p className="text-sm text-gray-500">{program.description}</p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {program.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {program.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {program.students} students
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 mr-2 text-yellow-400" />
                        {program.rating}/5.0
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900 mb-1">Requirements:</p>
                        <p className="text-gray-600">{program.requirements}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Fee:</p>
                        <p className="font-semibold text-primary">{program.fee}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Starts:</p>
                        <p className="font-semibold text-gray-900">{program.startDate}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 group">
                        <span>View Details</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                Load More Programs
              </Button>
            </div>
          </>
        )}

        {activeTab === "collaboration" && (
          <div className="h-96">
            <CollaborationHub userData={userData} />
          </div>
        )}

        {activeTab === "progress" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Learning Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No progress data available yet</p>
                  <p className="text-sm text-gray-400">Start exploring programs to track your progress</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "saved" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Saved Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No saved programs yet</p>
                  <p className="text-sm text-gray-400">Save programs you're interested in to view them here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
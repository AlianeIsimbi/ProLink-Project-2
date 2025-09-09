import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { CollaborationHub } from "../components/CollaborationHub";
import { FunZone } from "../components/FunZone";
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  BookOpen, 
  Building2,
  ArrowRight,
  Heart,
  Share2,
  Plus,
  Eye,
  MessageCircle,
  Award,
  Target,
  TrendingUp,
  Briefcase,
  GraduationCap,
  BarChart3,
  Lightbulb,
  Bookmark,
  Gamepad2,
  Clock
} from "lucide-react";

export function CompanyDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState(new Set());
  const [activeTab, setActiveTab] = useState("graduates");

  const categories = [
    { id: "all", name: "All Graduates", count: 156 },
    { id: "technology", name: "Technology", count: 45 },
    { id: "engineering", name: "Engineering", count: 38 },
    { id: "healthcare", name: "Healthcare", count: 28 },
    { id: "business", name: "Business", count: 25 },
    { id: "agriculture", name: "Agriculture", count: 20 }
  ];

  const graduates = [
    {
      id: 1,
      name: "Jean Paul Nkurunziza",
      title: "Computer Programming Graduate",
      institution: "Kigali Institute of Science and Technology",
      location: "Kigali",
      experience: "2 years",
      skills: ["JavaScript", "React", "Node.js", "Python"],
      rating: 4.8,
      availability: "immediate",
      expectedSalary: "RWF 500,000 - 700,000",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      description: "Passionate software developer with strong problem-solving skills and experience in web development",
      lastActive: "2 days ago"
    },
    {
      id: 2,
      name: "Marie Claire Uwimana",
      title: "Automotive Engineering Graduate",
      institution: "Rwanda TVET Board - Nyagatare Campus",
      location: "Nyagatare",
      experience: "1 year",
      skills: ["AutoCAD", "Engine Repair", "Diagnostics", "Maintenance"],
      rating: 4.6,
      availability: "1 month",
      expectedSalary: "RWF 400,000 - 600,000",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      description: "Skilled automotive technician with hands-on experience in vehicle repair and maintenance",
      lastActive: "1 day ago"
    },
    {
      id: 3,
      name: "Patrick Nsengimana",
      title: "Nursing Assistant Graduate",
      institution: "Kigali Health Institute",
      location: "Kigali",
      experience: "3 years",
      skills: ["Patient Care", "First Aid", "Medical Records", "Communication"],
      rating: 4.9,
      availability: "immediate",
      expectedSalary: "RWF 350,000 - 500,000",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      description: "Compassionate healthcare professional with excellent patient care skills and medical knowledge",
      lastActive: "3 hours ago"
    },
    {
      id: 4,
      name: "Grace Mukamana",
      title: "Agricultural Technology Graduate",
      institution: "Rwanda Agriculture Development Authority",
      location: "Huye",
      experience: "2 years",
      skills: ["Crop Management", "Soil Analysis", "Irrigation", "Farm Planning"],
      rating: 4.7,
      availability: "2 weeks",
      expectedSalary: "RWF 300,000 - 450,000",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      description: "Agricultural specialist with expertise in modern farming techniques and sustainable agriculture",
      lastActive: "5 hours ago"
    }
  ];

  const filteredGraduates = graduates.filter(graduate => {
    const matchesSearch = graduate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         graduate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         graduate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || graduate.title.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (graduateId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(graduateId)) {
        newFavorites.delete(graduateId);
      } else {
        newFavorites.add(graduateId);
      }
      return newFavorites;
    });
  };

  const tabs = [
    { id: "graduates", name: "Find Graduates", icon: GraduationCap },
    { id: "collaboration", name: "Collaboration Hub", icon: MessageCircle },
    { id: "matching", name: "Smart Matching", icon: Target },
    { id: "skills", name: "Skills Tracking", icon: TrendingUp },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "resources", name: "Resource Library", icon: Lightbulb },
    { id: "jobs", name: "Job Board", icon: Briefcase },
    { id: "fun", name: "Fun Zone", icon: Gamepad2 },
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
              <Badge variant="secondary" className="bg-rust-100 text-rust-700">
                Company Dashboard
              </Badge>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Post Job
              </Button>
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Skilled Graduates</h1>
          <p className="text-gray-600">Discover talented TVET graduates ready to join your team</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-sm text-gray-600">Available Graduates</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">25</p>
                  <p className="text-sm text-gray-600">Partner Companies</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Briefcase className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">89</p>
                  <p className="text-sm text-gray-600">Successful Placements</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">92%</p>
                  <p className="text-sm text-gray-600">Satisfaction Rate</p>
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
        {activeTab === "graduates" && (
          <>
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search graduates by name, skills, or specialization..."
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

            {/* Graduates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGraduates.map((graduate) => (
                <Card key={graduate.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={graduate.profileImage}
                          alt={graduate.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {graduate.name}
                          </h3>
                          <p className="text-sm text-gray-600">{graduate.title}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleFavorite(graduate.id)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            favorites.has(graduate.id) ? 'text-red-500 fill-current' : 'text-gray-400'
                          }`} 
                        />
                      </button>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Building2 className="h-4 w-4 mr-2" />
                        {graduate.institution}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {graduate.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {graduate.experience} experience
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 mr-2 text-yellow-400" />
                        {graduate.rating}/5.0
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        Available: {graduate.availability}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-700 mb-2">{graduate.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {graduate.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900 mb-1">Expected Salary:</p>
                        <p className="text-primary font-semibold">{graduate.expectedSalary}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 group">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact
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
                Load More Graduates
              </Button>
            </div>
          </>
        )}

        {activeTab === "collaboration" && (
          <div className="h-96">
            <CollaborationHub />
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
                  <p className="text-gray-500">AI-powered candidate matching coming soon</p>
                  <p className="text-sm text-gray-400">Get personalized graduate recommendations based on your job requirements</p>
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
                  <p className="text-gray-500">Track industry skills trends</p>
                  <p className="text-sm text-gray-400">Monitor skill development trends and industry demand</p>
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
                  <p className="text-gray-500">Company analytics coming soon</p>
                  <p className="text-sm text-gray-400">View insights about hiring trends and candidate performance</p>
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
                  <p className="text-gray-500">Company resources coming soon</p>
                  <p className="text-sm text-gray-400">Access hiring guides, industry reports, and best practices</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "jobs" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Board</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Job posting management coming soon</p>
                  <p className="text-sm text-gray-400">Manage your job postings and applications</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "fun" && (
          <FunZone />
        )}

        {activeTab === "saved" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Saved Graduates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No saved graduates yet</p>
                  <p className="text-sm text-gray-400">Save graduates you're interested in to view them here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

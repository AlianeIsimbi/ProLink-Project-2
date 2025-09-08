import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Users, 
  BookOpen, 
  Building2,
  TrendingUp,
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  Target,
  Award,
  BarChart3,
  Settings
} from "lucide-react";

export function InstitutionDashboard() {
  const [activeTab, setActiveTab] = useState("programs");

  const programs = [
    {
      id: 1,
      title: "Computer Programming & Software Development",
      category: "Technology",
      duration: "2 years",
      students: 45,
      maxStudents: 50,
      fee: "RWF 150,000/year",
      status: "active",
      applications: 23,
      startDate: "September 2024",
      description: "Learn modern programming languages and software development practices"
    },
    {
      id: 2,
      title: "Automotive Engineering Technology",
      category: "Engineering",
      duration: "3 years",
      students: 32,
      maxStudents: 40,
      fee: "RWF 120,000/year",
      status: "active",
      applications: 18,
      startDate: "September 2024",
      description: "Comprehensive automotive repair and maintenance training"
    },
    {
      id: 3,
      title: "Nursing Assistant",
      category: "Healthcare",
      duration: "2 years",
      students: 28,
      maxStudents: 35,
      fee: "RWF 100,000/year",
      status: "pending",
      applications: 15,
      startDate: "January 2025",
      description: "Professional nursing care and patient assistance training"
    }
  ];

  const vacancies = [
    {
      id: 1,
      title: "Instructor - Computer Programming",
      department: "Technology",
      type: "Full-time",
      experience: "3+ years",
      salary: "RWF 800,000 - 1,200,000",
      applications: 12,
      postedDate: "2024-01-15",
      status: "open"
    },
    {
      id: 2,
      title: "Workshop Supervisor - Automotive",
      department: "Engineering",
      type: "Full-time",
      experience: "5+ years",
      salary: "RWF 900,000 - 1,300,000",
      applications: 8,
      postedDate: "2024-01-10",
      status: "open"
    },
    {
      id: 3,
      title: "Lab Assistant - Healthcare",
      department: "Healthcare",
      type: "Part-time",
      experience: "2+ years",
      salary: "RWF 400,000 - 600,000",
      applications: 5,
      postedDate: "2024-01-08",
      status: "closed"
    }
  ];

  const stats = {
    totalPrograms: 12,
    activePrograms: 8,
    totalStudents: 450,
    totalApplications: 156,
    totalVacancies: 8,
    openVacancies: 5
  };

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
                Institution Dashboard
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Institution Management</h1>
          <p className="text-gray-600">Manage your TVET programs, vacancies, and student applications</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalPrograms}</p>
                  <p className="text-sm text-gray-600">Total Programs</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}</p>
                  <p className="text-sm text-gray-600">Total Students</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
                  <p className="text-sm text-gray-600">Applications</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalVacancies}</p>
                  <p className="text-sm text-gray-600">Total Vacancies</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Target className="h-8 w-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.openVacancies}</p>
                  <p className="text-sm text-gray-600">Open Vacancies</p>
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
                  <p className="text-sm text-gray-600">Placement Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("programs")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "programs"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Programs ({programs.length})
              </button>
              <button
                onClick={() => setActiveTab("vacancies")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "vacancies"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Vacancies ({vacancies.length})
              </button>
              <button
                onClick={() => setActiveTab("applications")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "applications"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Applications ({stats.totalApplications})
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "analytics"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === "programs" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">TVET Programs</h2>
              <Button className="bg-primary hover:bg-rust-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New Program
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {programs.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{program.title}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{program.description}</p>
                      </div>
                      <Badge variant={program.status === "active" ? "default" : "secondary"}>
                        {program.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{program.category}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{program.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Students:</span>
                        <span className="font-medium">{program.students}/{program.maxStudents}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Fee:</span>
                        <span className="font-medium">{program.fee}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Applications:</span>
                        <span className="font-medium text-primary">{program.applications}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "vacancies" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Job Vacancies</h2>
              <Button className="bg-primary hover:bg-rust-700">
                <Plus className="h-4 w-4 mr-2" />
                Post New Vacancy
              </Button>
            </div>

            <div className="space-y-4">
              {vacancies.map((vacancy) => (
                <Card key={vacancy.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{vacancy.title}</h3>
                          <Badge variant={vacancy.status === "open" ? "default" : "secondary"}>
                            {vacancy.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Department:</span> {vacancy.department}
                          </div>
                          <div>
                            <span className="font-medium">Type:</span> {vacancy.type}
                          </div>
                          <div>
                            <span className="font-medium">Experience:</span> {vacancy.experience}
                          </div>
                          <div>
                            <span className="font-medium">Applications:</span> {vacancy.applications}
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="font-medium text-gray-900">Salary:</span> {vacancy.salary}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "applications" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Student Applications</h2>
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Application Management</h3>
                  <p className="text-gray-600 mb-4">View and manage student applications for your programs</p>
                  <Button className="bg-primary hover:bg-rust-700">
                    View Applications
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "analytics" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Analytics Dashboard</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Program Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Program performance charts will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Student Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Student demographic charts will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

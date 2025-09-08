import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, User, Mail, Phone, MapPin, Award, Briefcase, Sparkles, CheckCircle, Building2 } from "lucide-react";

export function GraduateRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    institution: "",
    program: "",
    graduationYear: "",
    currentStatus: "",
    workExperience: "",
    skills: [],
    jobPreferences: "",
    salaryExpectation: "",
    availability: ""
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Store user data in localStorage for personalization
    localStorage.setItem('userData', JSON.stringify({
      type: 'graduate',
      firstName: formData.firstName,
      lastName: formData.lastName,
      skills: formData.skills,
      experience: formData.experience,
      jobPreferences: formData.jobPreferences
    }));
    // Redirect to graduate dashboard
    window.location.href = '/dashboard/graduate';
  };

  const skillOptions = [
    "JavaScript", "Python", "Java", "React", "Node.js", "SQL",
    "Project Management", "Digital Marketing", "Data Analysis",
    "Graphic Design", "Accounting", "Customer Service",
    "Leadership", "Communication", "Problem Solving",
    "AutoCAD", "Welding", "Electrical Work", "Plumbing",
    "Carpentry", "Mechanical Engineering", "Healthcare"
  ];

  const totalSteps = 5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rust-50 to-white">
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
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Graduate Registration</h1>
          </div>
          <div className="w-full max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter your first name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter your last name"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+250 788 123 456"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location
                          </label>
                          <Input
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="Kigali, Rwanda"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900">Education Background</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Institution Attended
                        </label>
                        <Input
                          name="institution"
                          value={formData.institution}
                          onChange={handleInputChange}
                          placeholder="Enter your school or college name"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Program of Study
                          </label>
                          <Input
                            name="program"
                            value={formData.program}
                            onChange={handleInputChange}
                            placeholder="e.g., Computer Science"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Graduation Year
                          </label>
                          <Input
                            type="number"
                            name="graduationYear"
                            value={formData.graduationYear}
                            onChange={handleInputChange}
                            placeholder="2024"
                            min="2000"
                            max="2030"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900">Work Experience & Skills</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Status
                        </label>
                        <select
                          name="currentStatus"
                          value={formData.currentStatus}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select your current status</option>
                          <option value="unemployed">Unemployed - Seeking work</option>
                          <option value="employed">Employed - Open to opportunities</option>
                          <option value="freelancing">Freelancing</option>
                          <option value="entrepreneur">Entrepreneur</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Work Experience (Years)
                        </label>
                        <select
                          name="workExperience"
                          value={formData.workExperience}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select experience level</option>
                          <option value="0-1">0-1 years</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5+">5+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Skills & Competencies (select all that apply)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {skillOptions.map((skill) => (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => handleSkillToggle(skill)}
                              className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                                formData.skills.includes(skill)
                                  ? 'bg-primary text-white border-primary'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary'
                              }`}
                            >
                              {skill}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900">Job Preferences</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Preferences
                        </label>
                        <textarea
                          name="jobPreferences"
                          value={formData.jobPreferences}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Describe the type of work you're looking for, preferred industries, company size, etc."
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Salary Expectation (RWF)
                          </label>
                          <Input
                            name="salaryExpectation"
                            value={formData.salaryExpectation}
                            onChange={handleInputChange}
                            placeholder="e.g., 500,000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Availability
                          </label>
                          <select
                            name="availability"
                            value={formData.availability}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select availability</option>
                            <option value="immediate">Immediate</option>
                            <option value="1-month">Within 1 month</option>
                            <option value="3-months">Within 3 months</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900">Review Your Information</h3>
                      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Name</p>
                            <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Email</p>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Institution</p>
                            <p className="font-medium">{formData.institution || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Program</p>
                            <p className="font-medium">{formData.program || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Current Status</p>
                            <p className="font-medium">{formData.currentStatus || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Experience</p>
                            <p className="font-medium">{formData.workExperience || 'Not provided'}</p>
                          </div>
                        </div>
                        {formData.skills.length > 0 && (
                          <div>
                            <p className="text-sm text-gray-600 mb-2">Skills</p>
                            <div className="flex flex-wrap gap-2">
                              {formData.skills.map((skill) => (
                                <Badge key={skill} variant="secondary">{skill}</Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                      disabled={currentStep === 1}
                    >
                      Previous
                    </Button>
                    {currentStep < 5 ? (
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-rust-700"
                      >
                        {isSubmitting ? 'Creating Profile...' : 'Create Profile'}
                      </Button>
                    )}
                  </div>
                </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, User, Mail, Phone, MapPin, GraduationCap, BookOpen, Sparkles, CheckCircle } from "lucide-react";

export function StudentRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    institution: "",
    program: "",
    yearOfStudy: "",
    interests: [],
    goals: ""
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

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
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
      type: 'student',
      firstName: formData.firstName,
      lastName: formData.lastName,
      interests: formData.interests,
      educationLevel: formData.educationLevel
    }));
    // Redirect to student dashboard
    window.location.href = '/dashboard/student';
  };

  const interestOptions = [
    "Technology & IT",
    "Engineering",
    "Healthcare",
    "Business & Finance",
    "Arts & Design",
    "Agriculture",
    "Construction",
    "Hospitality",
    "Education",
    "Manufacturing"
  ];

  const totalSteps = 4;

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
            <h1 className="text-3xl font-bold text-gray-900">Student Registration</h1>
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
                      <h3 className="text-lg font-semibold text-gray-900">Current Education Level</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current School Level
                        </label>
                        <select
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select your current level</option>
                          <option value="o-level">O-Level (S1-S3)</option>
                          <option value="a-level">A-Level (S4-S6)</option>
                          <option value="university">University Student</option>
                          <option value="graduate">Recent Graduate</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current School/Institution
                        </label>
                        <Input
                          name="institution"
                          value={formData.institution}
                          onChange={handleInputChange}
                          placeholder="Enter your current school name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subjects of Interest
                        </label>
                        <Input
                          name="subjects"
                          value={formData.subjects}
                          onChange={handleInputChange}
                          placeholder="e.g., Mathematics, Physics, Computer Studies"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900">TVET Program Interests</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          What TVET programs interest you? (choose multiple)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {interestOptions.map((interest) => (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => handleInterestToggle(interest)}
                              className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                                formData.interests.includes(interest)
                                  ? 'bg-primary text-white border-primary'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary'
                              }`}
                            >
                              {interest}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Why are you interested in TVET programs?
                        </label>
                        <textarea
                          name="goals"
                          value={formData.goals}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Tell us why you're interested in TVET programs and what you hope to achieve..."
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
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
                            <p className="text-sm text-gray-600">Phone</p>
                            <p className="font-medium">{formData.phone || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Location</p>
                            <p className="font-medium">{formData.location || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Institution</p>
                            <p className="font-medium">{formData.institution || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Program</p>
                            <p className="font-medium">{formData.program || 'Not provided'}</p>
                          </div>
                        </div>
                        {formData.interests.length > 0 && (
                          <div>
                            <p className="text-sm text-gray-600 mb-2">Interests</p>
                            <div className="flex flex-wrap gap-2">
                              {formData.interests.map((interest) => (
                                <Badge key={interest} variant="secondary">{interest}</Badge>
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
                    {currentStep < 4 ? (
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-rust-700"
                      >
                        {isSubmitting ? 'Creating Account...' : 'Create Account'}
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

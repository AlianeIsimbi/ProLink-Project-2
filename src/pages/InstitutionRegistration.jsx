import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Building2, Mail, Phone, MapPin, GraduationCap, Users, Sparkles, CheckCircle, Award } from "lucide-react";

export function InstitutionRegistration() {
  const [formData, setFormData] = useState({
    institutionName: "",
    institutionType: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    city: "",
    province: "",
    contactPerson: "",
    contactTitle: "",
    contactEmail: "",
    contactPhone: "",
    programs: [],
    studentCount: "",
    establishedYear: "",
    accreditation: "",
    facilities: [],
    partnerships: "",
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

  const handleProgramToggle = (program) => {
    setFormData(prev => ({
      ...prev,
      programs: prev.programs.includes(program)
        ? prev.programs.filter(p => p !== program)
        : [...prev.programs, program]
    }));
  };

  const handleFacilityToggle = (facility) => {
    setFormData(prev => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter(f => f !== facility)
        : [...prev.facilities, facility]
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
      type: 'institution',
      institutionName: formData.institutionName,
      programs: formData.programs,
      facilities: formData.facilities,
      contactPerson: formData.contactPerson
    }));
    // Redirect to institution dashboard
    window.location.href = '/dashboard/institution';
  };

  const programOptions = [
    "Computer Science", "Information Technology", "Engineering", "Business Administration",
    "Accounting", "Marketing", "Healthcare", "Nursing", "Education", "Agriculture",
    "Construction", "Automotive", "Electrical", "Mechanical", "Hospitality",
    "Tourism", "Culinary Arts", "Fashion Design", "Graphic Design", "Journalism"
  ];

  const facilityOptions = [
    "Computer Labs", "Workshops", "Library", "Laboratories", "Sports Facilities",
    "Cafeteria", "Dormitories", "Conference Rooms", "Auditorium", "Research Center",
    "Training Center", "Student Center", "Career Services", "Counseling Center"
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
            <h1 className="text-3xl font-bold text-gray-900">Institution Registration</h1>
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
                      <h3 className="text-lg font-semibold text-gray-900">Institution Information</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Institution Name *
                        </label>
                        <Input
                          name="institutionName"
                          value={formData.institutionName}
                          onChange={handleInputChange}
                          placeholder="Enter your institution name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Institution Type *
                        </label>
                        <select
                          name="institutionType"
                          value={formData.institutionType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        >
                          <option value="">Select institution type</option>
                          <option value="university">University</option>
                          <option value="college">College</option>
                          <option value="tvet">TVET Institution</option>
                          <option value="technical">Technical School</option>
                          <option value="vocational">Vocational School</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="institution@example.com"
                            required
                          />
                        </div>
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
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Website
                        </label>
                        <Input
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://www.institution.rw"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            City
                          </label>
                          <Input
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Kigali"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Province
                          </label>
                          <select
                            name="province"
                            value={formData.province}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select province</option>
                            <option value="kigali">Kigali</option>
                            <option value="north">Northern Province</option>
                            <option value="south">Southern Province</option>
                            <option value="east">Eastern Province</option>
                            <option value="west">Western Province</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address
                        </label>
                        <Input
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Enter full address"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900">Contact Person Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Person Name *
                          </label>
                          <Input
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleInputChange}
                            placeholder="Enter contact person name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title/Position *
                          </label>
                          <Input
                            name="contactTitle"
                            value={formData.contactTitle}
                            onChange={handleInputChange}
                            placeholder="e.g., Registrar, Director"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Email *
                          </label>
                          <Input
                            type="email"
                            name="contactEmail"
                            value={formData.contactEmail}
                            onChange={handleInputChange}
                            placeholder="contact@institution.com"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Phone
                          </label>
                          <Input
                            name="contactPhone"
                            value={formData.contactPhone}
                            onChange={handleInputChange}
                            placeholder="+250 788 123 456"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900">Academic Programs</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Programs Offered (select all that apply)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {programOptions.map((program) => (
                            <button
                              key={program}
                              type="button"
                              onClick={() => handleProgramToggle(program)}
                              className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                                formData.programs.includes(program)
                                  ? 'bg-primary text-white border-primary'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary'
                              }`}
                            >
                              {program}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Total Student Count
                          </label>
                          <Input
                            type="number"
                            name="studentCount"
                            value={formData.studentCount}
                            onChange={handleInputChange}
                            placeholder="e.g., 1500"
                            min="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Year Established
                          </label>
                          <Input
                            type="number"
                            name="establishedYear"
                            value={formData.establishedYear}
                            onChange={handleInputChange}
                            placeholder="e.g., 2010"
                            min="1900"
                            max="2030"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Accreditation Status
                        </label>
                        <Input
                          name="accreditation"
                          value={formData.accreditation}
                          onChange={handleInputChange}
                          placeholder="e.g., Accredited by Higher Education Council"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900">Facilities & Partnerships</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Available Facilities (select all that apply)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {facilityOptions.map((facility) => (
                            <button
                              key={facility}
                              type="button"
                              onClick={() => handleFacilityToggle(facility)}
                              className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                                formData.facilities.includes(facility)
                                  ? 'bg-primary text-white border-primary'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary'
                              }`}
                            >
                              {facility}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Industry Partnerships
                        </label>
                        <textarea
                          name="partnerships"
                          value={formData.partnerships}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="List any current partnerships with companies or organizations..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Goals & Objectives
                        </label>
                        <textarea
                          name="goals"
                          value={formData.goals}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Describe your institution's goals for student placement and industry collaboration..."
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900">Review Your Information</h3>
                      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Institution Name</p>
                            <p className="font-medium">{formData.institutionName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Type</p>
                            <p className="font-medium">{formData.institutionType || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Email</p>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Contact Person</p>
                            <p className="font-medium">{formData.contactPerson}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Location</p>
                            <p className="font-medium">{formData.city}, {formData.province}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Student Count</p>
                            <p className="font-medium">{formData.studentCount || 'Not provided'}</p>
                          </div>
                        </div>
                        {formData.programs.length > 0 && (
                          <div>
                            <p className="text-sm text-gray-600 mb-2">Programs</p>
                            <div className="flex flex-wrap gap-2">
                              {formData.programs.map((program) => (
                                <Badge key={program} variant="secondary">{program}</Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {formData.facilities.length > 0 && (
                          <div>
                            <p className="text-sm text-gray-600 mb-2">Facilities</p>
                            <div className="flex flex-wrap gap-2">
                              {formData.facilities.map((facility) => (
                                <Badge key={facility} variant="outline">{facility}</Badge>
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
                        {isSubmitting ? 'Registering Institution...' : 'Register Institution'}
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

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { 
  GraduationCap, 
  Users, 
  Award, 
  Building2, 
  X,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function RegistrationModal({ isOpen, onClose }) {
  const [selectedRole, setSelectedRole] = useState(null);

  const registrationOptions = [
    {
      id: 'student',
      title: 'Join as Student',
      description: 'Discover TVET programs and build your career',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      route: '/register/student'
    },
    {
      id: 'graduate',
      title: 'Join as Graduate',
      description: 'Find job opportunities and showcase your skills',
      icon: Award,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      route: '/register/graduate'
    },
    {
      id: 'institution',
      title: 'Register Institution',
      description: 'Connect with industry and showcase programs',
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      route: '/register/institution'
    },
    {
      id: 'company',
      title: 'Register Company',
      description: 'Find skilled talent and partner with institutions',
      icon: Building2,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      route: '/register/company'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="text-center pb-6 p-8 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rust-600 to-rust-800 bg-clip-text text-transparent">
              Get Started with ProLink
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-gray-600 mt-2">
            Choose your role to get started with the platform
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {registrationOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Card
                  key={option.id}
                  className={`group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden ${
                    selectedRole === option.id ? 'ring-2 ring-rust-500' : ''
                  }`}
                  onClick={() => setSelectedRole(option.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${option.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                          {option.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                          {option.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-500">
                            Click to select
                          </span>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={selectedRole ? registrationOptions.find(opt => opt.id === selectedRole)?.route : '/register/student'}>
              <Button 
                size="lg" 
                className="group px-8 py-4 bg-gradient-to-r from-rust-500 to-rust-600 hover:from-rust-600 hover:to-rust-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedRole}
              >
                <span>Continue Registration</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={onClose}
              className="px-8 py-4 border-rust-300 text-rust-700 hover:bg-rust-50 shadow-md"
            >
              Cancel
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <button className="text-rust-600 hover:text-rust-700 font-medium underline">
                Sign in here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

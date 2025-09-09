import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Star, MapPin, GraduationCap, Award, Building2, Calendar, TrendingUp, Users, Target, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SuccessStoryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Detailed success stories data
  const successStories = [
    {
      id: 1,
      name: "Jean Paul Nkurunziza",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      role: "Senior Automotive Technician",
      company: "Volkswagen Rwanda",
      location: "Kigali, Rwanda",
      program: "Automotive Technology",
      institution: "IPRC Kicukiro",
      graduationYear: "2022",
      currentSalary: "RWF 450,000/month",
      previousSalary: "RWF 150,000/month",
      quote: "TVET completely changed my life. I went from being unemployed to leading a team of 15 automotive technicians at Volkswagen Rwanda. The hands-on training gave me confidence and skills that employers value. Today I earn 3x more than I ever imagined possible.",
      
      // TVET Journey
      tvetJourney: {
        startYear: 2020,
        duration: "2 years",
        program: "Diploma in Automotive Technology",
        keySkills: ["Engine Repair", "Diagnostic Systems", "Team Leadership", "Quality Control"],
        practicalHours: "1,200 hours",
        internships: ["Kigali Auto Services", "Rwanda Motors"],
        certifications: ["Automotive Technician Level 3", "Safety Management", "Customer Service Excellence"]
      },
      
      // Achievements
      achievements: [
        {
          title: "Promoted to Senior Technician",
          description: "Promoted within 18 months of joining Volkswagen Rwanda",
          year: "2023",
          impact: "Led technical training programs for new hires"
        },
        {
          title: "Team Leadership",
          description: "Currently managing a team of 15 automotive technicians",
          year: "2024",
          impact: "Improved team efficiency by 30%"
        },
        {
          title: "Salary Growth",
          description: "Achieved 200% salary increase since graduation",
          year: "2024",
          impact: "From RWF 150,000 to RWF 450,000 monthly"
        },
        {
          title: "Industry Recognition",
          description: "Featured in Rwanda Automotive Excellence Awards",
          year: "2023",
          impact: "Recognized for outstanding technical skills"
        }
      ],
      
      // Skills Developed
      skills: [
        { name: "Engine Diagnostics", level: 95, category: "Technical" },
        { name: "Team Management", level: 90, category: "Leadership" },
        { name: "Customer Service", level: 88, category: "Soft Skills" },
        { name: "Quality Control", level: 92, category: "Technical" },
        { name: "Safety Protocols", level: 96, category: "Technical" },
        { name: "Problem Solving", level: 89, category: "Soft Skills" }
      ],
      
      // Impact
      impact: {
        personal: "Transformed from unemployed to senior professional",
        family: "Able to support extended family financially",
        community: "Mentoring 5 young technicians in his community",
        economic: "Contributing to Rwanda's automotive industry growth"
      }
    },
    {
      id: 2,
      name: "Grace Uwimana",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      role: "Mobile App Developer",
      company: "KLab Rwanda",
      location: "Kigali, Rwanda",
      program: "Information Technology",
      institution: "IPRC Kicukiro",
      graduationYear: "2021",
      currentSalary: "RWF 380,000/month",
      previousSalary: "RWF 120,000/month",
      quote: "The practical approach in TVET was exactly what I needed. I went from knowing nothing about programming to building mobile apps that serve thousands of users across Rwanda. The instructors were patient and the real-world projects prepared me perfectly for the tech industry.",
      
      tvetJourney: {
        startYear: 2019,
        duration: "2 years",
        program: "Diploma in Information Technology",
        keySkills: ["Mobile Development", "UI/UX Design", "Database Management", "Project Management"],
        practicalHours: "1,000 hours",
        internships: ["Tech Solutions Rwanda", "KLab Innovation Hub"],
        certifications: ["Mobile App Development", "UI/UX Design", "Agile Project Management"]
      },
      
      achievements: [
        {
          title: "Mobile App Success",
          description: "Developed 3 successful mobile applications",
          year: "2023",
          impact: "Apps serve over 10,000 users across Rwanda"
        },
        {
          title: "Tech Week Recognition",
          description: "Featured speaker at Rwanda Tech Week 2023",
          year: "2023",
          impact: "Inspired 200+ young developers"
        },
        {
          title: "Entrepreneurship",
          description: "Started her own tech consultancy",
          year: "2024",
          impact: "Employing 3 junior developers"
        }
      ],
      
      skills: [
        { name: "React Native", level: 95, category: "Technical" },
        { name: "UI/UX Design", level: 90, category: "Design" },
        { name: "Project Management", level: 85, category: "Leadership" },
        { name: "Database Design", level: 88, category: "Technical" },
        { name: "Client Communication", level: 92, category: "Soft Skills" },
        { name: "Problem Solving", level: 94, category: "Soft Skills" }
      ],
      
      impact: {
        personal: "From no tech knowledge to successful developer",
        family: "First in family to work in tech industry",
        community: "Teaching coding to 20+ young women",
        economic: "Contributing to Rwanda's digital transformation"
      }
    }
  ];

  useEffect(() => {
    const foundStory = successStories.find(s => s.id === parseInt(id));
    setStory(foundStory);
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rust-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rust-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading success story...</p>
        </div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rust-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Story Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-rust-600 hover:bg-rust-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rust-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-rust-600 to-rust-700 text-white py-8">
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => navigate('/')} 
            variant="ghost" 
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Success Stories
          </Button>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <ImageWithFallback
                src={story.image}
                alt={story.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Star className="h-6 w-6 text-rust-600" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">{story.name}</h1>
              <p className="text-xl text-rust-200 mb-2">{story.role}</p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-rust-200">
                <div className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  <span>{story.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{story.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quote Section */}
        <Card className="mb-12 border-0 shadow-lg bg-gradient-to-br from-white to-rust-50">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="text-6xl text-rust-300 mb-4">"</div>
              <p className="text-xl text-gray-700 italic leading-relaxed mb-6">
                {story.quote}
              </p>
              <div className="text-6xl text-rust-300">"</div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* TVET Journey */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-rust-500 to-rust-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">TVET Journey</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-600">Program:</span>
                  <span className="text-gray-900">{story.tvetJourney.program}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-600">Institution:</span>
                  <span className="text-gray-900">{story.institution}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-600">Duration:</span>
                  <span className="text-gray-900">{story.tvetJourney.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-600">Practical Hours:</span>
                  <span className="text-gray-900">{story.tvetJourney.practicalHours}</span>
                </div>
                <div className="py-2">
                  <span className="font-medium text-gray-600 block mb-2">Key Skills:</span>
                  <div className="flex flex-wrap gap-2">
                    {story.tvetJourney.keySkills.map((skill, index) => (
                      <Badge key={index} className="bg-rust-100 text-rust-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-rust-500 to-rust-600 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Key Achievements</h2>
              </div>
              
              <div className="space-y-4">
                {story.achievements.map((achievement, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-rust-50 to-orange-50 rounded-lg border border-rust-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-rust-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {achievement.year}
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            {achievement.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-rust-500 to-rust-600 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Skills Developed</h2>
              </div>
              
              <div className="space-y-4">
                {story.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-rust-500 to-rust-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{skill.category}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-rust-500 to-rust-600 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Impact</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-rust-50 to-orange-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Impact</h3>
                  <p className="text-gray-600 text-sm">{story.impact.personal}</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-rust-50 to-orange-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Family Impact</h3>
                  <p className="text-gray-600 text-sm">{story.impact.family}</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-rust-50 to-orange-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Community Impact</h3>
                  <p className="text-gray-600 text-sm">{story.impact.community}</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-rust-50 to-orange-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Economic Impact</h3>
                  <p className="text-gray-600 text-sm">{story.impact.economic}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="mt-12 border-0 shadow-lg bg-gradient-to-r from-rust-600 to-rust-700 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Inspired by {story.name}'s Story?</h2>
            <p className="text-xl text-rust-200 mb-6">
              Start your own TVET journey and write your success story
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-rust-600 hover:bg-rust-50"
                onClick={() => navigate('/register/student')}
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20"
                onClick={() => navigate('/')}
              >
                View More Stories
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

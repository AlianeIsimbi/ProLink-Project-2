import { Card, CardContent } from "./ui/card";
import { TrendingUp, Users, Building, BookOpen, Target, Award, CheckCircle, Star, Globe, Zap, Shield, HandHeart } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "2.5M+",
      label: "Young People (15-24)",
      description: "Target demographic in Rwanda"
    },
    {
      icon: BookOpen,
      value: "400+", 
      label: "TVET Programs",
      description: "Across Rwanda's institutions"
    },
    {
      icon: Building,
      value: "50K+",
      label: "Private Companies",
      description: "Potential employment partners"
    },
    {
      icon: Target,
      value: "85%",
      label: "Employment Rate Goal",
      description: "For TVET graduates"
    },
    {
      icon: TrendingUp,
      value: "30%",
      label: "Skills Gap Reduction",
      description: "Projected improvement"
    },
    {
      icon: Award,
      value: "Vision 2050",
      label: "National Alignment",
      description: "Supporting Rwanda's development goals"
    }
  ];

  return (
    <section className="py-20 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Driving National Impact
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            ProLink is positioned to create significant impact across the country's skills development ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl text-gray-900 mb-2">{stat.value}</div>
                <h3 className="text-lg text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-700 font-medium">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl text-gray-900 mb-4">
                Supporting Rwanda's Vision 2050
              </h3>
              <p className="text-gray-800 mb-6 font-medium">
                Our platform directly contributes to Rwanda's national development strategy by:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-rust-100 to-rust-200 rounded-lg flex items-center justify-center mt-1">
                    <Target className="h-3 w-3 text-rust-600" />
                  </div>
                  <span className="text-gray-800 font-medium">Reducing youth unemployment through skills-job matching</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-rust-100 to-rust-200 rounded-lg flex items-center justify-center mt-1">
                    <Globe className="h-3 w-3 text-rust-600" />
                  </div>
                  <span className="text-gray-800 font-medium">Strengthening public-private partnerships in education</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-rust-100 to-rust-200 rounded-lg flex items-center justify-center mt-1">
                    <Zap className="h-3 w-3 text-rust-600" />
                  </div>
                  <span className="text-gray-800 font-medium">Building a skilled workforce for economic transformation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-rust-100 to-rust-200 rounded-lg flex items-center justify-center mt-1">
                    <Star className="h-3 w-3 text-rust-600" />
                  </div>
                  <span className="text-gray-800 font-medium">Promoting innovation and entrepreneurship</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h4 className="text-xl text-gray-900 mb-4">Expected Outcomes</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-rust-600" />
                    <span className="text-gray-800 font-medium">TVET Enrollment Increase</span>
                  </div>
                  <span className="text-primary font-semibold">+40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-rust-600" />
                    <span className="text-gray-800 font-medium">Graduate Employment Rate</span>
                  </div>
                  <span className="text-primary font-semibold">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-rust-600" />
                    <span className="text-gray-800 font-medium">Industry Partnerships</span>
                  </div>
                  <span className="text-primary font-semibold">+200</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-rust-600" />
                    <span className="text-gray-800 font-medium">Skills Gap Reduction</span>
                  </div>
                  <span className="text-primary font-semibold">30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

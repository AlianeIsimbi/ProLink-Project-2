import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  GraduationCap, 
  Building2, 
  Users, 
  Network, 
  Target, 
  TrendingUp,
  MessageSquare,
  BookOpen,
  Briefcase,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Features() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const stakeholders = [
    {
      title: "TVET Institutions",
      description: "Enhance visibility, connect with industry partners, and increase enrollment",
      icon: GraduationCap,
      color: "from-rust-400 to-rust-600",
      features: [
        "Showcase programs and facilities",
        "Connect with industry partners",
        "Track graduate employment rates",
        "Access funding opportunities"
      ],
      image: "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFmcmljYW4lMjBhcnRpc2FuJTIwbWV0YWx3b3JrJTIwY3JhZnR8ZW58MXx8fHwxNzU2NDc3OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      cta: "Register Institution"
    },
    {
      title: "Young People & Students",
      description: "Discover career paths, develop skills, and connect with opportunities",
      icon: Users,
      color: "from-rust-300 to-rust-500",
      features: [
        "Explore TVET programs",
        "Find internship opportunities",
        "Build professional networks",
        "Access career guidance"
      ],
      image: "https://images.unsplash.com/photo-1633112046092-a161d99563d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGNyZWF0aXZlJTIwYWZyaWNhbiUyMHdvcmtzaG9wJTIwcG90dGVyeXxlbnwxfHx8fDE3NTY0Nzc5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      cta: "Join as Student"
    },
    {
      title: "Private Sector Companies",
      description: "Find skilled talent, partner with institutions, and invest in workforce development",
      icon: Building2,
      color: "from-rust-500 to-rust-700",
      features: [
        "Recruit skilled graduates",
        "Partner with TVET institutions",
        "Offer internship programs",
        "Invest in skills development"
      ],
      image: "https://images.unsplash.com/photo-1738938744238-0f79909b742a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDF8fHx8MTc1NjQ3Nzk3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      cta: "Register Company"
    }
  ];

  const platformFeatures = [
    {
      icon: Network,
      title: "Smart Matching",
      description: "AI-powered matching between students, institutions, and employers based on skills and needs"
    },
    {
      icon: MessageSquare,
      title: "Collaboration Hub",
      description: "Secure messaging and project collaboration tools for all stakeholders"
    },
    {
      icon: Target,
      title: "Skills Tracking",
      description: "Track skill development progress and industry demand trends"
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Data-driven insights on employment trends and skills market dynamics"
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Access to learning materials, industry reports, and best practices"
    },
    {
      icon: Briefcase,
      title: "Job Board",
      description: "Integrated job posting and application system for TVET graduates"
    }
  ];

  return (
    <div className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c25d32' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Stakeholder Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-rust-100 rounded-full text-rust-700 border border-rust-200 mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm">Empowering Every Stakeholder</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">
            Creating Value for
            <span className="block text-primary">Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ProLink transforms how institutions, students, and companies 
            collaborate to build Rwanda's skilled workforce
          </p>
        </div>

        <div className="space-y-24">
          {stakeholders.map((stakeholder, index) => (
            <div 
              key={stakeholder.title} 
              className={`feature-card grid lg:grid-cols-2 gap-12 items-center ${
                visibleCards.includes(index) ? 
                  (index % 2 === 1 ? 'animate-fadeInLeft' : 'animate-fadeInRight') : 
                  'opacity-0'
              }`}
              data-index={index}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover-lift group">
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"></div>
                  <ImageWithFallback
                    src={stakeholder.image}
                    alt={stakeholder.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stakeholder.color} opacity-20 group-hover:opacity-10 transition-opacity`}></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-6 -right-6 animate-float animate-delay-300">
                  <div className={`p-4 rounded-xl shadow-lg bg-gradient-to-r ${stakeholder.color} text-white`}>
                    <stakeholder.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-rust-100 text-rust-700 border-rust-200">
                    {stakeholder.title}
                  </Badge>
                  
                  <h3 className="text-3xl lg:text-4xl text-foreground leading-tight">
                    {stakeholder.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {stakeholder.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {stakeholder.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className={`flex items-center gap-3 text-foreground ${
                        visibleCards.includes(index) ? 
                          `animate-fadeInUp animate-delay-${(featureIndex + 1) * 100}` : 
                          'opacity-0'
                      }`}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link to={
                    stakeholder.title === "TVET Institutions" ? "/register/institution" :
                    stakeholder.title === "Young People & Students" ? "/register/student" :
                    "/register/graduate"
                  }>
                    <Button 
                      size="lg" 
                      className="group bg-primary hover:bg-rust-700 text-white shadow-lg hover-lift"
                    >
                      <span>{stakeholder.cta}</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-rust-100 rounded-full text-rust-700 border border-rust-200 mb-6">
            <Network className="h-4 w-4 mr-2" />
            <span className="text-sm">Powerful Platform Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">
            Tools That Drive
            <span className="block text-primary">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive features designed to create meaningful connections and 
            measurable impact across Rwanda's skills ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover-lift border-rust-200 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-scaleIn animate-delay-${index * 100}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-lg opacity-20 group-hover:opacity-30 transition-opacity animate-pulse"></div>
                    <div className="relative p-3 bg-rust-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <feature.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

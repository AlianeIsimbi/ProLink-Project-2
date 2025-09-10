import { Button } from "./ui/button";
import { ArrowRight, Users, BookOpen, Building2, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";
import { RegistrationModal } from "./RegistrationModal";
import heroImg from '../images/Hero.png';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative gradient-rust-light overflow-hidden texture-overlay min-h-screen flex items-center">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="h-6 w-6 text-rust-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-float animate-delay-200">
          <Sparkles className="h-4 w-4 text-rust-500 opacity-40" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float animate-delay-400">
          <Sparkles className="h-5 w-5 text-rust-300 opacity-50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 py-12">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-rust-100 rounded-full text-rust-700 border border-rust-200">
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="text-sm">Connecting Rwanda's Future</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
                <span className="block text-foreground">Bridging</span>
                <span className="block text-primary gradient-text bg-gradient-to-r from-rust-500 to-rust-700 bg-clip-text text-transparent">
                  Skills & Opportunities
                </span>
                <span className="block text-foreground">Together</span>
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl font-medium">
                ProLink creates dynamic bridges between TVET institutions, 
                ambitious young people, and forward-thinking companies. Build the future 
                through strategic skills partnerships.
              </p>
            </div>

            {/* Action buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
              <Button 
                size="lg" 
                className="group px-8 py-4 bg-primary hover:bg-rust-700 text-white shadow-lg hover-lift"
                onClick={() => setShowRegistrationModal(true)}
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="#features">
                <Button variant="outline" size="lg" className="px-8 py-4 border-rust-300 text-rust-700 hover:bg-rust-50 shadow-md">
                  Explore Features
                </Button>
              </a>
            </div>
            
            {/* Animated Stats */}
            <div className={`grid grid-cols-3 gap-6 pt-8 ${isVisible ? 'animate-fadeInUp animate-delay-300' : 'opacity-0'}`}>
              <div className="text-center hover-lift">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary mr-2 animate-float" />
                </div>
                <div className="text-2xl text-foreground">2.5K+</div>
                <div className="text-sm text-gray-600 font-medium">Students</div>
              </div>
              <div className="text-center hover-lift">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-primary mr-2 animate-float animate-delay-100" />
                </div>
                <div className="text-2xl text-foreground">150+</div>
                <div className="text-sm text-gray-600 font-medium">Programs</div>
              </div>
              <div className="text-center hover-lift">
                <div className="flex items-center justify-center mb-2">
                  <Building2 className="h-8 w-8 text-primary mr-2 animate-float animate-delay-200" />
                </div>
                <div className="text-2xl text-foreground">300+</div>
                <div className="text-sm text-gray-600 font-medium">Partners</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${isVisible ? 'animate-fadeInRight animate-delay-100' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              <ImageWithFallback
                className="w-full h-[500px] lg:h-[600px] object-contain"
                src={heroImg}
                alt="ProLink Hero Image"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rust-900/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-rust-200 animate-float animate-delay-500">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-rust-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                  <div className="text-xl text-primary">95%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={showRegistrationModal} 
        onClose={() => setShowRegistrationModal(false)} 
      />
    </section>
  );
}

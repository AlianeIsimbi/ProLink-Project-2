import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, CheckCircle, Sparkles, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="relative py-20 gradient-rust text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 animate-float">
          <Sparkles className="h-8 w-8 text-white/30" />
        </div>
        <div className="absolute top-20 right-20 animate-float animate-delay-200">
          <Zap className="h-6 w-6 text-white/20" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float animate-delay-400">
          <Heart className="h-7 w-7 text-white/25" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 border border-white/20 mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm">Join the Movement</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            Ready to Transform
            <span className="block">Rwanda's Future?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of visionaries who are already building Rwanda's skilled workforce 
            through ProLink's meaningful connections and strategic partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-lift group animate-scaleIn">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                <CheckCircle className="relative h-14 w-14 mx-auto text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl mb-3">Free to Start</h3>
              <p className="text-white/80 leading-relaxed">
                Begin your journey at no cost and unlock all platform features instantly
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-lift group animate-scaleIn animate-delay-100">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                <Zap className="relative h-14 w-14 mx-auto text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl mb-3">Instant Impact</h3>
              <p className="text-white/80 leading-relaxed">
                Start making meaningful connections with relevant stakeholders immediately
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-lift group animate-scaleIn animate-delay-200">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                <Heart className="relative h-14 w-14 mx-auto text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl mb-3">Full Support</h3>
              <p className="text-white/80 leading-relaxed">
                Dedicated team helping you maximize every opportunity and connection
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center animate-fadeInUp animate-delay-300">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/register/student">
              <Button 
                size="lg" 
                variant="secondary" 
                className="group px-10 py-4 bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover-lift"
              >
                <span>Register as Student</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/register/graduate">
              <Button 
                size="lg" 
                variant="outline" 
                className="group px-10 py-4 border-white/30 text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl hover-lift"
              >
                <span>Join as Graduate</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/register/institution">
              <Button 
                size="lg" 
                variant="outline" 
                className="group px-10 py-4 border-white/30 text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl hover-lift"
              >
                <span>Join as Institution</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/register/company">
              <Button 
                size="lg" 
                variant="outline" 
                className="group px-10 py-4 border-white/30 text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl hover-lift"
              >
                <span>Join as Company</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-white/70 animate-fadeInUp animate-delay-400">
            Already part of the community? <a href="#" className="text-white underline hover:no-underline transition-all">Sign in here</a>
          </p>
        </div>
      </div>
    </section>
  );
}

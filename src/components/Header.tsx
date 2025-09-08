import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 nav-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-rust-500 to-rust-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <div className="w-5 h-5 bg-white rounded-md opacity-90"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-rust-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl text-white group-hover:text-rust-300 transition-colors tracking-tight">
                    ProLink
                  </h1>
                  <p className="text-xs text-rust-300 -mt-1">Skills Connect</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <a href="#home" className="px-4 py-2 rounded-full text-white/90 hover:text-white hover:bg-rust-500/20 transition-all">
                Home
              </a>
              <a href="#features" className="px-4 py-2 rounded-full text-rust-200 hover:text-white hover:bg-rust-500/20 transition-all">
                Features
              </a>
              <a href="#institutions" className="px-4 py-2 rounded-full text-rust-200 hover:text-white hover:bg-rust-500/20 transition-all">
                Institutions
              </a>
              <a href="#impact" className="px-4 py-2 rounded-full text-rust-200 hover:text-white hover:bg-rust-500/20 transition-all">
                Impact
              </a>
              <a href="#about" className="px-4 py-2 rounded-full text-rust-200 hover:text-white hover:bg-rust-500/20 transition-all">
                About
              </a>
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-rust-200 hover:text-white hover:bg-rust-500/20 transition-all"
              >
                Login
              </Button>
              <Button 
                size="sm"
                className="bg-gradient-to-r from-rust-500 to-rust-600 hover:from-rust-600 hover:to-rust-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0"
              >
                Register
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute top-full left-0 right-0 nav-dark shadow-2xl border-t border-rust-500/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#home" className="flex items-center px-4 py-3 rounded-xl text-white hover:text-rust-300 hover:bg-rust-500/20 transition-colors">
              Home
            </a>
            <a href="#features" className="flex items-center px-4 py-3 rounded-xl text-rust-200 hover:text-white hover:bg-rust-500/20 transition-colors">
              Features
            </a>
            <a href="#institutions" className="flex items-center px-4 py-3 rounded-xl text-rust-200 hover:text-white hover:bg-rust-500/20 transition-colors">
              Institutions
            </a>
            <a href="#impact" className="flex items-center px-4 py-3 rounded-xl text-rust-200 hover:text-white hover:bg-rust-500/20 transition-colors">
              Impact
            </a>
            <a href="#about" className="flex items-center px-4 py-3 rounded-xl text-rust-200 hover:text-white hover:bg-rust-500/20 transition-colors">
              About
            </a>
            <div className="pt-4 border-t border-rust-500/20">
              <div className="flex flex-col space-y-3">
                <Button variant="ghost" size="sm" className="w-full justify-start text-rust-200 hover:text-white hover:bg-rust-500/20">
                  Login
                </Button>
                <Button size="sm" className="w-full bg-gradient-to-r from-rust-500 to-rust-600 hover:from-rust-600 hover:to-rust-700 text-white border-0">
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
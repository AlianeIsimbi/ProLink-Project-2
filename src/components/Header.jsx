import { Button } from "./ui/button";
import { Menu, X, Bell, Settings, User } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ThemeLanguageSwitcher } from "./ThemeLanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRegisterDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 nav-dark shadow-lg backdrop-blur-md bg-rust-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="flex items-center space-x-3">
                {/* ProLink Logo */}
                <div className="relative">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    {/* Intertwined Links Logo */}
                    <div className="relative w-8 h-8">
                      {/* First link (lighter brown) */}
                      <div className="absolute inset-0">
                        <svg viewBox="0 0 32 32" className="w-full h-full">
                          <path
                            d="M8 12 C8 8, 12 4, 16 8 C20 4, 24 8, 24 12 C24 16, 20 20, 16 16 C12 20, 8 16, 8 12 Z"
                            fill="#D2691E"
                            opacity="0.9"
                          />
                        </svg>
                      </div>
                      {/* Second link (darker brown) */}
                      <div className="absolute inset-0">
                        <svg viewBox="0 0 32 32" className="w-full h-full">
                          <path
                            d="M12 8 C12 4, 16 8, 20 4 C24 8, 28 12, 28 16 C28 20, 24 24, 20 20 C16 24, 12 20, 12 16 C12 12, 16 8, 12 8 Z"
                            fill="#8B4513"
                            opacity="0.8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold text-white group-hover:text-rust-300 transition-colors tracking-tight drop-shadow-lg">
                    ProLink
                  </h1>
                  <p className="text-xs text-rust-300 -mt-1 font-medium drop-shadow-md">Skills Connect</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <button 
                onClick={() => scrollToSection('home')} 
                className="px-4 py-2 rounded-full text-white hover:text-white hover:bg-rust-500/20 transition-all"
              >
                {t('home')}
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="px-4 py-2 rounded-full text-white hover:text-white hover:bg-rust-500/20 transition-all"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="px-4 py-2 rounded-full text-white hover:text-white hover:bg-rust-500/20 transition-all"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('tvet-video')} 
                className="px-4 py-2 rounded-full text-white hover:text-white hover:bg-rust-500/20 transition-all"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('success-stories')} 
                className="px-4 py-2 rounded-full text-white hover:text-white hover:bg-rust-500/20 transition-all"
              >
                Success Stories
              </button>
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
                <User className="h-4 w-4 mr-2" />
                {t('login')}
              </Button>
              <div className="relative" ref={dropdownRef}>
                <Button 
                  size="sm"
                  onClick={() => setIsRegisterDropdownOpen(!isRegisterDropdownOpen)}
                  className="bg-gradient-to-r from-rust-500 to-rust-600 hover:from-rust-600 hover:to-rust-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0"
                >
                  {t('register')}
                </Button>
                {/* Dropdown Menu */}
                {isRegisterDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                    <div className="py-2">
                      <Link 
                        to="/register/student" 
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-rust-50 dark:hover:bg-rust-900/20 hover:text-rust-700 dark:hover:text-rust-300 transition-colors"
                        onClick={() => setIsRegisterDropdownOpen(false)}
                      >
                        <div className="font-medium">{t('studentRegistration')}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">O-level students exploring TVET programs</div>
                      </Link>
                      <Link 
                        to="/register/graduate" 
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-rust-50 dark:hover:bg-rust-900/20 hover:text-rust-700 dark:hover:text-rust-300 transition-colors"
                        onClick={() => setIsRegisterDropdownOpen(false)}
                      >
                        <div className="font-medium">{t('graduateRegistration')}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">TVET graduates seeking job opportunities</div>
                      </Link>
                      <Link 
                        to="/register/institution" 
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-rust-50 dark:hover:bg-rust-900/20 hover:text-rust-700 dark:hover:text-rust-300 transition-colors"
                        onClick={() => setIsRegisterDropdownOpen(false)}
                      >
                        <div className="font-medium">{t('institutionRegistration')}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">TVET institutions managing programs</div>
                      </Link>
                      <Link 
                        to="/register/company" 
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-rust-50 dark:hover:bg-rust-900/20 hover:text-rust-700 dark:hover:text-rust-300 transition-colors"
                        onClick={() => setIsRegisterDropdownOpen(false)}
                      >
                        <div className="font-medium">{t('companyRegistration')}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Companies hiring skilled graduates</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <ThemeLanguageSwitcher />
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
            <button 
              onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }} 
              className="flex items-center px-4 py-3 rounded-xl text-white hover:text-rust-300 hover:bg-rust-500/20 transition-colors w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => { scrollToSection('services'); setIsMenuOpen(false); }} 
              className="flex items-center px-4 py-3 rounded-xl text-rust-200 hover:text-white hover:bg-rust-500/20 transition-colors w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => { scrollToSection('features'); setIsMenuOpen(false); }} 
              className="flex items-center px-4 py-3 rounded-xl text-rust-200 hover:text-white hover:bg-rust-500/20 transition-colors w-full text-left"
            >
              Features
            </button>
            <button 
              onClick={() => { scrollToSection('tvet-video'); setIsMenuOpen(false); }} 
              className="flex items-center px-4 py-3 rounded-xl text-rust-200 hover:text-white hover:bg-rust-500/20 transition-colors w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => { scrollToSection('success-stories'); setIsMenuOpen(false); }} 
              className="flex items-center px-4 py-3 rounded-xl text-rust-200 hover:text-white hover:bg-rust-500/20 transition-colors w-full text-left"
            >
              Success Stories
            </button>
            <div className="pt-4 border-t border-rust-500/20">
              <div className="flex flex-col space-y-3">
                <Button variant="ghost" size="sm" className="w-full justify-start text-rust-200 hover:text-white hover:bg-rust-500/20">
                  Login
                </Button>
                <div className="space-y-2">
                  <div className="text-xs text-rust-300 font-medium px-2">Register as:</div>
                  <Link to="/register/student" className="block">
                    <Button variant="ghost" size="sm" className="w-full justify-start text-rust-200 hover:text-white hover:bg-rust-500/20">
                      Student
                    </Button>
                  </Link>
                  <Link to="/register/graduate" className="block">
                    <Button variant="ghost" size="sm" className="w-full justify-start text-rust-200 hover:text-white hover:bg-rust-500/20">
                      Graduate
                    </Button>
                  </Link>
                  <Link to="/register/institution" className="block">
                    <Button variant="ghost" size="sm" className="w-full justify-start text-rust-200 hover:text-white hover:bg-rust-500/20">
                      Institution
                    </Button>
                  </Link>
                  <Link to="/register/company" className="block">
                    <Button variant="ghost" size="sm" className="w-full justify-start text-rust-200 hover:text-white hover:bg-rust-500/20">
                      Company
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

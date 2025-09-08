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
              <a href="#home" className="px-4 py-2 rounded-full text-white hover:text-white hover:bg-rust-500/20 transition-all">
                {t('home')}
              </a>
              <a href="#features" className="px-4 py-2 rounded-full text-white hover:text-white hover:bg-rust-500/20 transition-all">
                {t('features')}
              </a>
              <a href="#institutions" className="px-4 py-2 rounded-full text-white hover:text-white hover:bg-rust-500/20 transition-all">
                {t('institutions')}
              </a>
              <a href="#impact" className="px-4 py-2 rounded-full text-white hover:text-white hover:bg-rust-500/20 transition-all">
                {t('impact')}
              </a>
              <a href="#about" className="px-4 py-2 rounded-full text-white hover:text-white hover:bg-rust-500/20 transition-all">
                {t('about')}
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

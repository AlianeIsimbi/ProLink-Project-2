import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
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
              <div>
                <h3 className="text-2xl text-white font-bold">ProLink</h3>
                <p className="text-sm text-gray-400 -mt-1">Skills Connect</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-5 w-5" />
                <span>info@prolink.rw</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-5 w-5" />
                <span>+250 788 123 456</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="h-5 w-5" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Copyright */}
        <div className="text-center">
          <div className="text-gray-400 text-sm">
            © 2025 ProLink. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

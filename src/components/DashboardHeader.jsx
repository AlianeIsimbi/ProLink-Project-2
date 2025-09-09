import { Link } from "react-router-dom";

export function DashboardHeader() {
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
                  <p className="text-xs text-rust-200 -mt-1 font-medium drop-shadow-md">Skills Connect</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

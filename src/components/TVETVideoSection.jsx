import { Play, Users, Award, Building2, BookOpen } from "lucide-react";
import { useState } from "react";

export function TVETVideoSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Hands-on Learning",
      description: "Practical training with real-world applications"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Certificates recognized by employers nationwide"
    },
    {
      icon: Building2,
      title: "Career Ready",
      description: "Skills that directly translate to employment"
    },
    {
      icon: BookOpen,
      title: "Diverse Programs",
      description: "From automotive to IT, agriculture to hospitality"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rust-100 to-orange-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-rust-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {!isVideoPlaying ? (
                <>
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-rust-600 to-rust-800 flex items-center justify-center relative cursor-pointer hover:from-rust-700 hover:to-rust-900 transition-all duration-300"
                       onClick={() => setIsVideoPlaying(true)}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/30 rounded-full animate-pulse"></div>
                      <div className="absolute top-8 right-8 w-8 h-8 border-2 border-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-6 left-8 w-12 h-12 border-2 border-white/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="text-center text-white z-10 relative">
                      {/* Large Play Button */}
                      <div className="w-24 h-24 bg-amber-600/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-amber-500/90 transition-all duration-300 shadow-2xl border-4 border-amber-400/60">
                        <Play className="h-10 w-10 text-white ml-1" />
                      </div>
                      
                      {/* Title and Description */}
                      <h3 className="text-3xl font-bold mb-3 text-white drop-shadow-lg">What is TVET?</h3>
                      <p className="text-lg text-gray-200 mb-4 drop-shadow-md">Click to watch the educational video</p>
                      
                      {/* Call to Action Button */}
                      <div className="inline-flex items-center gap-2 bg-amber-600/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/60 hover:bg-amber-500/90 transition-all duration-300">
                        <Play className="h-5 w-5 text-white" />
                        <span className="font-semibold text-white">Watch Now</span>
                      </div>
                    </div>
                    
                    {/* Video Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                      <div className="flex items-center justify-center gap-4 text-white">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium">LIVE</span>
                        </div>
                        <span className="text-sm text-gray-300">•</span>
                        <span className="text-sm font-medium">YouTube Video</span>
                        <span className="text-sm text-gray-300">•</span>
                        <span className="text-sm font-medium">HD Quality</span>
                      </div>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rust-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </>
              ) : (
                <>
                  {/* YouTube Video Embed */}
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/0YzWknOeiiI?autoplay=1&rel=0&modestbranding=1"
                      title="What is TVET? - Educational Video"
                      className="w-full h-full rounded-2xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  {/* Close Video Button */}
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Video Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-gradient-to-br from-rust-50 to-orange-50 backdrop-blur-sm rounded-xl border border-rust-200">
                <div className="text-2xl font-bold text-rust-600">50K+</div>
                <div className="text-sm text-rust-700">Views</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-rust-50 to-orange-50 backdrop-blur-sm rounded-xl border border-rust-200">
                <div className="text-2xl font-bold text-orange-600">4.8</div>
                <div className="text-sm text-rust-700">Rating</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-rust-50 to-orange-50 backdrop-blur-sm rounded-xl border border-rust-200">
                <div className="text-2xl font-bold text-rust-700">95%</div>
                <div className="text-sm text-rust-700">Completion</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-rust-100 text-rust-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Play className="h-4 w-4" />
                Educational Video
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What is <span className="bg-gradient-to-r from-rust-600 to-orange-600 bg-clip-text text-transparent">TVET?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Technical and Vocational Education and Training (TVET) is a pathway to practical skills, 
                career readiness, and economic empowerment. Learn how TVET is transforming lives and 
                building Rwanda's skilled workforce.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-br from-rust-50 to-orange-50 backdrop-blur-sm rounded-xl hover:from-rust-100 hover:to-orange-100 transition-colors border border-rust-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-rust-600 to-rust-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-rust-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-rust-600 to-rust-700 rounded-2xl text-white text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Learn More?</h3>
              <p className="text-rust-200 mb-4">Watch our comprehensive video to understand how TVET can transform your career</p>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-500 transition-colors shadow-lg hover:shadow-xl"
              >
                <Play className="h-5 w-5" />
                Watch TVET Video
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "./ui/card";
import { Star, Award, TrendingUp, Users, Briefcase, GraduationCap, Target, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import businessLadyImg from '../images/business-lady.png';
import electricalEngineerImg from '../images/electrical-engineer.png';
import graceImg from '../images/Grace-dev.png';
import nkurunzizaImg from '../images/Nkurunziza-tech.png';
import constructionImg from '../images/construction-engineer.png';
import farmerImg from '../images/farmer.png';

export function SuccessStories() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  
  const handleCardClick = (e, story) => {
    e.stopPropagation(); // Prevent event from bubbling up to container
    setIsAnimating(false);
    setSelectedCard(story);
  };

  const handleContainerClick = (e) => {
    // Close if clicking anywhere when a card is selected
    if (selectedCard) {
      setSelectedCard(null);
      setIsAnimating(true);
    }
  };
  
  const successStories = [
    {
      id: 1,
      name: "Jean Paul Nkurunziza",
      image: nkurunzizaImg,
      quote: "TVET completely changed my life. I went from being unemployed to leading a team of 15 automotive technicians at Volkswagen Rwanda. The hands-on training gave me confidence and skills that employers value. Today I earn 3x more than I ever imagined possible."
    },
    {
      id: 2,
      name: "Grace Uwimana",
      image: graceImg,
      quote: "The practical approach in TVET was exactly what I needed. I went from knowing nothing about programming to building mobile apps that serve thousands of users across Rwanda. The instructors were patient and the real-world projects prepared me perfectly for the tech industry."
    },
    {
      id: 3,
      name: "Eric Nsengimana",
      image: electricalEngineerImg,
      quote: "TVET's electrical engineering program taught me everything from basic wiring to complex industrial systems. The practical training was so thorough that I started my own electrical services company right after graduation. We now handle major projects across Kigali."
    },
    {
      id: 4,
      name: "Marie Claire Mukamana",
      image: businessLadyImg,
      quote: "The hospitality program at TVET taught me customer service, management, and business skills. I started as a front desk clerk and now I'm managing a luxury hotel in Kigali. The practical experience was invaluable for my career growth."
    },
    {
      id: 5,
      name: "Samuel Nkurunziza",
      image: constructionImg,
      quote: "Construction technology at TVET gave me the technical skills and business knowledge to start my own company. We've built over 50 houses in the past two years and employ 12 people. The practical training made all the difference in my success."
    },
    {
      id: 6,
      name: "Aline Uwase",
      image: farmerImg,
      quote: "TVET's agriculture program transformed our family farm completely. I learned modern farming techniques, business management, and sustainable practices. We've tripled our crop yields and now supply vegetables to restaurants in Kigali. TVET made me a successful farmer."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rust-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rust-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rust-100 text-rust-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Real Stories <span className="bg-gradient-to-r from-rust-600 to-rust-800 bg-clip-text text-transparent">Real Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how TVET education transformed lives and careers. These are the stories of graduates who are now making a difference in Rwanda's economy.
          </p>
        </div>

        {/* Success Stories Auto-Scroll */}
        <div className="w-full max-w-7xl mx-auto overflow-hidden" onClick={handleContainerClick}>
          <div 
            className={`flex gap-4 pb-4 ${isAnimating ? 'animate-scroll-right' : ''}`}
            style={{ 
              width: 'calc(200% + 200px)'
            }}
          >
            {/* First set of cards */}
            {successStories.map((story) => (
              <Card 
                key={story.id} 
                className={`group hover:shadow-lg transition-all duration-500 border-0 overflow-hidden bg-gradient-to-br from-white/90 to-rust-50/90 backdrop-blur-sm flex-shrink-0 cursor-pointer ${selectedCard?.id === story.id ? 'scale-150 z-30 relative shadow-2xl' : 'hover:-translate-y-1 w-64'}`}
                style={{ 
                  height: selectedCard?.id === story.id ? '480px' : '320px',
                  width: selectedCard?.id === story.id ? '384px' : '256px'
                }}
                onClick={(e) => handleCardClick(e, story)}
              >
                <CardContent className="p-4 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative mb-3 w-full flex-shrink-0" style={{ height: selectedCard?.id === story.id ? '192px' : '128px' }}>
                    <ImageWithFallback
                      src={story.image}
                      alt={story.name}
                      className="w-full object-cover rounded-lg"
                      style={{ height: selectedCard?.id === story.id ? '192px' : '128px' }}
                    />
                  </div>

                  {/* Story */}
                  <div className="text-center flex-1 flex flex-col justify-start">
                    <h3 className="text-sm font-bold text-gray-900 mb-2 truncate">{story.name}</h3>
                    <p className="text-xs text-gray-600 italic leading-tight flex-1 overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical'}}>
                      "{story.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
            {/* Duplicate set for seamless loop */}
            {successStories.map((story) => (
              <Card 
                key={`duplicate-${story.id}`} 
                className={`group hover:shadow-lg transition-all duration-500 border-0 overflow-hidden bg-gradient-to-br from-white/90 to-rust-50/90 backdrop-blur-sm flex-shrink-0 cursor-pointer ${selectedCard?.id === story.id ? 'scale-150 z-30 relative shadow-2xl' : 'hover:-translate-y-1 w-64'}`}
                style={{ 
                  height: selectedCard?.id === story.id ? '480px' : '320px',
                  width: selectedCard?.id === story.id ? '384px' : '256px'
                }}
                onClick={(e) => handleCardClick(e, story)}
              >
                <CardContent className="p-4 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative mb-3 w-full flex-shrink-0" style={{ height: selectedCard?.id === story.id ? '192px' : '128px' }}>
                    <ImageWithFallback
                      src={story.image}
                      alt={story.name}
                      className="w-full object-cover rounded-lg"
                      style={{ height: selectedCard?.id === story.id ? '192px' : '128px' }}
                    />
                  </div>

                  {/* Story */}
                  <div className="text-center flex-1 flex flex-col justify-start">
                    <h3 className="text-sm font-bold text-gray-900 mb-2 truncate">{story.name}</h3>
                    <p className="text-xs text-gray-600 italic leading-tight flex-1 overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical'}}>
                      "{story.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}

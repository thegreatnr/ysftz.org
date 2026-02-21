import React, { useState, useEffect, useCallback } from 'react';
import { SlideData } from '../types';

interface HeroSliderProps {
  slides: SlideData[];
  autoPlayInterval?: number;
  showOverlay?: boolean;
  centered?: boolean;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ 
  slides, 
  autoPlayInterval = 8000,
  showOverlay = true,
  centered = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [nextSlide, autoPlayInterval]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-black group">
      {/* Slides Container - Absolute Stack */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={slide.imageUrl} 
              alt={slide.title || `Slide ${index}`}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Content */}
            {showOverlay && index === currentIndex && (
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex ${centered ? 'items-center justify-center' : 'items-end'}`}>
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 md:pb-16">
                  {/* key={currentIndex} re-triggers animate-fadeIn on slide change */}
                  <div 
                    key={`overlay-${currentIndex}`}
                    className={`max-w-2xl bg-black/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl animate-fadeIn ${
                      centered 
                        ? 'mx-auto contents-center border-t-8 border-[#5a3ea6]' 
                        : 'border-l-4 md:border-l-8 border-[#5a3ea6]'
                    }`}
                  >
                    {slide.year && (
                      <p className={`text-[#9bb3da] font-bold text-sm md:text-xl uppercase tracking-widest ${centered ? 'text-center' : ''}`}>
                        {slide.year} {slide.yearLabel || 'Impact'}
                      </p>
                    )}
                    {slide.title && (
                      <h2 className={`text-xl sm:text-xl md:text-xl font-extrabold text-white leading-tight ${centered ? 'text-center' : ''}`}>
                        {slide.title}
                      </h2>
                    )}
                    
                    {slide.stats && (
                      <div className={`grid grid-cols-3 gap-2 md:gap-4 border-t border-white/20 pt-2 ${centered ? 'justify-items-center' : ''}`}>
                        {slide.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <p className="text-white font-extrabold text-lg md:text-xl mb-1">{stat.value}</p>
                            <p className="text-gray-300 text-[8px] md:text-xs font-bold uppercase tracking-tighter">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all opacity-0 md:group-hover:opacity-100 z-30"
      >
        <i className="fa-solid fa-chevron-left text-sm md:text-base"></i>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all opacity-0 md:group-hover:opacity-100 z-30"
      >
        <i className="fa-solid fa-chevron-right text-sm md:text-base"></i>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-30">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${i === currentIndex ? 'bg-[#5a3ea6] scale-125' : 'bg-white/50'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
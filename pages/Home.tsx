import React from 'react';
import HeroSlider from '../components/HeroSlider.tsx';
import { SlideData } from '../types.ts';
import { NEWS_DATA, PARTNERS } from '../constants.tsx';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const homeSlides: SlideData[] = [
    {
      imageUrl: '/site_images/homepage/homepage img1.jpg',
      title: 'We impact children and youth through Sports, Education and Entrepreneurship',
    },
    {
      imageUrl: '/site_images/homepage/homepage img2.jpg',
      title: 'SMAGAYOCO is our annual event bringing together talent to promote, learn and connect',
    },
    {
      imageUrl: '/site_images/homepage/homepage img3.jpg',
      title: 'Our sports academy is the heart of our community activities',
    },
    {
      imageUrl: '/site_images/homepage/homepage img4.jpg',
      title: 'Our Management Team is dedicated to improve the Community',
    },
  ];

  return (
      
    <div className="space-y-12 md:space-y-16 pb-16">
      <HeroSlider slides={homeSlides} />

      {/* About Us Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border-t-8 border-[#5a3ea6] flex flex-col h-fit">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#5a3ea6] mb-6 text-center">
                ABOUT US
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                Yosso Sports Foundation, registered under Tanzanian law, is dedicated to fostering positive change and growth within our communities. We aim to create an innovative, healthy, and sustainable society through initiatives focused on youth engagement and empowerment.
              </p>
            </div>
            <Link 
              to="/about#who-are-we" 
              className="inline-flex items-center gap-2 bg-[#5a3ea6] text-white px-4 py-3 rounded-md font-bold hover:bg-black transition-all group w-fit mx-auto"
            >
              More About Us <i className="fa-solid fa-chevron-right group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border-t-8 border-[#5a3ea6] flex flex-col h-fit">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#5a3ea6] mb-6 text-center">
              LATEST NEWS
            </h2>
            <div className="flex-grow space-y-4 mb-8 max-h-[400px] overflow-y-auto scrollbar-hide pr-2">
              {NEWS_DATA.map((news, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex flex-col sm:flex-row gap-2 sm:gap-4 hover:border-[#5a3ea6] transition-colors">
                  <span className="text-xs font-bold text-[#5a3ea6] whitespace-nowrap bg-[#9bb3da]/20 self-start px-2 py-1 rounded">{news.date}</span>
                  <p className="text-gray-700 text-sm md:text-base font-medium">{news.text}</p>
                </div>
              ))}
            </div>
            {/* <button className="inline-flex items-center gap-2 bg-[#5a3ea6] text-white px-4 py-3 rounded-md font-bold hover:bg-black transition-all group w-fit mx-auto">
              More News <i className="fa-solid fa-chevron-right group-hover:translate-x-1 transition-transform"></i>
            </button> */}
          </div>
        </div>
      </section>

      {/* Partners section */}
      <section className="bg-white py-12 md:py-16 overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#5a3ea6] text-center uppercase tracking-widest">Our Partners</h2>
        </div>
        <div className="relative group/partners">
          <div className="animate-scroll hover:[animation-play-state:paused]">
            {/* Render twice for infinite effect */}
            {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center mx-4 md:mx-12 w-[140px] md:w-[240px] shrink-0">
                <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] flex items-center justify-center mb-4">
                  <img 
                    src={partner.imageUrl} 
                    alt={partner.name} 
                    className="max-w-full max-h-full object-contain transition-all duration-500 hover:scale-110" 
                  />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase text-center tracking-tighter whitespace-nowrap">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

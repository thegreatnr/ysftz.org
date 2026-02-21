
import React from 'react';

const Donate: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-20">
      {/* Hero */}
      <div className="relative h-[300px] md:h-[500px]">
        <img 
          src="/site_images/donate/donate_hero.jpg"
          alt="Support Us" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#5a3ea6]/60 flex items-center justify-center">
          <h1 className="text-3xl md:text-7xl font-black text-white text-center px-4 tracking-tighter drop-shadow-2xl uppercase">
            Support Our Cause
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto -mt-8 md:-mt-20 relative z-10 px-4">
        <div className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[50px] shadow-2xl border-t-8 border-[#5a3ea6] text-center space-y-8 md:space-y-12">
          <h2 className="text-xl md:text-3xl font-extrabold text-gray-800 leading-tight">
            Local and International Supporters can support our campaign through these platforms:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            <a 
              href="#" 
              target="_blank" 
              className="p-6 md:p-10 bg-gray-50 rounded-3xl border-2 border-transparent hover:border-[#5a3ea6] hover:bg-white transition-all transform hover:scale-[1.03] shadow-sm flex flex-col items-center group"
            >
              <div className="h-10 md:h-16 mb-4 flex items-center justify-center transition-all">
                <img src="/site_images/donate/gofundme logo.png" alt="GoFundMe" className="h-full w-auto object-contain" />
              </div>
              <span className="font-black text-[#5a3ea6] text-base md:text-lg">GoFundMe</span>
            </a>

            <a 
              href="#" 
              target="_blank" 
              className="p-6 md:p-10 bg-gray-50 rounded-3xl border-2 border-transparent hover:border-[#5a3ea6] hover:bg-white transition-all transform hover:scale-[1.03] shadow-sm flex flex-col items-center group"
            >
              <div className="h-10 md:h-16 mb-4 flex items-center justify-center transition-all">
                <img src="/site_images/donate/justgiving logo.png" alt="JustGiving" className="h-full w-auto object-contain" />
              </div>
              <span className="font-black text-[#5a3ea6] text-base md:text-lg">JustGiving</span>
            </a>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <p className="text-gray-500 italic text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              "Your contribution, no matter the size, helps us provide equipment, training, and education to the youth of Songwe Region."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;


import React from 'react';
import HeroSlider from '../components/HeroSlider.tsx';
import { SlideData } from '../types';

const SMAGAYOCO: React.FC = () => {
  const smSlides: SlideData[] = [
    {
      imageUrl: '/site_images/smagayoco/smagayoco img2023.jpg',
      year: '2023',
      yearLabel: "Participant's",
      stats: [
        { label: 'Academies', value: 15 },
        { label: 'Children and Youth', value: 600 },
        { label: 'Audience', value: 1500 },
      ]
    },
    {
      imageUrl: '/site_images/smagayoco/smagayoco img2024.jpg',
      year: '2024',
      yearLabel: "Participant's",
      stats: [
        { label: 'Academies', value: 8 },
        { label: 'Children and Youth', value: 400 },
        { label: 'Audience', value: 800 },
      ]
    }, 
    {
      imageUrl: '/site_images/smagayoco/smagayoco img2025.jpg',
      year: '2025',
      yearLabel: "Participant's",
      stats: [
        { label: 'Academies', value: 10 },
        { label: 'Children and Youth', value: 500 },
        { label: 'Audience', value: 1500 },
      ]
    },   
  ];

  const updates = [
    { range: 'July, 22 - July, 25, 2025', hasProposal: true, hasReport: true, hasGallery: true },
    { range: 'July, 20 - July, 23, 2024', hasProposal: true, hasReport: true, hasGallery: true },
    { range: 'July, 15 - July, 18, 2023', hasProposal: true, hasReport: true, hasGallery: true },
  ];

  return (
    <div className="space-y-10 md:space-y-16 pb-16">
      <HeroSlider slides={smSlides} centered={false} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        
        {/* About */}
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border-t-8 border-[#5a3ea6]">
          <h2 className="text-2xl text-center md:text-3xl font-extrabold text-[#5a3ea6] mb-6 md:mb-8">ABOUT SMAGAYOCO</h2>
          <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
            <p>
              SADC Main Gate Youth Competition (SMAGAYOCO) is an annual youth football tournament held in the Songwe Region of Tanzania. The event provides a platform for corporate and individual sponsors to demonstrate commitment to youth development.
            </p>
            <p className="font-bold">The event features:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Structured football competition for youth development</li>
              <li>Talent identification and scouting opportunities</li>
              <li>Educational and life skills workshops</li>
              <li>Media coverage and visibility for partners</li>
              <li>Community engagement activities</li>
            </ul>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border-t-8 border-[#5a3ea6]">
          <h2 className="text-2xl text-center md:text-3xl font-extrabold text-[#5a3ea6] mb-6 md:mb-8">SMAGAYOCO UPDATES</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
            {updates.map((update, i) => (
              <div key={i} className="p-4 md:p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="font-bold text-[#5a3ea6] bg-[#9bb3da]/30 px-4 py-1 rounded-full text-xs md:text-sm whitespace-nowrap">{update.range}</span>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none bg-gray-300 text-white text-[10px] md:text-xs px-3 py-2 rounded font-bold transition-colors">Invitation</button>
                  <button className="flex-1 sm:flex-none bg-gray-300 text-white text-[10px] md:text-xs px-3 py-2 rounded font-bold transition-colors">Report</button>
                  <button className="flex-1 sm:flex-none bg-gray-300 text-white text-[10px] md:text-xs px-3 py-2 rounded font-bold transition-colors">Gallery</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default SMAGAYOCO;

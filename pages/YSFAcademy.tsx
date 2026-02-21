
import React from 'react';
import HeroSlider from '../components/HeroSlider.tsx';
import { SlideData } from '../types';

const YSFAcademy: React.FC = () => {
  const academySlides: SlideData[] = [
    {
      imageUrl: '/site_images/ysf academy/ysfa img1.jpg',
      year: '2020',
      title: 'Our Journey Began with Grassroots Passion',
      stats: [
        { label: 'Sessions', value: 50 },
        { label: 'Children', value: 120 },
        { label: 'Youth', value: 200 },
      ]
    },
    {
      imageUrl: '/site_images/ysf academy/ysfa img2.jpg',
      year: '2021',
      title: 'Resilience and Growth During Challenges',
      stats: [
        { label: 'Sessions', value: 80 },
        { label: 'Children', value: 250 },
        { label: 'Youth', value: 400 },
      ]
    },
    {
      imageUrl: '/site_images/ysf academy/ysfa img3.jpg',
      year: '2022',
      title: 'Expanding Our Reach in the Songwe Region',
      stats: [
        { label: 'Sessions', value: 100 },
        { label: 'Children', value: 300 },
        { label: 'Youth', value: 550 },
      ]
    },
    {
      imageUrl: '/site_images/ysf academy/ysfa img4.jpg',
      year: '2023',
      title: 'Professionalizing Our Development Path',
      stats: [
        { label: 'Sessions', value: 120 },
        { label: 'Children', value: 350 },
        { label: 'Youth', value: 500 },
      ]
    },
    {
      imageUrl: '/site_images/ysf academy/ysfa img5.jpg',
      year: '2024',
      title: 'Nurturing Future Champions Every Day',
      stats: [
        { label: 'Sessions', value: 150 },
        { label: 'Children', value: 400 },
        { label: 'Youth', value: 600 },
      ]
    },
    {
      imageUrl: '/site_images/ysf academy/ysfa women.jpg',
      year: '2025',
      title: 'Setting New Milestones for Youth Excellence',
      stats: [
        { label: 'Sessions', value: 150 },
        { label: 'Children', value: 450 },
        { label: 'Youth', value: 700 },
      ]
    },
  ];

  return (
    <div className="space-y-10 md:space-y-16 pb-16">
      <HeroSlider slides={academySlides} centered={false} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[40px] shadow-xl border-b-8 border-[#5a3ea6]">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#5a3ea6] mb-8 md:mb-10 text-center uppercase tracking-tighter">About YSF Academy</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            <div className="text-gray-700 leading-relaxed text-sm md:text-lg space-y-6">
              <p>
                Yosso Sports Foundation Academy is the grassroots sports arm of Yosso Sports Foundation. It sits at the core of the Foundation’s programs and community initiatives. 
              </p>
              <p>
                Since its establishment, the Foundation’s main focus has been sports development, especially football. Currently, the organization runs two grassroots football academies in Mbozi District, Songwe Region. One academy is based in Vwawa Village and the other in Masoko Village.
              </p>
            </div>
            <div className="bg-[#5a3ea6] text-white p-6 md:p-10 rounded-3xl">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                <i className="fa-solid fa-bullseye text-[#9bb3da]"></i> Our Goals
              </h3>
              <ul className="space-y-4 font-medium text-sm md:text-base">
                <li className="flex gap-3"><i className="fa-solid fa-check-circle mt-1 text-[#9bb3da]"></i> Identify and develop football talent in underserved communities.</li>
                <li className="flex gap-3"><i className="fa-solid fa-check-circle mt-1 text-[#9bb3da]"></i> Promote discipline, teamwork, and leadership through sport.</li>
                <li className="flex gap-3"><i className="fa-solid fa-check-circle mt-1 text-[#9bb3da]"></i> Support physical health and active lifestyles.</li>
                <li className="flex gap-3"><i className="fa-solid fa-check-circle mt-1 text-[#9bb3da]"></i> Create pathways for education and future employment.</li>
                <li className="flex gap-3"><i className="fa-solid fa-check-circle mt-1 text-[#9bb3da]"></i> Involve families and schools in youth development.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YSFAcademy;

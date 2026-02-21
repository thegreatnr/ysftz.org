
import React, { useEffect } from 'react';
import { TEAM_MEMBERS } from '../constants.tsx';

const AboutUs: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const fullHash = window.location.hash;
      const parts = fullHash.split('#');
      const targetId = parts[parts.length - 1];

      if (targetId && !targetId.startsWith('/')) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleScroll();
    window.addEventListener('hashchange', handleScroll);
    return () => window.removeEventListener('hashchange', handleScroll);
  }, []);

  return (
    <div id="who-are-we" className="scroll-mt-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16 md:space-y-24">
      {/* Who Are We */}
      <section className="space-y-10 md:space-y-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#5a3ea6] text-center mb-8 md:mb-16 tracking-tighter">WHO ARE WE </h1>
        
        {/* Problem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5a3ea6] border-l-4 border-[#5a3ea6] pl-4">THE PROBLEM</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left md:text-justify">
              Children and Youth in Songwe face persistent poverty and limited opportunities. Many lack access to structured mentorship and safe environments for development. This results in idle youth, wasted talent, and increased social risk. Yosso Sports Foundation addresses this challenge at the community level. We use football as an organized and inclusive development platform.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="/site_images/about us/waw img1.jpg" alt="Problem Area" className="rounded-3xl shadow-xl md:shadow-2xl transform hover:scale-[1.02] transition-transform w-full object-cover h-[250px] md:h-[400px]" />
          </div>
        </div>

        {/* History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <img src="/site_images/about us/waw img2.jpg" alt="History" className="rounded-3xl shadow-xl md:shadow-2xl transform hover:scale-[1.02] transition-transform w-full object-cover h-[250px] md:h-[400px]" />
          </div>
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5a3ea6] border-l-4 border-[#5a3ea6] pl-4">OUR HISTORY</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left md:text-justify">
              Yosso Sports Foundation began in 2016 as Yosso Soccer Center (YSC). Following formal registration in 2022, the organization evolved into Yosso Sports Foundation (YSF). The focus expanded to institutional development and accountable operations. Early implementation years were used to build systems, policies, and capacity.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5a3ea6] border-l-4 border-[#5a3ea6] pl-4">OUR MISSION</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left md:text-justify">
              To create a safe and supportive environment where young people actively participate in their social and economic development. We harness sport and community resources to promote positive behavior, life skills, and long-term opportunity. Our approach supports behavior change and builds pathways to education, employment, and self-reliance. We work with families, schools, and local leaders, authorities and other NGOs.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="/site_images/about us/waw img3.jpg" alt="Mission" className="rounded-3xl shadow-xl md:shadow-2xl transform hover:scale-[1.02] transition-transform w-full object-cover h-[250px] md:h-[400px]" />
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="scroll-mt-24 bg-[#5a3ea6] -mx-4 sm:mx-0 px-4 sm:px-10 py-16 md:py-20 rounded-3xl md:rounded-[50px]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 md:mb-16">OUR ACTIVITIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              title: "Education & Empowerment", 
              text: "Education is a key driver of long-term social and economic progress. We identify vulnerable children and youth and support their access to learning opportunities, school materials, and guidance. Our programs help participants stay in school, build confidence, and develop practical skills for future employment and self-reliance.By strengthening access to education, we help reduce dropout risk, limit exposure to harmful environments, and create clearer pathways toward stable livelihoods.",
              img: "/site_images/about us/act img1.jpg"
            },
            { 
              title: "Youth Football Development", 
              text: "Football is a practical platform for youth engagement and development. Our football programs are structured to identify talent, build discipline, and strengthen teamwork and leadership skills. Through regular training, qualified coaching, and organized competition, participants develop both athletic ability and essential life skills.The program promotes healthy lifestyles, positive behavior, and social inclusion. It also creates pathways for education, scholarships, and future employment opportunities linked to sport and related fields.",
              img: "/site_images/about us/act img2.jpg"
            },
            { 
              title: "Youth Empowerment", 
              text: "Yosso Sports Foundation extends youth development beyond sport by delivering workshops, mentorship, and leadership training linked to education and employment pathways. Young people gain practical skills such as communication, teamwork, problem solving, and basic financial literacy.The program supports school retention, career awareness, and preparation for further training, entrepreneurship, or formal employment. By strengthening these competencies, participants are better positioned to pursue education opportunities, start small income-generating activities, or transition into the workforce.",
              img: "/site_images/about us/act img3.jpg"
            }
          ].map((act, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:translate-y-[-5px] transition-transform flex flex-col">
              <img src={act.img} alt={act.title} className="h-56 md:h-64 w-full object-cover" />
              <div className="p-6 md:p-8 flex-grow">
                <h3 className="text-xl font-extrabold text-[#5a3ea6] mb-3">{act.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{act.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-48 space-y-10 md:space-y-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5a3ea6] text-center mb-10 md:mb-16 underline decoration-wavy decoration-[#9bb3da] underline-offset-8">MANAGEMENT TEAM</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col group">
              <div className="relative overflow-hidden h-50 sm:h-72">
                <img src={member.imageUrl} alt={member.name} className="h-50 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a3ea6] to-transparent opacity-0 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <div className="p-6 md:p-8 flex-grow">
                <h3 className="text-2xl font-extrabold text-[#5a3ea6] text-center mb-1">{member.name}</h3>
                <p className="text-[#9bb3da] font-bold uppercase text-xs text-center mb-4 tracking-widest">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed text-left">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

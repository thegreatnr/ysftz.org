
import React from 'react';

const Reports: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 min-h-[600px]">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#5a3ea6] mb-10 md:mb-16 text-center tracking-tighter">REPORTS ARCHIVE</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border-t-8 border-[#5a3ea6] flex flex-col items-center group">
          <div className="w-full aspect-[3/4] bg-gray-100 rounded-2xl mb-6 md:mb-8 overflow-hidden border border-gray-200">
             <img src="/site_images/reports thumbnails/Annual Report 2024.png" alt="Report Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-[#5a3ea6] mb-6">Annual Report 2024</h2>
          <a 
            href="/reports/Yosso Sports Foundation Annual Report, 2024.pdf" 
            className="w-full bg-[#5a3ea6] text-white text-center py-4 rounded-xl font-bold hover:bg-black transition-colors mb-4"
          >
            Download PDF <i className="fa-solid fa-download ml-2"></i>
          </a>
          {/* <button className="text-[#5a3ea6] font-bold hover:underline">View Online</button> */}
        </div>

        {/* Placeholders for other years */}
        {[2023, 2022].map(year => (
          <div key={year} className="bg-white/50 p-6 md:p-8 rounded-3xl shadow-md border-t-4 border-gray-300 flex flex-col items-center grayscale opacity-80">
            <div className="w-full aspect-[3/4] bg-gray-200 rounded-2xl mb-6 md:mb-8 flex items-center justify-center">
               <i className="fa-solid fa-file-pdf text-4xl text-gray-400"></i>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-400 mb-6">Annual Report {year}</h2>
            <button disabled className="w-full bg-gray-300 text-gray-500 py-4 rounded-xl font-bold cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;

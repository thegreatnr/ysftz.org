
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="scroll-mt-24 bg-[#9bb3da] text-gray-800 pt-12 md:pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t-4 border-[#5a3ea6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12 mb-12">

        {/* Site Links */}
        <div className="flex flex-col">
          <h4 className="text-xl font-bold text-[#5a3ea6] mb-6 relative inline-block self-start">
            Site Links
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5a3ea6] rounded-full"></span>
          </h4>
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3">
            <li><Link to="/about" className="hover:underline flex items-center gap-2 font-medium"><i className="fa-solid fa-chevron-right text-[10px] text-[#5a3ea6]"></i> About Us</Link></li>
            <li><Link to="/smagayoco" className="hover:underline flex items-center gap-2 font-medium"><i className="fa-solid fa-chevron-right text-[10px] text-[#5a3ea6]"></i> SMAGAYOCO</Link></li>
            <li><Link to="/academy" className="hover:underline flex items-center gap-2 font-medium"><i className="fa-solid fa-chevron-right text-[10px] text-[#5a3ea6]"></i> YSF Academy</Link></li>
            <li><Link to="/reports" className="hover:underline flex items-center gap-2 font-medium"><i className="fa-solid fa-chevron-right text-[10px] text-[#5a3ea6]"></i> Reports</Link></li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="flex flex-col ">
          <h4 className="text-xl font-bold text-[#5a3ea6] mb-6 relative inline-block self-start">
            Contacts
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5a3ea6] rounded-full"></span>
          </h4>
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#075e54] shadow-sm flex-shrink-0">
                <i className="fa-brands fa-whatsapp fa-xl"></i>
              </div>
              <a href="https://wa.me/255744436067" target="_blank" className="font-bold hover:underline text-sm md:text-base">(+255) 744 436 067</a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#4542F7] shadow-sm flex-shrink-0">
                <i className="fa-solid fa-envelope fa-lg"></i>
              </div>
              <a href="mailto:info@ysftz.org" target="_blank" className="font-bold hover:underline text-sm md:text-base">info@ysftz.org</a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border-2 border-[#5a3ea6] h-40 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.5549628366543!2d32.946679773830105!3d-9.11912969431759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19074fd9a6530043%3A0xf1181742943b3904!2sYosso%20Sports%20Foundation!5e1!3m2!1sen!2stz!4v1768548571120!5m2!1sen!2stz"
              className="w-full h-full border-0"
              loading="lazy"
              title="YSF Location"
            ></iframe>
          </div>
        </div>

        {/* Socials & Donate */}
        <div className="flex flex-col flex-grow lg:flex-none lg:items-end min-h-full">
          <div className="w-full lg:text-right">
            <h4 className="text-xl font-bold text-[#5a3ea6] mb-6 relative inline-block">
              Socials
              <span className="absolute bottom-0 left-0 lg:left-auto lg:right-0 w-full h-1 bg-[#5a3ea6] rounded-full"></span>
            </h4>
          </div>
          <div className="flex gap-3 mb-8 flex-wrap lg:justify-end">
            <a href="https://www.linkedin.com/company/yosso-fc-org/" target="_blank" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white transition-all shadow-sm"><i className="fa-brands fa-linkedin fa-xl md:fa-2xl"></i></a>
            <a href="https://www.facebook.com/share/1DqJRaVVie/" target="_blank" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#1877f2] hover:bg-[#1877f2] hover:text-white transition-all shadow-sm"><i className="fa-brands fa-facebook fa-xl md:fa-2xl"></i></a>
            <a href="https://www.instagram.com/yosso_soccer_center?igsh=bmc5OGtxNnI4c2Nm" target="_blank" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#e4405f] hover:bg-[#e4405f] hover:text-white transition-all shadow-sm"><i className="fa-brands fa-instagram fa-xl md:fa-2xl"></i></a>
            <a href="https://x.com/daddy_kunyanja" target="_blank" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#000] hover:bg-[#000] hover:text-white transition-all shadow-sm"><i className="fa-brands fa-x-twitter fa-xl md:fa-2xl"></i></a>
            <a href="https://www.youtube.com/@ysf_tz" target="_blank" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#ff0000] hover:bg-[#ff0000] hover:text-white transition-all shadow-sm"><i className="fa-brands fa-youtube fa-xl md:fa-2xl"></i></a>
          </div>

          {/* Aligned at bottom */}
          <div className="mt-auto flex flex-grow w-full justify-between md:flex-none gap-3 md:w-auto lg:justify-end">
            <Link to="/donate" className="text-center bg-[#5a3ea6] text-white px-8 py-3 rounded-md font-bold hover:bg-black transition-colors shadow-lg active:scale-95">Donate</Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-[#5a3ea6] border-2 border-[#5a3ea6] px-4 py-3 rounded-md font-bold hover:bg-[#5a3ea6] hover:text-white transition-all shadow-md active:scale-95"
              aria-label="Scroll to top"
            >
              <i className="fa-solid fa-chevron-up"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-400/20 pt-8 text-center">
        <p className="text-xs md:text-sm font-medium text-gray-600">
          © {new Date().getFullYear()} All Rights Reserved. Yosso Sports Foundation is a chilren and youth sports NGO based in Tanzania focused on football, education and entreprenuership development, and leadership training
          <br className="md:hidden" /> . Website developed by <a href="#" className="text-[#5a3ea6] font-bold hover:underline">@kws_tz</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

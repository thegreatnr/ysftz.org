
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '/about',
      submenu: [
        { name: 'Who Are We', path: '/about#who-are-we' },
        { name: 'Activities', path: '/about#activities' },
        { name: 'Management Team', path: '/about#team' },
      ]
    },
    { 
      name: 'Programs',
      path: '#',
      submenu: [
        { name: 'YSF Academy', path: '/academy' },
        { name: 'SMAGAYOCO', path: '/smagayoco' },
      ]
    },
    { name: 'Reports', path: '/reports' },
    { name: 'Contacts', path: '#footer' },
  ];

  const isItemActive = (item: any) => {
    if (item.name === "Contacts") {
      return isFooterVisible;
    }

    if (item.path.startsWith("#")) return false;

    if (item.path !== '#' && location.pathname === item.path) return true;

    if (item.submenu) {
      return item.submenu.some((sub: any) => {
        const subBaseUrl = sub.path.split('#')[0];
        return location.pathname === subBaseUrl;
      });
    }

    return false;
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const footer = document.getElementById("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  const logoPath = "/site_images/Logo.jpg";

  const handleScrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  
  console.log("Footer visible:", isFooterVisible);

  return (
    <header className="sticky top-0 z-[5000] bg-white shadow-md border-b-4 border-[#5a3ea6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 md:py-3">
          
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-lg overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
              <img src={logoPath} alt="YSF Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm md:text-xl font-extrabold text-[#5a3ea6] leading-none uppercase">Yosso</p>
              <p className="text-xs md:text-lg font-bold text-[#5a3ea6] leading-none uppercase">Sports</p>
              <p className="text-xs md:text-lg font-bold text-[#5a3ea6] leading-none uppercase">Foundation</p>
            </div>
          </Link>

          {/* Desktop Layout Items */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <nav>
              <ul className="flex gap-2 lg:gap-4">
                {navItems.map((item) => (
                  <li key={item.name} className="relative group"
                    onMouseEnter={() => setActiveDesktopMenu(item.name)}
                    onMouseLeave={() => setActiveDesktopMenu(null)}
                  >
                    {item.name === "Contacts" ? (
                      <button
                        onClick={handleScrollToFooter}
                        className={`block py-3 px-2 lg:px-4 font-semibold whitespace-nowrap transition-all duration-300 ${
                          isItemActive(item)
                            ? 'underline underline-offset-8 decoration-4 decoration-[#5a3ea6] text-[#5a3ea6]'
                            : 'text-gray-700 hover:underline hover:underline-offset-8 hover:text-[#5a3ea6]'
                        }`}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link 
                        to={item.path}
                        className={`block py-3 px-2 lg:px-4 rounded-t-md transition-all font-semibold whitespace-nowrap ${
                          isItemActive(item) 
                          ? 'bg-[#5a3ea6] text-white underline underline-offset-8 decoration-4 decoration-[#fff]' 
                          : 'text-gray-700 hover:bg-[#9bb3da] hover:text-[#5a3ea6] hover:underline hover:underline-offset-8'
                        }`}
                      >
                        {item.name}
                        {item.submenu && <i className="fa-solid fa-chevron-down ml-2 text-xs"></i>}
                      </Link>
                    )}

                    {item.submenu && (
                      <ul   className={`absolute bg-white border border-gray-100 min-w-[200px] shadow-xl rounded-b-md overflow-hidden transition-all duration-200 ${
                        activeDesktopMenu === item.name ? "block" : "hidden"}`}
                      >
                        {item.submenu.map((sub) => (
                          <li key={sub.name}>
                            <Link 
                              to={sub.path}
                              onClick={() => setActiveDesktopMenu(null)}
                              className="block px-4 py-3 text-sm text-[#5a3ea6] font-bold hover:bg-[#5a3ea6] hover:text-white transition-colors border-b border-gray-50 last:border-0"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/company/yosso-fc-org/" target="_blank" className="text-[#0a66c2] hover:scale-110 transition-transform"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.facebook.com/share/1DqJRaVVie/" target="_blank" className="text-[#1877f2] hover:scale-110 transition-transform"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/yosso_soccer_center?igsh=bmc5OGtxNnI4c2Nm" target="_blank" className="text-[#e4405f] hover:scale-110 transition-transform"><i className="fa-brands fa-instagram"></i></a>
              </div>
              <Link 
                to="/donate" 
                className="bg-[#5a3ea6] text-white px-4 lg:px-6 py-2 rounded-md font-bold hover:bg-black transition-colors whitespace-nowrap"
              >
                Donate
              </Link>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-[#5a3ea6] text-2xl focus:outline-none p-2"
            aria-label="Open Menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div 
        className={`fixed inset-0 z-[6000] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div 
          className={`absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
              <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
                <img src={logoPath} alt="YSF Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-[#5a3ea6] text-base uppercase tracking-tight">Yosso Sports</span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-black p-2"
              aria-label="Close Menu"
            >
              <i className="fa-solid fa-xmark fa-xl"></i>
            </button>
          </div>

          <nav className="flex-grow overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name} className="border-b border-gray-50 last:border-0">
                  <div className="flex items-center justify-between">
                    {item.name === "Contacts" ? (
                      <button
                        onClick={handleScrollToFooter}
                        className="block py-3 px-2 lg:px-4 font-semibold whitespace-nowrap
                                  text-gray-700 hover:text-[#5a3ea6]
                                  transition-all duration-300"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link 
                        to={item.path}
                        onClick={() => !item.submenu && setIsMenuOpen(false)}
                        className={`block py-3 px-2 font-bold flex-grow ${isItemActive(item) ? 'text-[#5a3ea6]' : 'text-gray-700'}`}
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.submenu && (
                      <button 
                        onClick={() => toggleSubmenu(item.name)}
                        className={`p-3 transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`}
                      >
                        <i className="fa-solid fa-chevron-down text-[#5a3ea6]"></i>
                      </button>
                    )}
                  </div>
                  
                  {item.submenu && activeSubmenu === item.name && (
                    <ul className="bg-gray-50 rounded-lg mb-2 animate-fadeIn px-2">
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <Link 
                            to={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-3 text-sm text-gray-600 font-semibold border-b border-white last:border-0 hover:text-[#5a3ea6]"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-6">
            <div className="flex justify-center gap-6 text-2xl">
              <a href="https://www.linkedin.com/company/yosso-fc-org/" target="_blank" className="text-[#0a66c2]"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://www.facebook.com/share/1DqJRaVVie/" target="_blank" className="text-[#1877f2]"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/yosso_soccer_center?igsh=bmc5OGtxNnI4c2Nm" target="_blank" className="text-[#e4405f]"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://x.com/daddy_kunyanja" target="_blank" className="text-[#1da1f2]"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
            <Link 
              to="/donate"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full py-4 bg-[#5a3ea6] text-white text-center rounded-xl font-bold shadow-lg active:scale-95 transition-all"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


import ScrollToTop from "./components/ScrollToTop";
import React from 'react';
import { HashRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import SMAGAYOCO from './pages/SMAGAYOCO.tsx';
import YSFAcademy from './pages/YSFAcademy.tsx';
import Reports from './pages/Reports.tsx';
import Donate from './pages/Donate.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/smagayoco" element={<SMAGAYOCO />} />
            <Route path="/academy" element={<YSFAcademy />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
